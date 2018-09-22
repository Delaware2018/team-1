import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#86839e',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 7,
    paddingBottom: 7
  },
  buttonStyle: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: 'white',
    justifyContent: 'center'
  }
};

export default Button;
