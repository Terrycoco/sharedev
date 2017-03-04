import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import * as actions from 'actions/walkActions';
import {connect} from 'react-redux';
import {theme, myColors} from 'styles/theme';
require('./walks.scss');

const styles = {
  selectedCard: {
   background: theme.secondaryColor
  },
  card: {
    background: 'white'
  },
  title: {
   fontWeight: "bold",
   color: theme.primary1Color,
   width: "100%",
   paddingBottom: 0,
  }
};

class StopItem extends Component {
  constructor(props) {
    super(props);
    this.getStopTitle = this.getStopTitle.bind(this);
    this.getStopHandler = this.getStopHandler.bind(this);
  }

  getStopHandler(stopIdx) {
    let saveStop = this.props.saveStopIdx;
    let handleAccept = function(event) {
      saveStop(stopIdx);
    }
    return handleAccept
  }

  getStopTitle(num) {
    if (num == 0) {
      return "Walk Starts At:";
    }
    return "Stop " + num + ":";
  }

  render() {
    let cardstyle = (this.props.idx == this.props.selectedStopIdx) ? styles.selectedCard : styles.card;

    return (
     <Card onClick={this.getStopHandler(this.props.idx)} style={cardstyle}>
       <CardHeader
         title={this.getStopTitle(this.props.stop.sort)}
         actAsExpander={false}
         showExpandableButton={false}
         titleStyle={styles.title}
         />
         <CardText className="listdescr" >
         {this.props.stop.pt_title}
         </CardText>
     </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStopIdx: state.walks.selectedWalk.selectedStopIdx
  };
}

export default connect(mapStateToProps, actions)(StopItem);