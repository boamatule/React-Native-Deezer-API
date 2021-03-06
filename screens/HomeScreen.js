import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import {List, ListItem, Icon, Card, Text} from 'react-native-elements'
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
    navigateTo: 'Favorite'
  },
  {
    title: 'Settings',
    subtitle: 'Customize your app',
    icon: 'cog',
    navigateTo: 'Settings'
  }
]
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <View containerStyle={{backgroundColor: '#eaeaea', marginTop: 0}}>
          {
            menuList.map((item, index) => {
              return (
                <Card key={index}
                      title={item.title}>
                  <View style={styles.cardView}> 
                    <Text style={{marginBottom: 10}}> {item.subtitle}</Text>
                    <Icon 
                        raised
                        name={item.icon}
                        type='font-awesome'
                        color='#f50'
                        size={30}
                        onPress={() => {this.props.navigation.navigate(item.navigateTo)}}/>
                  </View>
                </Card>
              )
            })
          }
        </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardView: {
    alignItems: 'center'
  }
});
