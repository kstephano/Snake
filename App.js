/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import Store from './Redux/Store'
import GameScreen from './Screens/GameScreen'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'

const Stack = createStackNavigator()

const GameStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
      name='Home'
      component={HomeScreen}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen 
      name='Settings'
      component={SettingsScreen}
      options={{
        title: "SETTINGS",
        headerTitleStyle: {
          fontFamily: 'monospace',
          color: '#ffffff',
          fontSize: 24,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerTransparent: 'true'
      }}
    />
    <Stack.Screen 
      name='Game'
      component={GameScreen}
      options={{
        title: '',
        headerTintColor: '#ffffff',
        headerTransparent: 'true'
      }}
    />
  </Stack.Navigator>
)

export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <GameStack />
        </NavigationContainer>
      </Provider>
      
    )
  }
}