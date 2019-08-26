import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function TicketScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoTicketView and replace it with your content;
       * we just wanted to provide you with some helpful Ticket.
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

TicketScreen.navigationOptions = {
  title: 'Ticket',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
