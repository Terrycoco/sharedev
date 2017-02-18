import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import * as actions from 'actions/walkActions';
import {connect} from 'react-redux';
import {theme, myColors} from 'styles/theme';
require('./walks.scss');

const styles = {
  title: {
   fontWeight: "bold",
   color: theme.primary1Color
  }, 
  subtitle: {
   fontWeight: "bold",
   fontSize: ".8rem",
   color: theme.textColor,
   width: "90%"
  }
};

class StopItem extends Component {
  constructor(props) {
    super(props);
    this.goToStop = this.goToStop.bind(this);
    this.getStopTitle = this.getStopTitle.bind(this);
  }
  //grab router from context
  static contextTypes = {
    router: React.PropTypes.object
  }
  goToStop(stopId) {
    //here we want to save this stop as currentStopId
    //bring up more detail
    //highlight on map?
  }

  getStopTitle(num) {
    if (num == 0) {
      return "Walk Starts At:";
    }
    return "Stop " + num + ":";
  }

  render() {
    return (
     <Card >
       <CardHeader
         title={this.getStopTitle(this.props.stop.sort)}
         subtitle={this.props.stop.pt_title}
         actAsExpander={false}
         showExpandableButton={false}
         titleStyle={styles.title}
         subtitleStyle={styles.subtitle}
         />
         <CardText expandable={true} className="listdescr">
         {this.props.stop.pt_descr}
         </CardText>
     </Card>
    );
  }
}



export default connect(null, actions)(StopItem);