import React, { Component, Children } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from './Colors';
import Touchable from './Touchable';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarItem: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  menuIcon: {
    paddingLeft: 20,
    paddingRight: 12,
  },
  title: {
    paddingLeft: 12,
    paddingRight: 20,
    flex: 1,
  },
  titleText: {
    color: Colors.white,
    fontSize: 20,
  },
});

export default class Toolbar extends Component {
  render() {
    const { onMenuPress, menuIcon, rightMenuIcon, onRightMenuPress, title } = this.props;

    if(!title && Children.count(this.props.children) == 0) {
      return null;
    }

    return (
      <View style={[styles.navBar, this.props.style]}>
        {
          menuIcon &&
          <Touchable onPress={onMenuPress} rippleColor={Colors.brandDark} rippleBorderless>
            <View style={[styles.navBarItem, styles.menuIcon]}>
              <Icon name={menuIcon} size={30} color={this.props.iconColor || Colors.white} />
            </View>
          </Touchable>
        }

        {
          (Children.count(this.props.children) > 0 || title) &&
          <View style={[styles.navBarItem, styles.title]}>
            {
              Children.count(this.props.children) === 0 &&
              <Text style={styles.titleText}>{title}</Text>
            }

            {this.props.children}
          </View>
        }

        {
          rightMenuIcon &&
          <Touchable onPress={onRightMenuPress} rippleColor={Colors.brandDark} rippleBorderless>
            <View style={[styles.navBarItem, styles.menuIcon]}>
              <Icon name={rightMenuIcon} size={30} color={this.props.iconColor || Colors.white} />
            </View>
          </Touchable>
        }
      </View>
    );
  }
};
