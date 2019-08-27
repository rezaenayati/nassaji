import React from 'react';
import { ScrollView,
         StyleSheet,
         Image,
         View,
         Text,
         ImageBackground
          } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import window from '../constants/Layout';
import MatchContainer from '../components/MatchContainer';
import getLogo from '../utils/getLogo';
export default function TicketScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.vataniPic} source={require('../assets/images/vatani.png')} />
      <Text>Pick the match you want to watch:</Text>
      <ScrollView style={styles.container}>
      <MatchContainer
        homeName='Nassaji'
        homeLogo={getLogo('Nassaji')}
        homeScore=''
        awayName='Peykan'
        awayLogo={getLogo('Peykan')}
        awayScore=''
        matchDate='2019/08/21'
        matchLeague='Persian Gulf Pro League'
        matchFixture='Fixture 1'
        stadium='Sirjan Stadium'
        />
        <MatchContainer
          homeName='Nassaji'
          homeLogo={getLogo('Nassaji')}
          homeScore=''
          awayName='Sepahan'
          awayLogo={getLogo('Sepahan')}
          awayScore=''
          matchDate='2019/08/21'
          matchLeague='Persian Gulf Pro League'
          matchFixture='Fixture 1'
          stadium='Sirjan Stadium'
          />
          <MatchContainer
            homeName='Nassaji'
            homeLogo={getLogo('Nassaji')}
            homeScore=''
            awayName='Machine'
            awayLogo={getLogo('Machine')}
            awayScore=''
            matchDate='2019/08/21'
            matchLeague='Persian Gulf Pro League'
            matchFixture='Fixture 1'
            stadium='Sirjan Stadium'
            />
            <MatchContainer
              homeName='Nassaji'
              homeLogo={getLogo('Nassaji')}
              homeScore=''
              awayName='Persepolis'
              awayLogo={getLogo('Persepolis')}
              awayScore=''
              matchDate='2019/08/21'
              matchLeague='Persian Gulf Pro League'
              matchFixture='Fixture 1'
              stadium='Sirjan Stadium'
              />
              <MatchContainer
                homeName='Nassaji'
                homeLogo={getLogo('Nassaji')}
                homeScore=''
                awayName='Esteghlal'
                awayLogo={getLogo('Esteghlal')}
                awayScore=''
                matchDate='2019/08/21'
                matchLeague='Persian Gulf Pro League'
                matchFixture='Fixture 1'
                stadium='Sirjan Stadium'
                />
                <MatchContainer
                  homeName='Nassaji'
                  homeLogo={getLogo('Nassaji')}
                  homeScore=''
                  awayName='Naft MIS'
                  awayLogo={getLogo('NaftMIS')}
                  awayScore=''
                  matchDate='2019/08/21'
                  matchLeague='Persian Gulf Pro League'
                  matchFixture='Fixture 1'
                  stadium='Sirjan Stadium'
                  />
                  <MatchContainer
                    homeName='Nassaji'
                    homeLogo={getLogo('Nassaji')}
                    homeScore=''
                    awayName='Sanat Naft'
                    awayLogo={getLogo('SanatNaft')}
                    awayScore=''
                    matchDate='2019/08/21'
                    matchLeague='Persian Gulf Pro League'
                    matchFixture='Fixture 1'
                    stadium='Sirjan Stadium'
                    />
                    <MatchContainer
                      homeName='Nassaji'
                      homeLogo={getLogo('Nassaji')}
                      homeScore=''
                      awayName='Foolad'
                      awayLogo={getLogo('Foolad')}
                      awayScore=''
                      matchDate='2019/08/21'
                      matchLeague='Persian Gulf Pro League'
                      matchFixture='Fixture 1'
                      stadium='Sirjan Stadium'
                      />
                      <MatchContainer
                        homeName='Nassaji'
                        homeLogo={getLogo('Nassaji')}
                        homeScore=''
                        awayName='Shahin'
                        awayLogo={getLogo('Shahin')}
                        awayScore=''
                        matchDate='2019/08/21'
                        matchLeague='Persian Gulf Pro League'
                        matchFixture='Fixture 1'
                        stadium='Sirjan Stadium'
                        />
                        <MatchContainer
                          homeName='Nassaji'
                          homeLogo={getLogo('Nassaji')}
                          homeScore=''
                          awayName='Padide'
                          awayLogo={getLogo('Padide')}
                          awayScore=''
                          matchDate='2019/08/21'
                          matchLeague='Persian Gulf Pro League'
                          matchFixture='Fixture 1'
                          stadium='Sirjan Stadium'
                          />
                          <MatchContainer
                            homeName='Nassaji'
                            homeLogo={getLogo('Nassaji')}
                            homeScore=''
                            awayName='Pars Jam'
                            awayLogo={getLogo('Parsjam')}
                            awayScore=''
                            matchDate='2019/08/21'
                            matchLeague='Persian Gulf Pro League'
                            matchFixture='Fixture 1'
                            stadium='Sirjan Stadium'
                            />
                            <MatchContainer
                              homeName='Nassaji'
                              homeLogo={getLogo('Nassaji')}
                              homeScore=''
                              awayName='Tractor'
                              awayLogo={getLogo('Tractor')}
                              awayScore=''
                              matchDate='2019/08/21'
                              matchLeague='Persian Gulf Pro League'
                              matchFixture='Fixture 1'
                              stadium='Sirjan Stadium'
                              />
                              <MatchContainer
                                homeName='Nassaji'
                                homeLogo={getLogo('Nassaji')}
                                homeScore=''
                                awayName='Zobahan'
                                awayLogo={getLogo('Zobahan')}
                                awayScore=''
                                matchDate='2019/08/21'
                                matchLeague='Persian Gulf Pro League'
                                matchFixture='Fixture 1'
                                stadium='Sirjan Stadium'
                                />
      </ScrollView>
    </View>
  );
}

TicketScreen.navigationOptions = {
  title: 'Ticket',
  header: null,
};

const styles = StyleSheet.create({
  vataniPic:{
    width: window.width,
    height: 100,
  },
  image: {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#a21d21',
  },
  
});
