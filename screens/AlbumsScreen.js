import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from  'react-native-elements';
import { CardList } from '../components/CardList';
import { SearchText }  from '../components/SearchText';

import * as actions from '../actions';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor() {
    super();
    this.state = {
      albums: [],
      isFetching: false
     }

     this.searchTracks = this.searchTracks.bind(this);
    }

    searchTracks(artist) {
      this.setState({isFetching: true, albums: []});
      actions.searchTracks(artist)
      .then(albums => this.setState({albums, isFetching: false}))
      .catch(err => this.setState({albums: [], isFetching: false}));
    }

    renderAlbumView() {
      const { albums, isFetching } = this.state;

      return (
        <ScrollView style={styles.container}>
          <SearchText submitSearch={this.searchTracks}> </SearchText>
          { albums.length > 0 && !isFetching && 
            <CardList data={ albums } 
                      imageKey={'cover_big'}
                      titleKey={'title'}
                      buttonText="See the details">
            </CardList>
          }
          {
            albums.length === 0 && isFetching && 
            <Text>Loading Albums</Text>
          }
        </ScrollView>

      )
    }
  render() {
    return this.renderAlbumView();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
