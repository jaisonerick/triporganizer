import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/Ionicons';

import logo from './images/logo.png';
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
  const { onMenuPress, menuIcon, title, subtitle, onRightMenuPress, rightMenuIcon, rightMenuTitle } = props;

  let actions = null;
  if(rightMenuIcon) {
    actions = [{
      title: rightMenuTitle,
      iconName: rightMenuIcon,
      iconColor: props.iconColor || Colors.white,
      show: 'always',
      showWithText: false,
      onActionSelected: () => onRightMenuPress()
    }];
  }

  return (
    <ToolbarAndroid
      navIconName={menuIcon}
      iconColor={props.iconColor || Colors.white}
      style={[styles.navBar, props.style]}
      logo={title === undefined && Children.count(props.children) === 0 ? logo : null}
      title={title}
      subtitle={subtitle}
      titleColor={Colors.white}
      subtitleColor={Colors.white}
      onIconClicked={onMenuPress}
      actions={actions}
    >
      {props.children}
    </ToolbarAndroid>
  );
};

Toolbar.propTypes = {
  style: View.propTypes.style,
  onMenuPress: React.PropTypes.func,
  menuIcon: React.PropTypes.string,
  iconColor: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Toolbar;
