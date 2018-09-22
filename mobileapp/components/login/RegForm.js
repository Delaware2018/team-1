import React from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import CardSection from '../../common/CardSection';
import Spinner from '../../common/Spinner';
import { withNavigation } from 'react-navigation';

class RegForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: '',
    loading: false
  };
  async onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.setName(this.state.username);
      })
      .catch(this.onLoginFail.bind(this));
  }

  onLoginFail() {
    this.setState({ error: 'Registration Failed - Bad Input', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={this.onButtonPress.bind(this)}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.8)"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={name => this.setState({ username: name })}
          value={this.state.username}
        />
        <TextInput
          placeholder="user@email.com"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={inputs => (this.passwordInput = inputs)}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        {this.renderButton()}
        <TouchableOpacity
          style={styles.joinContainer}
          onPress={() => this.props.navigation.navigate('auth')}
        >
          <Text style={styles.joinText}>Go Back to Login Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(RegForm);

const styles = {
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 12
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  joinContainer: {
    paddingVertical: 12,
    marginBottom: 15
  },
  joinText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
