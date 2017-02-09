import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import SlideIn from 'components/Transitions/SlideIn';
import create0 from 'components/Forms/Create/0';
import create1 from 'components/Forms/Create/1';
import { browserHistory } from 'react-router';


const pages = [
  create0, 
  create1
];


require('./create.scss');

class Create extends Component {
  constructor(props, context){
    super(props, context);
    this.goIfAuthorized = this.goIfAuthorized.bind(this);
  }


  
  goIfAuthorized(props) {
 
    //first page is allowed in all cases
    //to go further - user must be authenticated
    console.log('got to goIf props: ', props);
    if (props.pageIdx == 0) {
      this.setState({component: SlideIn(create0, {fromDir: props.fromDir})});
    } else {
      //other pages
      if (!props.authenticated) {
        //come back here
        props.authRoute('/create');
        //now redirect
        browserHistory.push('/signin');
      } else {
        this.setState({component: SlideIn(pages[props.pageIdx], {fromDir: props.fromDir})});
      }

    } //end if
  }

  componentWillMount() {

    this.goIfAuthorized(this.props);
  }

  componentWillUpdate(nextProps) {
    //only if pageIdx changes
    if (nextProps.pageIdx != this.props.pageIdx) {
       this.goIfAuthorized(nextProps);
     }
  }
 
  
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Create a Walk" leftIcon="hamburger" backTo="/" />
        <div className="CONTENT">
           <this.state.component />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    pageIdx: state.forms.create.pageIdx,
    fromDir: state.forms.create.fromDir
  };
}

export default connect(mapStateToProps, actions)(Create);