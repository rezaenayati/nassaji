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
} from 'react-native';

import { MonoText } from '../components/StyledText';
import MatchContainer from '../components/MatchContainer';
import NewsContainer from '../components/NewsContainer';
import NextMatch from '../components/NextMatch';
import NewsBox from '../components/NewsBox';
import TableContainer from '../components/TableContainer';
import getLogo from '../utils/getLogo';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.lastmatch} onPress={() => {console.log("New");;}}>
        <MatchContainer
          homeName='Nassaji'
          homeLogo={getLogo('Nassaji')}
          homeScore='1'
          awayName='Gol Gohar'
          awayLogo={getLogo('Gol Gohar')}
          awayScore='1'
          matchDate='2019/08/21'
          matchLeague='Persian Gulf Pro League'
          matchFixture='Fixture 1'
          stadium='Sirjan Stadium'
          />
      </TouchableOpacity>
      <View style={styles.containerBox}>
        <NewsBox />
        <View style={styles.temp}>
          <View style={styles.temp1}>
          <NextMatch
          homeName='Nassaji'
          homeLogo={getLogo('Nassaji')}
          homeScore='1'
          awayName='Gol Gohar'
          awayLogo={getLogo('Gol Gohar')}
          awayScore='1'
          matchDate='2019/08/21'
          matchLeague='Persian Gulf Pro League'
          matchFixture='Fixture 1'
          stadium='Sirjan Stadium'
          />
          </View>
          <View style={styles.temp2}>
            <TableContainer />
          </View>
        </View>
      </View>
    </View>
  );
  _handlePress = () => {
    console.log("Haha");
  };
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  temp:{
    width: 190,
  },
  temp1:{
  },
  temp2:{
    marginTop: 5,
    backgroundColor: 'yellow',
  },
  containerBox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  team:{
    alignItems: 'center',
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
    margin: 5
  },
  logo:{
    alignItems: 'center',
    margin: 5,
    width: 70,
    height: 70,
  },
  lastmatch:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#a21d21',
  },

















  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
