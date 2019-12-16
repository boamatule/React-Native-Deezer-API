import React from 'react';
import { ScrollView, StyleSheet, View, Text } from  'react-native';
import { ExpoLinksView } from '@expo/samples';




export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Details',
  };

    render() {
      const album = this.props.navigation.getParam('album', {});
      console.log(album);

      return (
        <ScrollView style={styles.container}>
          <View><Text>{album.title}</Text></View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });

