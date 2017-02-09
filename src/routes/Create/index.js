import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';
import requireAuth from 'components/Auth/requireAuth';
import SlideIn from 'components/Transitions/SlideIn';
import create0 from 'components/Forms/Create/0';
import create1 from 'components/Forms/Create/1';

const pages = [
  create0, 
  create1
];

require('./create.scss');

class Create extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageIdx: 0,
      fromDir: "right",
      component: SlideIn(create0, {fromDir: "right"})
    };
  }
 
  componentDidMount() {
    this.setState({pageIdx: this.props.pageIdx, fromDir: this.props.fromDir, component: SlideIn(create0, {fromDir: this.props.fromDir})});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pageIdx != this.state.pageIdx) {
      let comp = pages[nextProps.pageIdx];
      this.setState({pageIdx: nextProps.pageIdx, component:  SlideIn(comp, {fromDir: nextProps.fromDir})});
    }
  }
  
  render() {
    return (
      <div className="PAGE CREATE" >
        <PageBar title="Create a Walk" leftIcon="hamburger" backTo="/L" />
        <div className="CONTENT center-children">
           <this.state.component />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    pageIdx: state.forms.create.pageIdx,
    fromDir: state.forms.create.fromDir
  };
}

export default connect(mapStateToProps, actions)(Create);