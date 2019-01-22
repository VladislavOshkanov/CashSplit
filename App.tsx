/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react' 
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import { composeWithDevTools } from "redux-devtools-extension";
import { friendsReducer, partiesReducer } from './src/reducers/index'

import Home from './src/components/HomeScreen/HomeScreenContainer'
import PartyCreation from './src/components/PartyCreation/PartyCreationContainer'

const navigationOptions = {
  // header: ({ state }) => ({
      // right: <Button title={"Save"} onPress={state.params.handleSave} />
    // })
};

const Layout = createStackNavigator({
  Home: {
    screen: Home,
  },
  PartyCreation : {
    screen: PartyCreation,
    navigationOptions: navigationOptions,
  },
  
},
  // navigationOptions,
)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const rootReducer = combineReducers({
  friends: friendsReducer,
  parties: partiesReducer
})
const middleware: Array<any> = []
const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default class App extends Component<Props> {
  render() {
    return (
     <Provider store = {store}>
      <Layout/>
     </Provider>
    );
  }
}

