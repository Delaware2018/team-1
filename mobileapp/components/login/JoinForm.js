import React from 'react';
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

class JoinForm extends React.Component {
  state = {
    chapterID: '',
    error: '',
    loading: false
  };
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
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
        <Text style={styles.buttonText}>Join Chapter</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="Chapter ID"
          placeholderTextColor="rgba(255,255,255,0.8)"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={id => this.setState({ chapterID: id })}
          value={this.state.username}
        />

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        {this.renderButton()}
      </View>
    );
  }
}

export default withNavigation(JoinForm);

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
