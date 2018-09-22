import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { CreditCardInput } from 'react-native-credit-card-input';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../common/Header';
export default class DonationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <FontAwesome name="gratipay" size={25} color="#03A9F4" />
  });
  state = {
    message: null,
    amount: 0
  };
  async componentDidMount() {
    console.log('1');
    await axios
      .post(`http://localhost:5000/donation`, {
        name: 'eric',
        amount: 100
      })
      .then(response => response.data)
      .then(res => {
        this.setState({ exist: res.message });
      });
    console.log(this.state.message);
  }

  render() {
    return (
      <View>
        <Header headerText="Donation" />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={amount => this.setState({ amount })}
          value={this.state.email}
        />
        <CreditCardInput
          autoFocus
          requiresName
          requiresCVC
          requiresPostalCode
          validatePostalCode={() => 'valid'}
          labelStyle={{ color: 'black', fontSize: 12 }}
          inputStyle={{ fontSize: 16, color: 'black' }}
          validColor={'black'}
          invalidColor={'red'}
          placeholderColor={'darkgray'}
          onChange={formData => (this.formData = formData)}
        />
      </View>
    );
  }
}

const styles = {
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 20
  }
};
