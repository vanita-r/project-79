import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {BottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {AppContainer} from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from "./screens/SignUpLoginScreen";
import ExchangeScreen from "./screens/ExchangeScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <AppContainer/>
  );
}
const BottomTabNavigator= createBottomTabNavigator({ 
  SignUpLoginScreen:{screen:SignUpLoginScreen}, 
  ExchangeScreen:{screen:ExchangeScreen},
  HomeScreen:{screen:HomeScreen} 
}) 
const AppContainer= createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
