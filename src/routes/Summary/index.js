import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import SnakeMap from './SnakeMap';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import StopList from 'components/Walks/StopList';
import Checkbox from 'material-ui/Checkbox';
import {myColors} from 'styles/theme';
import Link from 'navigation/Link';
import Drawer from 'material-ui/Drawer';

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
  }

};


class Summary extends Component {
  constructor(props){
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.startWalk = this.startWalk.bind(this);
    this.isSaved = this.isSaved.bind(this);
    this.extraButton = this.extraButton.bind(this);
  }

  //run this as soon as mount to go ahead and get stops
  componentDidMount() {
    this.props.getWalkStops(this.props.walk.id);
    this.props.getRoute(this.props.walk.id);
  }

  renderAttributes() {
    return this.props.walk.attributes.map(attr => {
      return <p className="attr-item" key={"attr" + attr.id}>
         {attr.attribute}</p>
    });
  }

  startWalk() {
    this.props.requestRoute('walking', 'right');
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

   extraButton() {
    if (this.props.browser.lessThan.medium) {
      return  (<div className="btn-group">
                 <RaisedButton label="Start Walk" className="btn-primary" onClick={this.startWalk}/>
              </div> );
    }
   }

  render() {
    
    return (
      <div className="PAGE" key="summary" >
        <PageBar title="Walk Summary" iconLeft="goLeft" onLeft="results" />
        <div className="CONTENT">
          <div className="COLUMN-1">
             <div className="FORM">
                <h4 id="walk-title">{this.props.walk.title}</h4>
                <p className="byline">Brought to you by <span className="username">{this.props.walk.creator}</span></p>
                
                <div className="btn-group space-between-children vertical-center" >
                 <RaisedButton label="Start Walk" className="btn-primary" onClick={this.startWalk}/>
                 <div className="checkbox-group">
                    <Checkbox style={styles.checkbox} iconStyle={styles.box} onCheck={this.handleCheck} defaultChecked={this.isSaved()} />
                    <p className="checkbox-label-link">My Walks</p>
                  </div>
                </div>
                <hr className="primary"/> 
                <p className="walkdescr">{this.props.walk.descr}</p>
                <hr className="primary"/>

             </div>
           </div>
           <div className="COLUMN-1">
             <div className="FORM">
              <CardText>
                <p className="summary-cat">{this.props.walk.category}</p>
                  {this.renderAttributes()}
              </CardText> 
              <hr className="primary"/>
              <SnakeMap />
              <hr className="primary"/>
               {this.extraButton()}
            </div> 
          </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walk: state.walks.selectedWalk,
    myWalkIds: state.walks.myWalkIds,
    username: state.auth.username,
    browser: state.browser
  };
}

export default connect(mapStateToProps, actions)(Summary);

/*TODO:
save to my walks - checkbox linked to user's list DONE
test this DONE

check my walk should go to auth

handle showing checkbox on if already in  DONE

add interests section?
why is it jumpy?
if title is longer how will it look?
DONE snake map - have start green and stop red

--make full size map & list side by side? DONE


*/
            // <div className="COLUMN">

            //   <hr className="primary"/>
            //   <div className="FORM">

            //   <Card style={styles.card}>
            //     <CardText className="listdescr">
            //       <StopList />
            //     </CardText>
            //   </Card>

            //   </div>
            // </div>

            
         // <Drawer open={this.state.open} 
         //         openSecondary={true}
         //         width={250}
         //         swipeAreaWidth={20}
         //         containerStyle={styles.drawer}>

         //      <CardText className="listdescr">
         //        <StopList />
         //      </CardText>

         // </Drawer>