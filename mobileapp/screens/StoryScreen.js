import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
export default class StoryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <Entypo name="news" size={25} color="#03A9F4" />
  });
  render() {
    return (
      <View>
        <Text>StoryScreen</Text>
        <Text>StoryScreen</Text>
        <Text>StoryScreen</Text>
        <Text>StoryScreen</Text>
        <Text>StoryScreen</Text>
      </View>
    );
  }
}
