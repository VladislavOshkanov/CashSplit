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
  render () {
    return (<HomeScreen
      parties = {this.props.parties}
      addParty = {this.props.addParty}
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
    addParty: ( name: string ) => {
      dispatch(actions.parties.addParty(name))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ExplorerContainer);
