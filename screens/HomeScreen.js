import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';

const menuList = [
  {
    title: 'Search Albums',
    subtitle: 'Search your favorite music',
    icon: 'music',
    navigateTo: 'Albums'
  },
  {
    title: 'Favorite Collections',
    subtitle: 'Access your favorite albums',
    icon: 'heart',
    navigateTo: '#'
  },
  {
    title: 'Settings',
    subtitle: 'Customize your app',
    icon: 'cog',
    navigateTo: '#'
  }
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Navigate to Albums' onPress={() => this.props.navigation.navigate('Albums')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
