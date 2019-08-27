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

export default class MatchContainer extends React.Component {

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
          <Text style={styles.score}>{this.props.homeScore}</Text>
        </View>
        <View style={styles.team}>
          <Text style={styles.smallText}>{this.props.matchLeague}</Text>
          <Text style={styles.smallText}>{this.props.matchFixture}</Text>
          <Text style={styles.smallText}>{this.props.matchDate}</Text>
          <Text style={styles.smallText}>{this.props.stadium}</Text>
        </View>
        <View style={styles.team}>
          <Text style={styles.score}>{this.props.awayScore}</Text>
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
  score:{
    fontSize: 45,
    marginTop: 25,
  },
  smallText:{
    fontSize: 10,
  },
  team:{
    alignItems: 'center',
    marginRight: 10,
  },
  homeTeam:{
    textAlign: 'left',
  },
  tabBarInfoText: {
    fontSize: 17,
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
    margin: 5,
    width: 70,
    height: 70,
  },
  match:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 16,
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#a21d21',
  }
});
