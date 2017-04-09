import React, { Component } from 'react';
import { TextInput as ReactTextInput, StyleSheet } from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  input: {
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
  render() {
    const { style } = this.props;
    const props = _.omit(this.props, 'style');

    return (
      <ReactTextInput
        style={[styles.input, style]}
        placeholderTextColor="white"
        {...props}
      />
    );
  }
}
