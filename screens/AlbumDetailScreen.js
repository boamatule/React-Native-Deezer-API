import React from 'react';
import { ScrollView, StyleSheet, View } from  'react-native';
import * as actions from '../actions';
import { Avatar,Text, Icon, Divider, List, ListItem } from 'react-native-elements';

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Detail',
  };

  constructor() {
    super();

    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    const album = this.props.navigation.getParam('album', {});

    actions.getAlbumTracks(album.id).then(
      tracks => {
        this.setState({tracks});
      })
      .catch(error => console.error(error))
    }

    renderTracks() {
      const {tracks} = this.state;
  
      if (tracks && tracks.length > 0) {
        return tracks.map((track, index) => {
  
          return (
            <ListItem key={index}
                      title={track.title}
                      leftIcon={{name: 'play-arrow'}}
                      onPress={() => {}}
                      rightIcon={
                        <Icon raised
                              name='star'
                              type='font-awesome'
                              color='#f50'
                              onPress={() => {}}
                        />
                      }
            />
          )
        })
      }
    }
  
    render() {
      const album = this.props.navigation.getParam('album', {});
      const artist = this.props.navigation.getParam('artist', '');
  
      if (album.id) {
        return (
          <ScrollView style={styles.container}>
            <View>
              <Avatar xlarge rounded source={{uri: album.cover_medium}}> </Avatar>
              <View>
                <Text h4> {album.title} </Text>
                <Text h4> {artist} </Text>
                <Icon raised
                      name='play'
                      type='font-awesome'
                      color='#f50'
                      size={30}
                      onPress={() => {}} />
              </View>
            </View>
            <Divider style={{backgroundColor: 'black'}}/>
            <List>
            { this.renderTracks() }
            </List>
          </ScrollView>
        )
      } else {
        <View> <Text> Loading... </Text> </View>
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });

