import React from 'react';
import { View, Text, TextInput, YellowBox } from 'react-native';
import { Input } from 'react-native-elements';
import axios from 'axios';
import { CreditCardInput } from 'react-native-credit-card-input';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../common/Header';
import Button from '../common/Button';
import CardSection from '../common/CardSection';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
export default class DonationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings',
    tabBarIcon: () => <FontAwesome name="gratipay" size={25} color="#03A9F4" />
  });
  state = {
    message: null,
    amount: 0
  };

  onPayment = async () => {
    await axios
      .post(`http://localhost:5000/donation`, {
        name: 'vdkremezis',
        amount: this.state.amount
      })
      .then(response => response.data)
      .then(res => {
        this.setState({ message: 'payment processed' });
      });
  };

  componentWillMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View>
        <Header headerText="Donation" />
        <View style={{ padding: 10 }} />
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

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 25
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              alignItems: 'center'
            }}
          >
            All Donations are not refundable
          </Text>
        </View>
        <TextInput
          placeholder="Amount"
          placeholderTextColor="rgba(0,0,0,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={amount => this.setState({ amount })}
          value={this.state.amount}
        />

        <CardSection>
          <Button onPress={() => this.onPayment()}>Donate!</Button>
        </CardSection>
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
