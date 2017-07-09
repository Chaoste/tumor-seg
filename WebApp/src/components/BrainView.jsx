import React, { Component } from 'react';
import Paper from 'paper';

export default class BrainView extends Component {

  componentWillMount() {
  }

  componentDidMount() {
    Paper.setup(this.canvas)
  }

  componentWillReceiveProps(nextProps) {
    if (this.imageWasUploaded(nextProps)) {
      // TODO:
      // 1.Load any image from output
    }
  }

  imageWasUploaded(nextProps) {
    return true;
  }

  render() {
    return (
      <div className='brain-container'>
        <canvas id="brain-panel" ref={(canvas) => { this.canvas = canvas }} />
      </div>
    );
  }
}

BrainView.propTypes = {
  image: PropTypes.object,

}
