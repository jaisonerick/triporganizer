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
  noImageTrip: {
    flex: 1,
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
  },
  sponsorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sponsorsLeft: {
    flex: 0,
    marginRight: 12,
  },
  sponsorsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  sponsorsRight: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sponsorsImage: {
    margin: 4,
  },
});

export default class TripCard extends Component {
  renderSponsors(sponsors) {
    return (
      <View style={styles.sponsorsContainer}>
        <View style={styles.sponsorsLeft}>
          <Text style={styles.sponsorsTitle}>Apoio:</Text>
        </View>
        <View style={styles.sponsorsRight}>
          {
            sponsors.filter(sponsor => sponsor.image).map((sponsor) => (
              <Image key={sponsor.id} source={sponsor.image} resizeMode="contain" style={styles.sponsorsImage} />
            ))
          }
        </View>
      </View>
    );
  }

  renderMain(children) {
    const { image } = this.props;

    if(image && image.url) {
      return (
        <Image source={image} style={styles.backgroundImage}>
          {children}
        </Image>
      );
    }
    return (
      <View style={styles.noImageTrip}>
        {children}
      </View>
    );
  }

  render() {
    const {image, title, subtitle, body, sponsors, onPress} = this.props;

    return (
      <Card onPress={onPress}>
        {
          this.renderMain(
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
          )
        }

        <View style={styles.cardBody}>
          {
            (!sponsors || sponsors.length === 0) &&
            <Text style={styles.bodyText}>
              {body.toUpperCase()}
            </Text>
          }

          {
            sponsors && sponsors.length > 0 &&
              this.renderSponsors(sponsors)
          }
        </View>

      </Card>
    );
  }
}
