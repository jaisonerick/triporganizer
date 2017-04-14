import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PDFView from 'react-native-pdf-view';
import RNFetchBlob from 'react-native-fetch-blob'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class DocumentView extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    RNFetchBlob
      .config({ fileCache: true })
      .fetch('GET', 'https://s3.amazonaws.com/triporganizer-staging/uploads/registration/insurance/11/1490629945_Comprovante_DebVerso.pdf')
      .then((res) => this.setState({file: res.path(), loading: false}));
  }

  renderPDF() {
    return (
      <PDFView path={this.state.file} style={{flex: 1}} />
    )
  }
  renderLoading() {
    return (
      <Text>Carregando..</Text>
    );
  }
  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        { loading ? this.renderLoading() : this.renderPDF() }
      </View>
    );
  }
}
