import React, { Component } from 'react';
import { TextInput as ReactTextInput, StyleSheet } from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, .43)',
    color: 'white',
    paddingTop: 17,
    paddingBottom: 16,
    paddingHorizontal: 22,
    borderWidth: 0,
    height: 50,
    marginBottom: 16,
  },
});

export default class TextInput extends Component {
  focus() {
    this.input.focus();
  }

  render() {
    const { style } = this.props;
    const props = _.omit(this.props, 'style');

    return (
      <ReactTextInput
        ref={(input) => this.input = input}
        style={[styles.input, style]}
        placeholderTextColor="white"
        underlineColorAndroid="rgba(0,0,0,0)"
        {...props}
      />
    );
  }
}
