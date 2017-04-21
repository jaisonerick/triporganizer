/* eslint-disable new-cap */
import React from 'react';
import { View, TouchableNativeFeedback, Platform } from 'react-native';
import omit from 'lodash/omit';

const Touchable = (props) => {
  const background = Platform.Version < 21 ?
    TouchableNativeFeedback.SelectableBackground() :
    TouchableNativeFeedback.Ripple(props.rippleColor, props.rippleBorderless);

  return (
    <TouchableNativeFeedback
      background={background}
      delayPressIn={50}
      {...omit(props, 'style', 'children')}
    >
      <View style={props.style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
};

Touchable.propTypes = {
  ...TouchableNativeFeedback.propTypes,
  rippleColor: React.PropTypes.string,
  rippleBorderless: React.PropTypes.bool,
};

export default Touchable;
