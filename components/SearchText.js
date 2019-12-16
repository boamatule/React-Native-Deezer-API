import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class SearchText extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  // componentDidMount() {
  //   this.input.current.focus();
  // }

  onChange(value) {
    this.setState({value});
  } 
  onSubmitSearch() {
    const { submitSearch } = this.props;
    submitSearch(this.state.value);
  }
  
  render() {
    return (
      <View > 
        <Input  placeholder = 'Search an artist'
                onChangeText={(event) => this.onChange(event)}
                // ref={this.input}
                errorStyle={{ color: 'red' }}
                errorMessage=''
        />
        <Button title='Search' onPress={() => this.onSubmitSearch()}/>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})
