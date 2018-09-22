import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Header from '../common/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class JourneyScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => (
      <MaterialCommunityIcons name="view-list" size={25} color="#03A9F4" />
    )
  });
  async componentDidMount() {
    await axios
      .get(`http://localhost:5000/journey/vdkremezis`)
      .then(response => response.data)
      .then(res => {
        console.log(res);
      });
  }
  render() {
    return (
      <View>
        <Header headerText="Journey" />
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
        <Text>JourneyScreen</Text>
      </View>
    );
  }
}
