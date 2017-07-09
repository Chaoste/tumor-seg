import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1 className='headLine'>Tumor Viz</h1>
        </div>
        <div className='content'>
          <div className='addContainer'>
            <a>
              <i className="fa fa-file-image-o" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
