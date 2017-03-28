import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import SlideIn from 'components/Transitions/SlideIn';
import RaisedButton from 'material-ui/RaisedButton';
import create0 from './Content/0';
import create1 from './Content/1';
import create2 from './Content/2';


const pages = [
  create0, 
  create1,
  create2
];


require('./create.scss');

class Create extends Component {
  constructor(props, context){
    super(props, context);
    this.goIfAuthorized = this.goIfAuthorized.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state = {
      lastPage: 2
    };
  }

  goIfAuthorized(props) {
    //first page is allowed in all cases
    //to go further - user must be authenticated
    if (props.pageIdx == 0) {
      this.setState({component: SlideIn(create0, {fromDir: props.fromDir})});
    } else {
      //other pages
      if (!props.authenticated) {
        //then come back here
        props.authRoute('create');
        //now redirect
        this.props.requestRoute('signin','left');
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

  goNext() {
    if (this.props.pageIdx == this.state.lastPage) {
      this.props.requestRoute("coming", "right");
    } else {
      this.props.createGoNext(this.props.pageIdx + 1, "right");
    }
  }

  goBack() {
    this.props.createGoNext(this.props.pageIdx - 1, "left");
  }
 
  
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Create a Walk" iconLeft="hamburger" onLeft="home" />
        <div className="CONTENT">
          <div className="COLUMN-1">
           <this.state.component />
          </div>
          {(this.props.pageIdx > 0 ? 
          <div className="FIXED-FOOTER">
            <div className="button-group">
              <RaisedButton label="Back" secondary={true} onClick={this.goBack} />
              <RaisedButton label="Next" secondary={true} onClick={this.goNext} />
            </div>
            </div> : null )}

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