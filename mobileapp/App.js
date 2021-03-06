import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  TabBarBottom
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import DonationScreen from './screens/DonationScreen';
import JoinScreen from './screens/JoinScreen';
import JourneyScreen from './screens/JourneyScreen';
import LoginScreen from './screens/LoginScreen';
import RegScreen from './screens/RegScreen';
import StoryScreen from './screens/StoryScreen';
import firebase from 'firebase';

const MainNavigator = createBottomTabNavigator(
  {
    welcome: {
      screen: WelcomeScreen
    },
    auth: { screen: LoginScreen },
    reg: { screen: RegScreen },
    main: {
      screen: createBottomTabNavigator(
        {
          Join: { screen: JoinScreen },
          land: {
            screen: createBottomTabNavigator({
              Journey: { screen: JourneyScreen },
              Feed: { screen: StoryScreen },
              Donate: { screen: DonationScreen }
            })
          }
        },
        {
          tabBarPosition: 'bottom',
          navigationOptions: {
            tabBarVisible: false
          },
          tabBarOptions: {
            labelStyle: { fontSize: 12 },
            style: {
              backgroundColor: '#cce7e8',
              paddingTop: 8
            },
            activeTintColor: '#620266'
          }
        }
      )
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    lazyLoad: true
  }
);

export default class App extends React.Component {
  componentDidMount() {
    this.forceUpdate();
    const config = {
      apiKey: 'AIzaSyCF9z_hOT2RVoi-eNe2h0RDMAjm5vEKJ5Y',
      authDomain: 'code4good-84536.firebaseapp.com',
      databaseURL: 'https://code4good-84536.firebaseio.com',
      projectId: 'code4good-84536',
      storageBucket: '',
      messagingSenderId: '426248416399'
    };
    firebase.initializeApp(config);
  }
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
