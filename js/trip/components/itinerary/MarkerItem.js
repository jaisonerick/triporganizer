import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Flight from './items/Flight';

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
    width: 30,
    height: 30,
    backgroundColor: Colors.upcomingItem,
    borderRadius: 30,
    zIndex: 3,
    marginLeft: 77,
    marginRight: 8,
  },
  iconPast: {
    backgroundColor: Colors.pastItem,
  },

  itemContent: {
    marginLeft: -27,
    paddingLeft: 46,
    borderLeftWidth: 9,
    borderLeftColor: Colors.upcomingItem,
    marginTop: 5,
    paddingBottom: 22,
    paddingRight: 16,
    position: 'relative',
    minHeight: 40,
    zIndex: 1,
  },
  borderPast: {
    borderLeftColor: Colors.pastItem,
  },
  noBorder: {
    borderLeftWidth: 0,
    paddingLeft: 54,
  },
  text: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
  }
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

export default class MarkerItem extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={getIconStyle(styles.icon, this.props)} />

        <View style={getBorderStyle(styles.itemContent, this.props)}>
          <Text style={styles.text}>Teste</Text>
        </View>
      </View>
    );
  }
}
