import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native'
import { dimensions, colors, typography } from './theme'

export default class Talk extends Component {
  render() {
    const { navigation: { state: { params }}} = this.props
    console.log('params:', params)
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{uri: params.speakerAvatar}}
            resizeMode='cover'
            style={styles.avatar}
          />
          <Text style={styles.name}>{params.name}</Text>
          <Text style={styles.speakerName}>{params.speakerName}</Text>
          <Text style={styles.time}>{params.time}</Text>
          <Text style={styles.title}>Summary</Text>
          <Text style={styles.summary}>{params.summary}</Text>
          <Text style={styles.title}>Bio</Text>
          <Text style={styles.speakerBio}>{params.speakerBio}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 15,
    width: dimensions.width - 40,
    height: 300
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primaryLight
  },
  title: {
    fontSize: 22,
    marginTop: 15,
    fontWeight: '400',
    color: colors.primaryText,
    fontFamily: typography.primary,
  },
  name: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 20,
    color: colors.highlight,
    fontFamily: typography.primary,
  },
  speakerName: {
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 16,
    color: colors.primaryText,
    fontFamily: typography.primary
  },
  time: {
    color: colors.highlight,
    fontWeight: '500',
    fontFamily: typography.primary,
  },
  summary: {
    marginTop: 4,
    color: colors.primaryText,
    fontFamily: typography.primary,
  },
  speakerBio: {
    color: colors.primaryText,
  }
});

