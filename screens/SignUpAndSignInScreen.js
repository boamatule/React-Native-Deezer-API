import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet, AsyncStorage, Keyboard } from 'react-native';
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

  async saveData() {
    const { email, password }

    let loginDetails={
      email:email,
      password: password
    }

    if(this.props.type !== 'Login')
    {
      AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

      Keyboard.dismiss();
      alert("You successfully registered. Email: " + email + 'password: ')
      this.login();
    }
    else if(this.props.type == 'Login')
    {
      try{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);

        if (ld.email !== null && ld.password == password)
        {
          alert('Go in');
        } else {
          alert('Email and password does not exist');
        }
      }
    } catch (error)
    {
      alert(error);
    }
  }
}

ShowData = async() =>{
  let loginDetails = await AsyncStorage.getItem('loginDetails');
  let ld = JSON.parse(loginDetails);
  alert('email: '+ ld.email + ' '+ 'password: ' + ld.password);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
