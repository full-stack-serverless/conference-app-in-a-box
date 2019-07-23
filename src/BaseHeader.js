import React from 'react'
import {
  Image,
  View,
  StyleSheet
} from 'react-native'

import { colors, logo } from './theme'

class BaseHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={logo}
          resizeMode='contain'
          style={styles.logo}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 10,
    bottom: 7,
    width: 120,
    height: 35
  },
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    height: 88
  }
})

export default BaseHeader