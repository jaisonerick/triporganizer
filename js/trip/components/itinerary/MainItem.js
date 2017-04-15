import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import ItemDetails from './ItemDetails';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginTop: -2,
  },
  when: {
    width: 70,
    paddingTop: 5,
  },

  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },

  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },

  icon: {
    width: 45,
    height: 45,
    backgroundColor: Colors.upcomingItem,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  iconPast: {
    backgroundColor: Colors.pastItem,
  },

  itemContent: {
    flex: 1,
    marginLeft: -27,
    paddingLeft: 46,
    borderLeftWidth: 9,
    borderLeftColor: Colors.upcomingItem,
    marginTop: 5,
    paddingBottom: 22,
    paddingRight: 16,
    position: 'relative',
    minHeight: 60,
    zIndex: 1,
  },
  borderPast: {
    borderLeftColor: Colors.pastItem,
  },
  noBorder: {
    borderLeftWidth: 0,
    paddingLeft: 54,
  },
});

function getBorderStyle(_style, props) {
  let style = [_style];
  if(props.past) {
    style.push(styles.borderPast);
  }

  if(props.last) {
    style.push(styles.noBorder);
  }

  return style;
}

function getIconStyle(_style, props) {
  let style = [_style];
  if(props.past) {
    style.push(styles.iconPast);
  }

  return style;
}

export default class MainItem extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.when}>
          <Text style={styles.titleText}>{this.props.medium.toUpperCase()}</Text>
          <Text style={styles.timeText}>{this.props.time}</Text>
        </View>

        <View style={getIconStyle(styles.icon, this.props)}>
          <Image source={{uri: this.props.medium_image, width: 16, height: 16}} />
        </View>

        <View style={getBorderStyle(styles.itemContent, this.props)}>
          <ItemDetails type={this.props.type} details={this.props.details} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
