import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, colors } from 'react-native-elements';
import InputFieldScreen from '../screens/InputFieldScreen';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <KeyboardAvoidingView  behavior="padding">
        <View>
          <ScrollView style={styles.ScrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputFieldScreen labelText="E-mail" />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#f50"
  }
});