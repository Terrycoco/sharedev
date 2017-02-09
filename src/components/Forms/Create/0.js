import React, {Component} from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions/formActions';
import RaisedButton from 'material-ui/RaisedButton';

require('../forms.scss');

class Create0 extends Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
  }
  componentDidMount() {
    this.props.createGoNext(0);
  }

  goNext() {
    this.props.createGoNext(1, "right");
  }

  render() {
    return (
     <div key="create0" className="FORM">
       <div className="form-text flex4">
          <p>Creating a ShareWalk is fun and easy.  Just answer a few questions about your walk and you're on your way.</p>
          <p>Don't worry about being perfect, you can always come back and edit your walk at any time.</p>
          <p>You can add sites to your walk right from your phone, or, if you prefer, away from the walk using our map.</p>
        </div>
         <span className="center-children header"><h4>Ready?</h4></span>
         <div className="button-group">
           <RaisedButton label="Let's Get Started" secondary={true} onClick={this.goNext} />
         </div>
     </div>
    );
  }
}

export default connect(null, actions)(Create0);