import React, {Component} from 'react';
import {TouchableHighlight, TextInput, StyleSheet, Text, View} from 'react-native';
import { Auth } from 'aws-amplify'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, typography, dimensions } from './theme'
import BaseHeader from './BaseHeader'

export default class Profile extends Component {
  state = {
    username: '',
    email: '',
    twitter: 'dabit3',
    github: 'dabit3',
    isEditing: false
  }
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser()
    const { signInUserSession: { idToken: { payload }}} = user
    this.setState({
      username: user.username,
      email: payload.email
    })
  }
  toggleForm = () => this.setState({ isEditing: !this.state.isEditing })
  onChange = (key, value) => this.setState({ [key]: value })
  signOut = () => {
    Auth.signOut()
      .then(() => {
         this.props.screenProps.onStateChange('signedOut', null);
      })
      .catch(err => {
          console.log('err: ', err)
      })
  }
  render() {
    const buttonText = this.state.isEditing ? 'Save' : 'Edit Profile'
    return (
      <View style={styles.container}>
        <BaseHeader />
        <View style={styles.profileContainer}>
          <Text style={styles.username}>{this.state.username}</Text>
          <Text style={styles.email}>{this.state.email}</Text>
          {
            !this.state.isEditing ? (
              <Social
                twitter={this.state.twitter}
                github={this.state.github}
              />
            ) : (
              <Form
                onChange={this.onChange}
                twitter={this.state.twitter}
                github={this.state.github}
              />
            )
          }
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={this.toggleForm}
              underlayColor='transparent'
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {buttonText}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.signOut}
              underlayColor='transparent'
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Sign out
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const Social = ({ twitter, github}) => (
  <View>
    <View style={styles.iconContainer}>
      <Icon
        color={colors.highlight}
        name='logo-twitter'
        size={29}
      />
      <Text style={styles.twitterHandle}>{twitter}</Text>
    </View>
    <View style={[styles.iconContainer, styles.twitter]}>
      <Icon
        color='white'
        name='logo-github'
        size={29}
      />
      <Text style={styles.twitterHandle}>{github}</Text>
    </View>
  </View>
)

const Form = ({ onChange, twitter, github }) => (
  <View>
    <View>
      <TextInput
        onChangeText={value => onChange('twitter', value)}
        style={styles.input}
        value={twitter}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
    <View>
      <TextInput
        onChangeText={value => onChange('github', value)}
        style={styles.input}
        value={github}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    width: 110,
    borderWidth: 1,
    borderColor: colors.highlight,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: -1,
    marginRight: 15
  },
  buttonText: {
    color: colors.primaryText,
    marginTop: 3,
    fontFamily: typography.primary,
    fontSize: 13
  },
  input: {
    height: 45,
    width: dimensions.width - 30,
    borderBottomWidth: 2,
    marginBottom: 8,
    color: 'rgba(255, 255, 255, .5)',
    fontSize: 18,
    fontFamily: typography.primary,
    borderBottomColor: colors.highlight
  },
  twitterHandle: {
    color: colors.primaryText,
    fontFamily: typography.primary,
    fontSize: 18,
    marginLeft: 15
  },
  iconContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  gitHub: {
    marginTop: 15
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary2
  },
  profileContainer: {
    padding: 20
  },
  username: {
    fontSize: 26,
    marginBottom: 3,
    color: colors.primaryText,
    fontFamily: typography.primary,
  },
  email: {
    color: colors.primaryText,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: typography.primar
  }
});
