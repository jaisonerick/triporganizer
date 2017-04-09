import React, { Component } from 'react';
import { Image } from 'react-native';
import logoImg from './images/logo.png';

export default class Logo extends Component {
  render() {
    const { style } = this.props;
    return <Image source={logoImg} resizeMode="contain" style={style} />
  }
}

