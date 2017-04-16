import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RefreshControl, ScrollView, View, StyleSheet } from 'react-native';
import Colors from 'triporganizer/components/Colors';
import Documents from '../components/Documents';
import { loadDocuments } from '../document';

const mapStateToProps = (state, props) => ({
  documents: state.document.documents,
});

const mapDispatchToProps = ({
  loadDocuments,
});

@connect(mapStateToProps, mapDispatchToProps)
export default class DocumentsApp extends Component {
  componentWillMount() {
    this.props.loadDocuments();
  }

  onRefresh() {
    this.props.loadDocuments();
  }

  renderRefreshControl() {
    return <RefreshControl refreshing={false} onRefresh={this.onRefresh} />;
  }

  render() {
    return (
      <View style={styles.scrollView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
          refreshControl={this.renderRefreshControl()}
        >
          <Documents documents={this.props.documents} />
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
