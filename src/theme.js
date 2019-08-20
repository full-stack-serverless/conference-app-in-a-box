import { Platform, Dimensions } from 'react-native'
const logo = require('./assets/logo.jpg')
const logoLight = require('./assets/logoLight.png')

const dimensions = Dimensions.get('window')

const primary = 'rgba(18, 25, 50, 1)'
const primaryLight = 'rgba(27, 37, 77, 1)'
const primaryDark = 'rgba(14, 20, 43, 1)'
const primaryOpaque = opacity => `rgba(18, 25, 50, ${opacity})`

const primaryText = 'white'

const highlight = '#61dafb'

const colors = {
  primary,
  highlight,
  primaryLight,
  primaryDark,
  primaryOpaque,
  primaryText
}

const typography = {
  primary: Platform.select({
    ios: "Gotham Rounded",
    android: "gothamrounded",
  }),
  secondary: Platform.select({
    ios: "Gotham Rounded",
    android: "gothamrounded",
  })
}


export {
  colors,
  typography,
  dimensions,
  logo,
  logoLight
}