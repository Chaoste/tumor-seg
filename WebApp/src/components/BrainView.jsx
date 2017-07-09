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
    let img = document.createElement('img')
    img.setAttribute('src', 'res/output/src_Brats17_2013_10_1_combined.nx.77.png')
    img.style.width = '256px'
    img.style.height = '256px'
    document.getElementById('brain').appendChild(img)
  }

  showDetails(region) {
    // TODO: Trigger onClick with region
  }

  showTumor() {
    let target = document.querySelector(`#all-regions svg`)
    for(let i = 0; i < 3; i++) {
      ImageTracer.imageToSVG(
        `res/output/${i}_Brats17_2013_10_1_combined.nx.77.png`,
        (svgstr) => {
          ImageTracer.appendSVGString(svgstr, `region-${i}`)
          let paths = document.querySelectorAll(`#region-${i} svg path`)
          for (let j = 0; j < paths.length; j++) {
            if (paths[j].getAttribute('fill') == "rgb(0,0,0)") {
              continue;
            }
            target.appendChild(paths[j]);
            paths[j].addEventListener('click', () => {
              this.showDetails(i)
            })
          }
          document.querySelector(`#region-${i} svg`).remove()
        },
        'Randomsampling2',
      )
    }
  }

  render() {
    // let imagePreviewUrl = this.state.imagePreviewUrl;
    return (
      <div className='brain-container' ref={(container) => { this.container = container }}>
        <div className="region" id="brain"></div>
        <div className="region" id="all-regions">
          <svg width="256" height="256" version="1.1" xmlns="http://www.w3.org/2000/svg" desc="Created with imagetracer.js version 1.2.0" viewBox="0 0 128 128" preserveAspectRatio="none">
          </svg>
        </div>
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
