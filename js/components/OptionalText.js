import React, { Component } from 'react';
import { Text } from 'react-native';

export default class OptionalText extends Component {
  static isEmpty(value) {
    return !value || value === "";
  }

  render() {
    let { value } = this.props;
    if(OptionalText.isEmpty(value)) {
      value = " - "
    }
    return <Text {...this.props}>{value}</Text>
  }
}

