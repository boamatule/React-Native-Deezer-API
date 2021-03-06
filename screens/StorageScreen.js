import React from 'react';
import { Button, Divider, Text } from 'react-native-elements'
import { ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import * as actions from '../actions';

export default class StorageScreen extends React.Component {
  static navigationOptions = {
    title: 'Storage',
  };

  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  async storeData() {
    const data = {
      value: 'Some Testing Data!'
    }
    const value = await actions.storeData('someKey', data);

    if (value) {
      console.log(value);
  
    }
  }

  async retrieveData() {
    this.setState({
      value: ''
    });

    const data = await actions.retrieveData('someKey');

    if (data) {
      this.setState({
        value: data.value
      })
    }
  }

  async removeData() {
    const success = await actions.clearStorage();

    if (success) {
      this.setState({value: ''})
    }
  }

  render() {
    const {value} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text> I am a storage screen! </Text>

        <Button title='store data' onPress={ () => { this.storeData()}} />
        <Button title='retrieve data' onPress={ () => { this.retrieveData()}} />
        <Button title='delete data' onPress={ () => { this.removeData()}} />

        <Text h4> {value} </Text>

        <Divider style={{backgroundColor: 'black'}} />
          <Text h3>Touchables</Text>

  
        <TouchableHighlight onPress={() => {}} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

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
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});
