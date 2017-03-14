import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';

class Rotate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    if (this.props.rotate) {
       this.setState({open: true});
       this.props.showedRotate();
    }
  }


  handleRequestClose = () => {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <Snackbar
        open={this.state.open}
        message="For directions to next stop, rotate device"
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose.bind(this)}
      />
    );
  }
}

export default Rotate;