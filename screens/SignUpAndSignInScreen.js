import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet } from 'react-native';
import { Input, View } from 'react-native-elements';

export default class SignUpSignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up Form',
  };

  constructor() {
    super();
    this.state = {
      email:'',
      password: ''

    }
  }

  
  render() {
    return (
      
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
