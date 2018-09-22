import React from 'react';
import Slides from '../components/Slides';
const SLIDE_DATA = [
  { text: 'Welcome to Be Positive', color: '#76e29a' },
  { text: 'Use Be Positive to stay connected', color: '#03A9F4' }
];

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: { visible: false },
    title: 'Welcome'
  };
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  };
  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}
