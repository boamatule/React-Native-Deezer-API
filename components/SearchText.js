import React from 'react';
import { Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';


export class SearchText extends React.Component {
    render() {
  return (
    <React.Fragment> 
      <FormLabel>Search an artist</FormLabel>
      <FormInput onChangeText={() => {}}/>
      <Button tittle='search' onPress={() => {}}/>
    </React.Fragment>

    )
  }
}

