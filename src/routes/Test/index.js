import React, { Component } from 'react';
import PageBar from 'components/PageBar';
import * as actions from 'actions';
import {connect} from 'react-redux';

require('./test.scss');

class Test extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

  }
  render() {
    return (
    <div className="PAGE">
      <PageBar title="Testing" />
      <div className="CONTENT">
        <div className="COLUMN">
        <div className="textbox">
            Lorem ipsum dolor sit amet, rutrum tellus ut. Vel sem nisl, sapien mauris metus ante arcu bibendum blandit, id vitae hac, ullamcorper tincidunt egestas vivamus arcu id, pretium vel aenean. Arcu inceptos porttitor nascetur phasellus rutrum. Condimentum in, nec quam ut sed, ut id vel, faucibus faucibus. Arcu mauris mattis vel, arcu augue in in in in, erat in, blandit risus, magna elit in urna.
Accumsan tincidunt cursus quisque suscipit, dui a. Semper quia enim porttitor id autem. Purus velit suscipit vivamus, elementum non est cras sem volutpat, et pretium et molestie. Feugiat quis tortor eget orci. Vel pretium ac pharetra libero quam pede, velit neque, suspendisse dolor fermentum amet, quisque consectetuer viverra nonummy dolor facilisi.
Lorem elit lectus eget tempor sodales, non ut turpis venenatis volutpat ipsum. Lectus consequat urna ut neque fusce, eget massa ut integer est, ipsum suspendisse quisque sed a, sed mauris vitae enim tincidunt integer, dolor fringilla. In leo velit wisi quam integer, aliquam dolor enim sapien morbi lacinia non, non fermentum hendrerit, amet malesuada, ullamcorper amet. Varius integer interdum, amet non gravida ultrices pulvinar, mi lectus gravida, euismod risus placerat praesent arcu. Voluptatum mauris sit arcu, morbi phasellus a, vel integer elit. Sit nascetur porta morbi, porttitor augue ante dui et nulla rutrum, vivamus mollis massa, urna sem diam odio quisque. Vestibulum erat tristique praesent ornare risus, justo nam velit mus ac, ipsum dis.
Non elit dui libero, aenean vivamus eros faucibus, leo et eu orci in sed nonummy, praesent curabitur turpis morbi ante parturient, eu odio risus consectetuer facilisis pellentesque. Sit tortor curabitur enim rutrum, suspendisse porta ipsum convallis dolor, libero laoreet tristique metus elit. Lectus perferendis ipsum lorem consequat. Tortor nulla lectus molestie donec metus, nisl vivamus aenean tellus eget nunc tempor. Non lorem proin augue potenti, elit ante tristique dolor vitae enim, sed erat ultricies elit nisl duis. Orci elit risus nulla et, ultricies felis malesuada vitae libero dignissim suspendisse. Ac etiam blandit volutpat nec diam, rutrum commodo laoreet, volutpat erat vestibulum eros exercitationem ridiculus pellentesque, dolor faucibus nascetur, porttitor duis accumsan eu ornare neque eleifend. Tincidunt convallis hendrerit eros, ut enim iaculis, velit massa magni erat magna hendrerit nam, cras turpis fermentum orci aliquam feugiat. Id nemo aliquip vel mauris semper.
           </div> </div>
        <div className="COLUMN">
        <div className="textbox">
            Lorem ipsum dolor sit amet, rutrum tellus ut. Vel sem nisl, sapien mauris metus ante arcu bibendum blandit, id vitae hac, ullamcorper tincidunt egestas vivamus arcu id, pretium vel aenean. Arcu inceptos porttitor nascetur phasellus rutrum. Condimentum in, nec quam ut sed, ut id vel, faucibus faucibus. Arcu mauris mattis vel, arcu augue in in in in, erat in, blandit risus, magna elit in urna.
Accumsan tincidunt cursus quisque suscipit, dui a. Semper quia enim porttitor id autem. Purus velit suscipit vivamus, elementum non est cras sem volutpat, et pretium et molestie. Feugiat quis tortor eget orci. Vel pretium ac pharetra libero quam pede, velit neque, suspendisse dolor fermentum amet, quisque consectetuer viverra nonummy dolor facilisi.
Lorem elit lectus eget tempor sodales, non ut turpis venenatis volutpat ipsum. Lectus consequat urna ut neque fusce, eget massa ut integer est, ipsum suspendisse quisque sed a, sed mauris vitae enim tincidunt integer, dolor fringilla. In leo velit wisi quam integer, aliquam dolor enim sapien morbi lacinia non, non fermentum hendrerit, amet malesuada, ullamcorper amet. Varius integer interdum, amet non gravida ultrices pulvinar, mi lectus gravida, euismod risus placerat praesent arcu. Voluptatum mauris sit arcu, morbi phasellus a, vel integer elit. Sit nascetur porta morbi, porttitor augue ante dui et nulla rutrum, vivamus mollis massa, urna sem diam odio quisque. Vestibulum erat tristique praesent ornare risus, justo nam velit mus ac, ipsum dis.
Non elit dui libero, aenean vivamus eros faucibus, leo et eu orci in sed nonummy, praesent curabitur turpis morbi ante parturient, eu odio risus consectetuer facilisis pellentesque. Sit tortor curabitur enim rutrum, suspendisse porta ipsum convallis dolor, libero laoreet tristique metus elit. Lectus perferendis ipsum lorem consequat. Tortor nulla lectus molestie donec metus, nisl vivamus aenean tellus eget nunc tempor. Non lorem proin augue potenti, elit ante tristique dolor vitae enim, sed erat ultricies elit nisl duis. Orci elit risus nulla et, ultricies felis malesuada vitae libero dignissim suspendisse. Ac etiam blandit volutpat nec diam, rutrum commodo laoreet, volutpat erat vestibulum eros exercitationem ridiculus pellentesque, dolor faucibus nascetur, porttitor duis accumsan eu ornare neque eleifend. Tincidunt convallis hendrerit eros, ut enim iaculis, velit massa magni erat magna hendrerit nam, cras turpis fermentum orci aliquam feugiat. Id nemo aliquip vel mauris semper.
            </div></div>
      </div>
    </div>
    );
  }
}

export default connect(null, actions)(Test);