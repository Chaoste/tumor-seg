import React, { Component } from 'react';

export default class AnalyzingPage extends Component {
  render() {
    return (
      <div className='analyze'>
        <div className='header'>
          <h1 className='headLine'>Tumor Viz</h1>
        </div>
        <div className='content'>
          <div className='leftContent'>
            <div className='picture'>
          </div>
            </div>
            <div className='rightContent'>
              <div className='info'>
                <p>Tumor: Tumor</p>
                <p>Type: Type</p>
                <p>Survival rate: 10 month</p>
              </div>
              <div className='add'>
                <a className='iconSmall'>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <p>Add a picture</p>
                </a>
              </div>
            </div>
          </div>
          <div className='descriptionContainer'>
            <p>This is a sample test for describing a part of a tumor ajlfbar ajwruzrbvaej rvaelrzgvbalrevc avsigvb</p>
          </div>

      </div>
    );
  }
}
