import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from 'components/Forms/SearchForm';
import * as actions from 'actions';

const style ={
  display: 'flex',
  justifyContent: 'center'
};



class Search extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.initLoc();
  }


  render() {
    return (
      <div className="PAGE SEARCH" key="search">
        <div className="CONTENT">
           <SearchForm style={style} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Search);