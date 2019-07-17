import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { withAuthenticator } from 'aws-amplify-react-native'

import Schedule from './Schedule'
import Profile from './Profile'
import Map from './Map'

import { colors } from './theme'

const Tabs = createBottomTabNavigator({
  Schedule: {
    screen: Schedule
  },
  Profile: {
    screen: Profile,
  },
  Map: {
    screen: Map,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#61dafb',
    inactiveTintColor: '#fafafa',
    style: {
      backgroundColor: colors.primary
    }
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      if (routeName === 'Schedule') {
        return <Icon color={tintColor} size={20} name='calendar' />
      }
      if (routeName === 'Map') {
        return <Icon color={tintColor} size={20} name='map' />
      }
      return <Icon color={tintColor} size={20} name='user' />
    }
  })
})

const App = createAppContainer(Tabs)

export default withAuthenticator(App)