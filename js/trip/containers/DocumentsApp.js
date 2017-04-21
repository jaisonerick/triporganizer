import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Documents from '../components/Documents';
import { getDocumentList } from '../selectors';

const mapStateToProps = (state, props) => ({
  documents: getDocumentList(state, props),
});

@connect(mapStateToProps)
export default class DocumentsApp extends Component {
  render() {
    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          <Documents documents={this.props.documents} navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.canvas,
  },
  container: {
    alignItems: 'stretch',
  },
});
