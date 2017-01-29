import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import * as actions from 'actions/searchActions';
import SnakeMap from 'components/Maps/SnakeMap';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

require('./details.scss');


class Details extends Component {
  constructor(props){
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
  }

  renderAttributes() {
    return this.props.walk.attributes.map(attr => {
      return <p className="attr-item" key={"attr" + attr.id}>
         {attr.attribute}</p>
    });
  }
  render() {

    return (
      <div className="PAGE" key="details">
        <PageBar title="Walk Details" leftIcon="goLeft" backTo="/resultsL" />
        <div className="CONTENT">
          <SnakeMap  />
          <div className="details-content">
            <h4 id="walk-title">{this.props.walk.title}</h4>
            <hr className="primary"/> 
            <p className="walkdescr">{this.props.walk.descr}</p>
            <hr className="primary"/> 

      
            <CardText>{this.renderAttributes()}</CardText>
             <RaisedButton id="details_savebtn" label="Save To MyWalks" secondary={true} />
         </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walk: state.search.selectedWalk
  };
}

export default connect(mapStateToProps, actions)(Details);

/*TODO:
save to my walks - checkbox linked to user's list
add interests section?
why is it jumpy?
if title is longer how will it look?
snake map - have start green and stop red

--other sizes tablet & full


*/