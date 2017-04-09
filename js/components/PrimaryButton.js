import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from './Colors';
import Touchable from './Touchable';

const TYPES = {
  main: {
    ripple: Colors.primaryLight,
    color: Colors.white,
    background: Colors.primary,
  },
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: Colors.primary,
    paddingTop: 17,
    paddingBottom: 16,
    paddingHorizontal: 22,
    height: 50,
    marginBottom: 16,

    alignSelf: 'stretch',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default class TextInput extends Component {
  render() {
    return (
      <Touchable
        rippleColor={Colors.primaryLight}
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <Text
          pointerEvents="none"
          style={styles.buttonText}
        >
          {this.props.text}
        </Text>
      </Touchable>
    );
  }
}
