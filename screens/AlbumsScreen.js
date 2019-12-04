import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from  'react-native-elements';
import { readAsStringAsync } from 'expo-file-system';
import { CardList } from '../components/CardList';
import { SearchText } from  '../components/SearchText'

import * as actions from '../actions';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor() {
    super();

    this.state = {
      albums: null 
     }
    actions.searchTracks('2 Pac').then(albums => this.setState({albums}));
    }

  render() {
    const { albums } = this.state;

    return (
      <ScrollView style={styles.container}>
        <SearchText></SearchText>
        <CardList data={ albums } 
                  imageKey={'cover_big'}
                  titleKey={'title'}
                  buttonText="See the details">
        </CardList>
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
