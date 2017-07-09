import React, { Component } from 'react';
import { PropTypes } from 'react';
import ImageTracer from 'imagetracerjs';

export default class BrainView extends Component {

  componentWillMount() {
  }

  componentDidMount() {
    window.ImageTracer = ImageTracer
    this.showBrain()
    this.showTumor()
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

  clicked() {
    // Paper.project.activeLayer.removeChildren()
    this.showBrain()
    this.showTumor()
  }

  imageWasUploaded(nextProps) {
    // console.info(this.imagePreviewUrl, nextProps.imagePreviewUrl)
    return true;
  }

  showBrain() {
    ImageTracer.imageToSVG(
      `res/output/src_Brats17_2013_10_1_combined.nx.77.png`,
      (svgstr) => ImageTracer.appendSVGString(svgstr, 'brain'),
      'Randomsampling2',
    )
  }

  showTumor() {
    for(let i = 0; i < 3; i++) {
      ImageTracer.imageToSVG(
        `res/output/${i}_Brats17_2013_10_1_combined.nx.77.png`,
        (svgstr) => ImageTracer.appendSVGString(svgstr, `region-${i}`),
        'Randomsampling2',
      )
    }
  }

  render() {
    // let imagePreviewUrl = this.state.imagePreviewUrl;
    return (
      <div className='brain-container' ref={(container) => { this.container = container }}>
        <div className="region" id="brain"></div>
        <div className="region" id="region-0"></div>
        <div className="region" id="region-1"></div>
        <div className="region" id="region-2"></div>
      </div>
    );
  }
}

BrainView.propTypes = {
  fileName: PropTypes.string,
  imagePreviewUrl: PropTypes.object,
  onClick: PropTypes.func.isRequired,
}
