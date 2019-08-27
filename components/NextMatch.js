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

export default class NextMatch extends React.Component {

  state = {
    homeName: this.props.homeName,
    homeScore: this.props.homeScore,
    homeLogo: this.props.homeLogo,
    awayName: this.props.awayName,
    awayScore: this.props.awayScore,
    awayLogo: this.props.awayLogo,
    stadium: this.props.stadium,
    matchDate: this.props.matchDate,
    matchLeague: this.props.matchLeague,
    matchFixture: this.props.matchFixture
  };

  render(){
    return(
      <View style={styles.match}>
        <View style={styles.team}>
          <Image style={styles.logo} source={this.props.homeLogo} />
          <Text style={[styles.tabBarInfoText , styles.homeTeam]}>{this.props.homeName}</Text>
        </View>
        <View style={styles.team}>
          <Text style={styles.smallText}>{this.props.matchLeague}</Text>
          <Text style={styles.smallText}>{this.props.matchFixture}</Text>
          <Text style={styles.smallText}>{this.props.matchDate}</Text>
          <Text style={styles.smallText}>{this.props.stadium}</Text>
        </View>
        <View style={styles.team}>
          <Image style={styles.logo} source={this.props.awayLogo} />
          <Text style={[styles.awayTeam , styles.tabBarInfoText]}>{this.props.awayName}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  smallText:{
    fontSize: 7,
  },
  team:{
    alignItems: 'center',
    marginRight: 10,
  },
  homeTeam:{
    textAlign: 'left',
  },
  tabBarInfoText: {
    fontSize: 10,
    color: '#a21d21',
    textAlign: 'center',
    marginLeft: 5,
    flexDirection: 'row',
  },
  awayTeam:{
    textAlign: 'right',
  },
  logo:{
    alignItems: 'center',
    margin: 3,
    width: 35,
    height: 35,
  },
  match:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 1,
  },

});
