import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'triporganizer/components/Colors';
import Touchable from 'triporganizer/components/Touchable';

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
  },
});

export default class WithDetails extends Component {
  goToDetails() {
    const { navigation, screen, item } = this.props;
    navigation.navigate(screen, { item });
  }

  render() {
    return (
      <Touchable style={styles.touchable} onPress={() => this.goToDetails()}>
        <View style={styles.container}>
          <View style={styles.main}>
            {this.props.children}
          </View>

          <Icon name="ios-arrow-forward" size={30} color='#999' />
        </View>
      </Touchable>
    );
  }
}
