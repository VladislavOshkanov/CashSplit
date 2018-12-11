import React from 'react';
import { Component } from 'react';
import { connect, Dispatch} from 'react-redux';
import Explorer from '../components/Explorer';
export interface Props {

}

class ExplorerContainer<Props> extends Component<any, any>  {
  constructor(props : Props){
    super (props);
  }
  componentDidMount(){

  }
  render () {
    return (<Explorer/>)
  }

}

export function mapStateToProps ( state : any ){
  return {

  }
}

export function mapDispatchToProps(dispatch: any) {
  return {

  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ExplorerContainer);
