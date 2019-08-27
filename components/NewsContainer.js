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
  WebBrowser
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class NewsContainer extends React.Component {

  state = {
  };

  render(){
    return(
      <TouchableOpacity style={styles.container}>
        <View><Text style={styles.newsText}>Slalllll</Text></View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  newsText:{
    color: 'white',
  },

});
