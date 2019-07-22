import Main from './src/Main'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

export default Main