import React from 'react'
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'

import logo from './assets/logo.jpg'
import { colors } from './theme'

class BaseHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 10,
    bottom: 7,
    width: 100,
    height: 35
  },
  title: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    marginTop: 50,
    fontSize: 16
  },
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    height: 88
  }
})

export default BaseHeader