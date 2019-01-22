import React from 'react';
import { Component } from 'react';
import { connect, Dispatch} from 'react-redux';
import PartyCreation from './PartyCreation';
import {TouchableOpacity, Text, Button} from 'react-native'
import * as actions from '../../actions'
export interface State {
  name: string,
}
export interface Props {
  onSave: () => void;
}

class PartyCreationContainer<Props> extends Component<Props, State>  {
  constructor(props : Props){
    super (props);
    this.state = {
      name : ''
    }
  }
  
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerRight: <TouchableOpacity onPress = {params.handleSave}><Text style = {{color: 'black', fontSize: 22, marginRight: 10}}>Save</Text></TouchableOpacity>
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({ handleSave: this.onSave });
  }
  onSave = (name: string) => {
    this.props.addParty(this.state.name);
  }
  onNameChange = (name: string) => {
    this.setState({name: name});
  }
  render () {
    return (<PartyCreation
      onNameChange = {this.onNameChange}
      friends = {this.props.friends}
      />)
  }
}

export function mapStateToProps ( state : any ){
  return {
    friends: state.friends.friends,
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    addParty: ( name: string ) => {
      dispatch(actions.parties.addParty(name))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(PartyCreationContainer);
