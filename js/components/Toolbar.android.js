import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import pure from 'recompose/pure';
import { ToolbarAndroid } from 'react-native-vector-icons/Ionicons';

import logoCompanion from './img/logo_companion.png';
import Colors from './Colors';

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    flex: 0,
    backgroundColor: Colors.transparent,
    height: 56,
    marginTop: 24,
  },
});

const Toolbar = (props) => {
  const { onMenuPress, menuIcon, title } = props;

  return (
    <ToolbarAndroid
      navIconName={menuIcon}
      iconColor={props.iconColor || Colors.white}
      style={[styles.navBar, props.style]}
      logo={title === undefined && Children.count(props.children) === 0 ? logoCompanion : null}
      title={title}
      titleColor={Colors.white}
      onIconClicked={onMenuPress}
    >
      {props.children}
    </ToolbarAndroid>
  );
};

Toolbar.propTypes = {
  style: View.propTypes.style,
  onMenuPress: React.PropTypes.func.isRequired,
  menuIcon: React.PropTypes.string.isRequired,
  iconColor: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default pure(Toolbar);
