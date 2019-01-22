import React from 'react';
import { Component } from 'react';
import { connect, Dispatch} from 'react-redux';
import HomeScreen from './HomeScreen';
import { State } from '../../types';
import * as actions from '../../actions'
export interface Props {

}

class ExplorerContainer<Props> extends Component<any, any>  {
  constructor(props : Props){
    super (props);
  }
  componentDidMount(){

  }
  newParty = () => {
    this.props.navigation.navigate("PartyCreation");
  }
 
  render () {
    return (<HomeScreen
      parties = {this.props.parties}
      newParty = {this.newParty}
    />)
  }

}

export function mapStateToProps ( state : State ){
  return {
    parties: state.parties.parties,
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ExplorerContainer);
