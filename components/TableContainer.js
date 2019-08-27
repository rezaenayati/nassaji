import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { WebView } from 'react-native-webview';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  WebBrowser,
  ScrollView,
} from 'react-native';

import NewsContainer from './NewsContainer';

const {height, width} = Dimensions.get('window');

export default class TableContainer extends React.Component {

  state = {
  };

  render(){
    return(
      <View>
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
       </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});
