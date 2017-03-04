import React, {Component} from 'react';
import { connect } from 'react-redux';
import WalkItem from 'components/Walks/WalkItem';

require('./walks.scss');

class WalkList extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    let items;
    if (this.props.mywalks.length == 0 ) {
        return <div className="noresults"><p>No Saved Walks</p></div>;
    }
    else {
      items = this.props.mywalks.map(walk => {
        if (walk.geometry.type != "LineString") {
          return <WalkItem key={'walksum' + walk.properties.id}
                       walk={walk.properties} backTo="mywalks"
             />
          }
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
    mywalks: state.walks.myWalks.features
  };
}

export default connect(mapStateToProps)(WalkList);