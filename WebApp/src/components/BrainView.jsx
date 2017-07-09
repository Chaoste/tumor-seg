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
      // 1. Load any image from input directory
      // 2. Add image to paper.js
      // 3. Load output belonging to this input
      // 4. Add output to paper.js as pixelwise components
      // 5. Add onHover events to tumor regions
      // 6.
    }
  }

  imageWasUploaded(nextProps) {
    return true;
  }

  render() {
    return (
      <div className='brain-container'>
        <img id="upload" className="hidden" src="input/" width="400" height="400" ref={(img) => { this.img_container = img }} />
        <canvas id="brain-panel" ref={(canvas) => { this.canvas = canvas }} />
      </div>
    );
  }
}

BrainView.propTypes = {
  image: PropTypes.object,

}
