import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
//import SnakeMap from 'components/Maps/SnakeMap';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import StopList from 'components/Walks/StopList';
import Checkbox from 'material-ui/Checkbox';
import {theme} from 'styles/theme';
import Link from 'navigation/Link';


require('./summary.scss');

const styles = {
  checkbox: {
    display: "inline-block",
    width: "auto"
  },
  box: {
    marginRight: "1px"
  }, 
  cardTitle: {
    fontSize: "1em",
    fontWeight: "bold"
  },
  card: {
  }
};


class Summary extends Component {
  constructor(props){
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  

  //run this as soon as mount to go ahead and get stops
  componentDidMount() {
    this.props.getWalkStops(this.props.walk.id);
  }

  renderAttributes() {
    return this.props.walk.attributes.map(attr => {
      return <p className="attr-item" key={"attr" + attr.id}>
         {attr.attribute}</p>
    });
  }

  handleDetails() {
    this.props.requestRoute('coming', 'right');
  }


  isSaved() {
    if (this.props.myWalkIds.indexOf(this.props.walk.id) > -1 ) return true;
  }

  handleCheck(e, checked) {
    if (checked) {
     this.props.addToMyWalks(this.props.walk.id);
    } else {
    this.props.removeFromMyWalks(this.props.walk.id);
    }
  }

  render() {
    
    return (
      <div className="PAGE" key="summary">
        <PageBar title="Walk Summary" leftIcon="goLeft" />
        <div className="CONTENT">
          <div className="COLUMN">
           <div className="FORM">
              <h4 id="walk-title">{this.props.walk.title}</h4>
              <p className="byline">Brought to you by <span className="username">{this.props.walk.creator}</span></p>
              
              <div className="btn-group space-between-children vertical-center" >
               <RaisedButton label="Start Walk" primary={true} className="btn-primary" onClick={this.handleDetails}/>
               <div className="checkbox-group">
                  <Checkbox style={styles.checkbox} iconStyle={styles.box} onCheck={this.handleCheck} defaultChecked={this.isSaved()} />
                  <p className="checkbox-label-link">My Walks</p>
                </div>
              </div>
              <hr className="primary"/> 
              <p className="walkdescr">{this.props.walk.descr}</p>
              <hr className="primary"/>
              <CardText>
                <p className="summary-cat">{this.props.walk.category}</p>
                {this.renderAttributes()}
              </CardText>    
           </div>
           </div>

            <div className="COLUMN">
              <div className="FORM">
              <hr className="primary"/>
              <Card style={styles.card}>
                 <CardHeader
                   title={`${this.props.walk.stops.length -1} Stops`}
                   actAsExpander={true}
                   showExpandableButton={true}
                   titleStyle={styles.cardTitle} />
                <CardText expandable={true} className="listdescr">
                  <StopList />
                </CardText>
              </Card>
              <hr className="primary"/> 
              </div>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walk: state.search.selectedWalk,
    myWalkIds: state.search.myWalkIds,
    username: state.auth.username
  };
}

export default connect(mapStateToProps, actions)(Summary);

/*TODO:
save to my walks - checkbox linked to user's list DONE
test this

handle showing checkbox on if already in

add interests section?
why is it jumpy?
if title is longer how will it look?
snake map - have start green and stop red

--make full size map & list side by side?


*/