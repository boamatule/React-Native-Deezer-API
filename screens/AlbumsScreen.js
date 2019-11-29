import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from  'react-native-elements';
import { readAsStringAsync } from 'expo-file-system';

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
    }

    renderAlbums() {
      const { albums } = this.state;

      return albums.map((album, index) => {
        return (
          <Card
            title={album.title}
            image={{uri: album.image}}>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
        )
      })
    }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        { this.renderAlbums() }    
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
