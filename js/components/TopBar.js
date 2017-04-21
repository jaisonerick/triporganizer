import React, { Children, Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';

import Colors from './Colors';
import Toolbar from './Toolbar';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.primary,
  },
});

export default class TopBar extends Component {
  render() {
    const { onRightMenuPress, rightMenuIcon, rightMenuTitle, onMenuPress, menuIcon, title, subtitle } = this.props;

    if(title || Children.count(this.props.children) > 0) {
      return (
        <View>
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.2)"
            barStyle="light-content"
          />

          <View style={styles.navBar}>
            <Toolbar
              onMenuPress={onMenuPress} menuIcon={menuIcon} title={title} subtitle={subtitle}
              rightMenuIcon={rightMenuIcon} onRightMenuPress={onRightMenuPress}
              rightMenuTitle={rightMenuTitle}
            >
              {this.props.children}
            </Toolbar>
          </View>
        </View>
      );
    } else {
      const style = Platform.OS === 'ios' ? {
        height: 20,
        backgroundColor: Colors.primary,
      }: {};

      return (
        <View style={style}>
          <StatusBar
            translucent={false}
            backgroundColor="rgba(0,0,0,0.2)"
            barStyle="light-content"
          />
        </View>
      );
    }
  }
};
