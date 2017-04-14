import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Card from 'triporganizer/components/Card';
import Colors from 'triporganizer/components/Colors';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: 160,
  },
  cardContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 12,
    backgroundColor: Colors.transparent,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Colors.white,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.white,
  },
  cardBody: {
    padding: 12,
  },
  bodyText: {
    fontSize: 18,
    lineHeight: 22,
    color: Colors.primary,
    fontWeight: 'bold',
  }
});

export default class TripCard extends Component {
  render() {
    const {image, title, subtitle, body} = this.props;

    return (
      <Card>
        <Image source={image} style={styles.backgroundImage}>
          <LinearGradient colors={['rgba(0,0,0,.4)', 'rgba(0,0,0,.1)']} style={styles.cardContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>
                {title.toUpperCase()}
              </Text>
              <Text style={styles.subtitle}>
                {subtitle.toUpperCase()}
              </Text>
            </View>
          </LinearGradient>
        </Image>

        <View style={styles.cardBody}>
          <Text style={styles.bodyText}>
            {body.toUpperCase()}
          </Text>
        </View>
      </Card>
    );
  }
}
