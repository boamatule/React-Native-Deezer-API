import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class StorageScreen extends React.Component {
  static navigationOptions = {
    title: 'Storage',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> I am a storage screen! </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
