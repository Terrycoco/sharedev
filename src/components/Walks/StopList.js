import React, {Component} from 'react';
import { connect } from 'react-redux';
import StopItem from 'components/Walks/StopItem';

require('./walks.scss');

class StopList extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    let items;
    if (this.props.stops.length == 0 ) {
        return <div className="noresults"><p>No Stops Yet</p></div>;
    }
    else {
      items = this.props.stops.map((stop, idx) => {
          return <StopItem key={'walkstop' + stop.id}
                           stop={stop}
                           idx={idx}
             />
      });
    }
    return items;
  }

  render() {
    return (
      <div className="walklist"> 
       {this.renderItems()}       
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    stops: state.walks.selectedWalk.stops
  };
}

export default connect(mapStateToProps)(StopList);  