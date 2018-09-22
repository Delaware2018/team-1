import React from 'react';
import { View, Text, FlatList, Image, YellowBox } from 'react-native';
import { Button, List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';
import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
export default class JourneyScreen extends React.Component {
  state = {
    data: []
  };
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => (
      <MaterialCommunityIcons name="view-list" size={25} color="#03A9F4" />
    )
  });

  async componentDidMount() {
    this.forceUpdate();
    console.disableYellowBox = true;
    await axios
      .get(`http://localhost:5000/journey/vdkremezis`)
      .then(response => response.data)
      .then(res => {
        this.setState({ data: res });
      });
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  renderFooter = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          padding: 5,
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderColor: '#ddd',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <Header headerText="Journey" />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Card>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row'
                }}
              >
                <View style={styles.thumbnailContainerStyle}>
                  <Image
                    style={styles.thumbnailStyle}
                    source={require('../images/bepositive.png')}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.headerContentStyle}>
                  <Text style={styles.headerTextStyle}>${item.amount}</Text>
                  <Text style={{ marginTop: 10 }}>{item.dateOfDonation}</Text>
                </View>
              </View>
            </Card>
          )}
        />
      </View>
    );
  }
}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 20
  },
  thumbnailStyle: {
    height: 100,
    width: 100
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
