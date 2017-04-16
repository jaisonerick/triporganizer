import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import PDFView from 'react-native-pdf-view';
import PhotoView from 'react-native-photo-view';
import RNFetchBlob from 'react-native-fetch-blob'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default class DocumentView extends Component {
  renderPDF() {
    return (
      <PDFView path={this.state.file} style={{flex: 1}} />
    )
  }

  render() {
    const { document } = this.props;
    console.log(document);
    return (
      <View style={styles.container}>
        {
          document.display_type == 'image' &&
          <PhotoView
            source={{ uri: `file:///${document.local_url}`, width: document.width, height: document.height }}
            minimumZoomScale={0.1}
            maximumZoomScale={5}
            androidScaleType="center"
            onLoad={() => console.log("Image loaded!")}
            style={styles.image} />
        }

        {
          document.display_type == 'document' &&
          <PDFView path={document.local_url} style={{flex: 1}} />
        }
      </View>
    );
  }
}
