import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from  'react-native-elements';

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <Card
            title='HELLO WORLD'>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

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
