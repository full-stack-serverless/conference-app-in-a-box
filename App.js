import Main from './src/Main'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Possible Unhandled Promise Rejection',
  'Remote debugger'
])

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

export default Main