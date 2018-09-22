import React from 'react';
import { View, Text, FlatList, Image, YellowBox } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import SocketIOClient from 'socket.io-client';
import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
export default class StoryScreen extends React.Component {
  state = {
    data: []
  };
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <Entypo name="news" size={25} color="#03A9F4" />
  });

  async componentDidMount() {
    console.disableYellowBox = true;
    await axios
      .get(`http://localhost:5000/feed`)
      .then(response => response.data)
      .then(res => {
        this.setState({ data: res });
      });

    const socket = SocketIOClient('http://localhost:5000');
    socket.on('createFeed', feed => {
      this.state.data.push(feed);
      // this.setState({ data: this.state.data.push(feed) });
      console.log(this.state.data);
    });
    console.log(this.state.data);
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#708690',
          marginLeft: '14%'
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <Header headerText="Feeds" />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Card>
              <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                  <Image
                    style={styles.thumbnailStyle}
                    source={{
                      uri: item.urlLink
                    }}
                  />
                </View>
                <View style={styles.headerContentStyle}>
                  <Text style={styles.headerTextStyle}>{item.feedName}</Text>
                </View>
              </CardSection>

              <CardSection>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: item.urlLink
                  }}
                />
              </CardSection>
              <CardSection>
                <Button onPress={() => Linking.openURL(item.feedLocation)}>
                  Read More...
                </Button>
              </CardSection>
            </Card>
          )}
          keyExtractor={item => item.artist}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    textAlign: 'center'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
};
