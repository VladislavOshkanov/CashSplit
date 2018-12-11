import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import { width, height } from "react-native-dimension";
import { Party } from '../../types';


export interface Props {
  parties: Array<Party>;
  addParty: (name: string) => void;
}

const HomeScreen  = ({parties, addParty} : Props) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.headerText}>Your parties</Text>
      <ScrollView style = {styles.partiesList}>
        {
          parties.map(party => 
            <View>
              <Text>{party.name}</Text>
            </View>
          )
        }
      </ScrollView>
      <TouchableOpacity style = {styles.addPartyButtonText}>
        <Text style = {styles.addPartyButtonText}>New party!</Text>
      </TouchableOpacity>
      <View style ={{height: 20}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  partiesList: {
    flex: 1,
    width: width(80),
    borderColor: 'blue',
    borderWidth: 1,
  },
  addPartyButton: {
    marginBottom: 20,
  },
  addPartyButtonText: {
    fontSize: 22,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 24
  }
});

export default HomeScreen;
