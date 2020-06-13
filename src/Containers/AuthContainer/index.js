import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from './../IntroContainer';
import SignUpScreen from './SignUp';
import SignInScreen from './SignIn';

const RootStack = createStackNavigator();

const RootNavigator = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Intro" component={IntroScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
      <RootStack.Screen name="SignIn" component={SignInScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
