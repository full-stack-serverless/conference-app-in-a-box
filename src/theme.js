import { Platform, Dimensions } from 'react-native'
const logo = require('./assets/logo.png')
const logoLight = require('./assets/logoLight.png')

// example base logos for alternate themes
const purpThemeLogo = require('./assets/purpThemeLogo.png')
const logoDarkTheme = require('./assets/logoDarkTheme.png')
const logoLightTheme = require('./assets/logoLightTheme.png')

const dimensions = Dimensions.get('window')

const baseTheme = {
  primary: 'rgba(18, 25, 50, 1)',
  primaryLight: 'rgba(27, 37, 77, 1)',
  primaryDark: 'rgba(14, 20, 43, 1)',
  primaryOpaque: opacity => `rgba(18, 25, 50, ${opacity})`,
  primaryText: 'white',
  inactive: 'white',
  highlight: '#61dafb'
}

const darkTheme = {
  primary: 'rgba(0,0,0, .9)',
  primaryLight: 'rgba(20,20,20, 1)',
  primaryDark: 'rgba(0,0,0, 1)',
  primaryOpaque: opacity => `rgba(0,0,0, ${opacity})`,
  primaryText: 'white',
  inactive: 'white',
  highlight: '#ed0000'
}

const purpTheme = {
  primary: '#4e3281',
  primaryLight: '#604591',
  primaryDark: '#361b67',
  primaryOpaque: opacity => `rgba(78,50,129, ${opacity})`,
  primaryText: 'white',
  inactive: 'white',
  highlight: '#bebebe'
}

const lightTheme = {
  primary: '#f6f6f6',
  primaryLight: '#fff',
  primaryDark: '#eaeaea',
  primaryOpaque: opacity => `rgba(113, 113, 113, ${opacity})`,
  primaryText: '#141414',
  inactive: '#ddd',
  highlight: '#539bf8'
}


const colors = {
  ...baseTheme
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
  logo as logo,
  logoLight
}
