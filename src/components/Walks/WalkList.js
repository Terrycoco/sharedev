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
    if (this.props.walks.length == 0 ) {
        return <div className="noresults"><p>No Results Found</p></div>;
    }
    else {
      items = this.props.walks.map(walk => {
        if (walk.geometry.type != "LineString") {

          return <WalkItem key={'walksum' + walk.properties.id}
                       walk={walk.properties} backTo="results"
             />
          }
      });
    }
    return items;
  }

  render() {
    return (
      <div className="LIST">
       {this.renderItems()}       
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    walks: state.walks.walks.features
  };
}

export default connect(mapStateToProps)(WalkList);