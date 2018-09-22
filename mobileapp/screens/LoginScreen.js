import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from '../components/login/LoginForm';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/bepositive.png')}
          />
          <Text style={styles.title}>Be Positive</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm setName={name => this.props.setName(name)} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    opacity: 0.9
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 35
  },
  logo: {
    width: 170,
    height: 170
  },
  title: {
    color: '#FFF',
    marginTop: 30,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 30,
    fontWeight: 'bold'
  },
  joinContainer: {
    paddingVertical: 12,
    marginBottom: 15
  }
};
