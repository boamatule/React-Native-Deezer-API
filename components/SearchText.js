import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';

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
        <Input  placeholder = 'Artist, songs or podcasts'
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
