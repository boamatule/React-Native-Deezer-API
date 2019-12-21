import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Button, List, Text, ListItem, Icon } from 'react-native-elements';
import * as actions from '../actions';
import _ from 'lodash'

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorite Albums',
  };

  constructor() {
    super();

    this.state = {
      favoriteAlbums: undefined
    }
    this.getFavoriteAlbums();
  }

  async getFavoriteAlbums() {
    const favoriteAlbums = await actions.retrieveData('favoriteAlbums');

    if (favoriteAlbums) {
      this.setState({favoriteAlbums});
    }
  }

  renderFavoriteTracks() {
    if (tracks) {
      return _.map(tracks, (track, id) => {
        return (
          <ListItem
            key={id}
            title={track.title}
            leftIcon={{name: 'play-arrow'}}
            rightIcon={
              <Icon
                raised
                name='music'
                type='font-awesome'
                colo= '#f50' />
            }
          />
        )
      })
    }
  }

  renderFavoriteAlbums() {
    const { favoriteAlbums } = this.state;

    if (favoriteAlbums) {
      return _.map(favoriteAlbums, (album, id) => {
        return (
          <View key={id}> 
            <Card
            title={album.title}> 
              <Button
                title='Delete Album'
                raised
                backgroundColor='#f50'
                name='trash'
                onPress={() => {}}
             />
            </Card>
          </View>
        )
      })
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <List containerStyle={styles.listContainer}> */}
          {this.renderFavoriteAlbums()}
        {/* </List> */}
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
  listContainer: {
    backgroundColor: '#eaeaea'
  }
});
