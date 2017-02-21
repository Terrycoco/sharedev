import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import * as actions from 'actions';
import {connect} from 'react-redux';


require('./walks.scss');


class WalkItem extends Component {
  constructor(props) {
    super(props);
    this.goToWalk = this.goToWalk.bind(this);
  }

  goToWalk(walkId) {
    this.props.getWalkSummary(this.props.walk.id);
  }
  render() {
    return (
    <div>
       <div className="walk-card" onClick={this.goToWalk} >
         <p className="walk-title">{this.props.walk.title}</p>
         <p className="walk-city">{this.props.walk.city}</p>
         <p className="walk-start">{`Starts at ${this.props.walk.start_pt_text}`}</p>
       </div>
       <Divider />
     </div>
    );
  }
}



export default connect(null, actions)(WalkItem);