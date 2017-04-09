import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = (props) => (
  <TouchableOpacity accessibilityTraits="button" activeOpacity={0.7} {...props}>
    {props.children}
  </TouchableOpacity>
);

Touchable.propTypes = {
  ...TouchableOpacity.propTypes,
  children: React.PropTypes.element.isRequired,
};

export default Touchable;
