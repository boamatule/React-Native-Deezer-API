import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from  'react-native-elements';
import { readAsStringAsync } from 'expo-file-system';
import { CardList } from '../components/CardList';

import * as actions from '../actions';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor() {
    super();
    this.state = {
      albums: [
        {
          title: 'MAKAVELI',
          image: 'https://behindtherhymes.files.wordpress.com/2016/11/makaveli-cover.jpg?w=640'
        },
        {
          title: 'MAKAVELI',
          image: 'https://behindtherhymes.files.wordpress.com/2016/11/makaveli-cover.jpg?w=640'
        },
        {
          title: 'MAKAVELI',
          image: 'https://behindtherhymes.files.wordpress.com/2016/11/makaveli-cover.jpg?w=640'
        }
      ] 
     }

     actions.searchTracks('2Pac').then(
       (albums) => {
        debugger;
       }
     );
    }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <CardList data={albums}
                  imageKey={'image'}
                  titleKey={'title'}
                  buttonText="See the details"></CardList>
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
