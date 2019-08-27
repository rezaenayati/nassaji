import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';


const {height, width} = Dimensions.get('window');

export default class MatchScreen extends React.Component {

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
      <View style={styles.container}>
      <Text style={styles.warningText}>Last Match</Text>
          <MatchContainer
            homeName='Nassaji'
            homeLogo={getLogo('Nassaji')}
            homeScore='2'
            awayName='Gol Gohar'
            awayLogo={getLogo('Gol Gohar')}
            awayScore='1'
            matchDate='2019/08/21'
            matchLeague='Persian Gulf Pro League'
            matchFixture='Fixture 1'
            stadium='Sirjan Stadium'
          />

      </View>

    );
  }
  _handlePress = () => {
    WebBrowser.openBrowserAsync('');
  };

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a21d21',
  }
});
