import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class JourneyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => (
      <MaterialCommunityIcons name="view-list" size={25} color="#03A9F4" />
    )
  });
  render() {
    return (
      <View>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
      </View>
    );
  }
}
