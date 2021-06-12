import React from 'react';
import { StyleSheet, Text, View ,TextInputs,Touchable, Appearance} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import{AppTabNavigator} from './components/AppTabNavigator'
import {createAppContainer,createSwitchNavigator} from'react-navigation';

export default function App() {
  return (
    
  <AppContainer/>

  
  );
}

const switchNavigator= createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},
    BottomTab:{screen:AppTabNavigator}
})

const AppContainer=createAppContainer(switchNavigator);
