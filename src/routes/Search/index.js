import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from 'components/Forms/SearchForm';
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
      <div className="PAGE SEARCH" key="search">
        <PageBar title="Find A Walk" leftIcon="hamburger" backTo="home" />
        <div className="CONTENT">
          <div className="COLUMN">
           <SearchForm />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Search);