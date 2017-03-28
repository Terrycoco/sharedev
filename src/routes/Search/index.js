import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import * as actions from 'actions';
import PageBar from 'components/PageBar';


class Search extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    this.props.initLoc();
  }


  render() {
    return (
      <div className="PAGE" key="search" >
        <PageBar title="Find A Walk" iconLeft="hamburger" onLeft="home" />

        <div className="CONTENT">
          <div className="COLUMN-1">
             <SearchForm />
          </div>
        </div>
      </div>
    );
  }
}



export default connect(null, actions)(Search);