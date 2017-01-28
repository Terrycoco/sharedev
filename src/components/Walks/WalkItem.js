import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as actions from 'actions/searchActions';
import {connect} from 'react-redux';

require('./walklist.scss');


class WalkItem extends Component {
  constructor(props) {
    super(props);
    this.goToWalk = this.goToWalk.bind(this);
  }
  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  }
  goToWalk(walkId) {
    this.props.getWalkDetails(this.props.walk.id, this.context.router);
  }
  render() {
    return (
     <Card >
       <CardHeader
         title={this.props.walk.title}
         subtitle={`Starts at ${this.props.walk.start_pt_text}`}
         actAsExpander={false}
         showExpandableButton={false}
         onClick={this.goToWalk} 
         />
     </Card>
    );
  }
}



export default connect(null, actions)(WalkItem);