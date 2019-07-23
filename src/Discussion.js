import React, {Component} from 'react';
import {AppState, KeyboardAvoidingView, ScrollView, TextInput, StyleSheet, Text, View , Dimensions, NetInfo} from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import Constants from 'expo-constants'

import { listCommentsByTalkId } from './graphql/queries'
import { onCreateComment as OnCreateComment } from './graphql/subscriptions'
import { createComment } from './graphql/mutations'
import { colors, dimensions, typography } from './theme'

const DEVICE_ID = Constants.installationId
const { width } = Dimensions.get('window')

export default class Discussion extends Component {
  static navigationOptions = () => ({
    title: "Discussion"
  })
  state = { comments: [], message: '', subscribed: false }
  subscription = {}
  async componentDidMount() {
    this.subscribe()
    AppState.addEventListener('change', this.handleAppStateChange)
    NetInfo.addEventListener('connectionChange', this.netInfoChange);
    const { navigation: { state: { params }}} = this.props
    try {
      const commentData = await API.graphql(
        graphqlOperation(listCommentsByTalkId, {
        talkId: params.id
     }))
     console.log('commentData: ', commentData)
      const { data: { listCommentsByTalkId: { items }}} = commentData
      this.setState({ comments: items })
    } catch (err) {
      console.log('error fetching comments: ', err)
    }

    try {
      const { username } = await Auth.currentAuthenticatedUser()
      this.setState({ username })
    } catch (err) { console.log('error fetching user info: ', err)}
  }
  componentWillUnmount() {
    this.unsubscribe()
    NetInfo.removeEventListener('connectionChange', this.netInfoChange)
  }
  handleAppStateChange = (appState) => {
    if (appState === 'active') {
      this.subscribe()
    }
    if (appState === 'background') {
      this.unsubscribe()
    }
  }
  subscribe() {
    if (this.state.subscribed) return
    const { navigation: { state: { params }}} = this.props
    this.subscription = API.graphql(
      graphqlOperation(OnCreateComment, { talkId: params.id })
    )
    .subscribe({
      next: data => {
        const { value: { data: { onCreateCommentWithId }}} = data
        if (onCreateCommentWithId.deviceId === DEVICE_ID) return
        const comments = [
          ...this.state.comments,
          onCreateCommentWithId
        ]
        this.setState({ comments })
      }
    })
    this.setState({ subscribed: true })
  }
  unsubscribe = () => {
    if (!this.state.subscribed) return
    this.setState({ subscribed: false })
    this.subscription.unsubscribe()
  }
  netInfoChange = state => {
    if (state.type === 'none') {
      this.unsubscribe()
    } else {
      this.subscribe()
    }
  }
  createMessage = async () => {
    if (!this.state.message) return
    const { navigation: { state: { params }}} = this.props
    const { message, username } = this.state
    const comments = [...this.state.comments, { message, createdBy: this.state.username }]
    this.setState({ comments, message: '' })
    try {
      await API.graphql(graphqlOperation(createComment, {
        input: {
          talkId: params.id,
          message,
          createdBy: username,
          deviceId: DEVICE_ID
        }
      }))
    } catch (err) {
      console.log('error: ', err)
    }
  }
  onChangeText = message => {
    this.setState({ message })
  }
  render() {
    return (
      <KeyboardAvoidingView
      enabled
      keyboardVerticalOffset={130}
      behavior="padding"
      style={styles.container}>
        <View style={styles.scrollViewContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {
              !this.state.comments.length && (
                <View style={styles.comment}>
                  <Text style={styles.message}>No comments yet!</Text>
                </View>
              )
            }
            {
              this.state.comments.map((c, i) => (
                <View key={i} style={styles.comment}>
                  <Text
                    style={styles.message}
                  >{c.message}</Text>
                  <Text
                    style={styles.createdBy}
                  >{c.createdBy}</Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
        <View>
          <TextInput
            value={this.state.message}
            onChangeText={this.onChangeText}
            style={styles.input}
            onSubmitEditing={this.createMessage}
            autoCapitalize='none'
            placeholder='Discuss this talk.'
            autoCorrect={false}
          />
          {/* <Button title='Send' onPress={this.createMessage} /> */}
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: dimensions.width - 50,
    height: 50,
    width,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    fontFamily: typography.primary,
    fontSize: 16
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  scrollViewContainer: {
    flex: 1,
    paddingBottom: 50
  },
  time: {
    color: 'rgba(0, 0, 0, .5)'
  },
  message: {
    fontFamily: typography.primary,
    color: colors.primaryText,
    fontSize: 16
  },
  createdBy: {
    fontFamily: typography.primary,
    color: colors.highlight,
    marginTop: 4
  },
  comment: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: colors.primaryDark,
    borderBottomColor: '#25223e',
    borderBottomWidth: 1
  }
});

