import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  WebBrowser,
  ScrollView
} from 'react-native';

import NewsContainer from './NewsContainer';

const {height, width} = Dimensions.get('window');

export default class NewsBox extends React.Component {

  state = {
  };

  render(){
    return(
        <View style={styles.newsBox}>
          <Text style={styles.smallText}>News:</Text>
          <ScrollView>
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />
            <NewsContainer />

          </ScrollView>
        </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },


  newsBox:{
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#a21d21',
    borderRadius: 14,
    width: 190,
    margin: 5,
  },



});
