import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import Dialog from 'react-native-dialog'
import { width, height } from "react-native-dimension";
import { Friend } from '../../types';


export interface Props {
  onNameChange: (name: string) => void;
  friends: Array<Friend>
}

const PartyCreation  = ({onNameChange, friends} : Props) => {
  return (
    <View style = {styles.container}>
      <TextInput onChangeText={(text: string) => onNameChange(text)} style = {styles.nameInput} placeholder ={'Party name'}/>
      <ScrollView style={styles.scrollView}>
        <View>
          <TouchableOpacity><Text>New friend</Text></TouchableOpacity>
        </View>
        {
          friends.map((friend) => <Text>friend</Text>)
        }
      </ScrollView>
      <Dialog.Container visible={true}>
          <Dialog.Title>New friend</Dialog.Title>
          <Dialog.Description>
            Enter friend's name
          </Dialog.Description>
          <Dialog.Input/>
          <Dialog.Button label="Cancel" />
          <Dialog.Button label="Delete" />
        </Dialog.Container>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  nameInput: {
    width: width(80),
    textAlign: 'center'
  },
  scrollView: {
    borderWidth: 1,
    borderColor: 'black'
  }
})
export default PartyCreation;
