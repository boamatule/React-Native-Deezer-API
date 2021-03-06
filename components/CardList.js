import React from 'react';
import { View, FlatList }  from 'react-native';
import { Card, Button, Text, Icon } from 'react-native-elements';

export class CardList extends React.Component {
  renderData() {
      const { data, imageKey, titleKey, bottonText, bottonView } = this.props;

      // return data.map((item, index) => {
      //   return (
      //     <Card
      //       key={index}
      //       title={item[titleKey]}
      //       image={{uri: item[imageKey]}}>
      //       { bottonView(item) }
      //     </Card>
      //   )
      // })

      return (
        <FlatList data={data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <Card
                        key={index}
                        title={item[titleKey]}
                        image={{uri: item[imageKey]}}>
                        { bottonView(item) }
                      </Card>
                    )
                  }}>
        </FlatList>
      )
    }

    render() {
      const { data } = this.props;

      if (data && data.length > 0) {
        return this.renderData();
      } else {
        return 
          <View> </View>
        
      }  
    }
}


