import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from './Colors';
import Touchable from './Touchable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 2,
    margin: 4,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    backgroundColor: Colors.white,
  },
});

export default class Card extends Component {
  render() {
    const { children, onPress } = this.props;

    return (
      <Touchable onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.card}>
            {children}
          </View>
        </View>
      </Touchable>
    );
  }
}
