import React, { Component } from 'react';

import './Sections.css';

class Sections extends Component {
  render() {
    const data = this.props.data;
    return (
      <section className="services-section col s12">
        <div className="services-section-front col s12">
          <div className="services-section-each first row">
            <div className="services-text first-txt col s12 m6">
              <h5 className={data.classP}>{data.investment}</h5>
              <p className={data.classP}>{data.investmentText}</p>
            </div>
            <br />
            <div className="services-img col s12 m6" />
          </div>
          <div className="services-section-each second row">
            <div className="services-text right col s12 m6">
              <h5 className={data.classP}>{data.management}</h5>
              <p className={data.classP}>{data.managementText}</p>
            </div>
            <div className="services-img left col s12 m6" />
          </div>
          <div className="services-section-each third row">
            <div className="services-text col s12 m6">
              <h5 className={data.classP}>{data.company}</h5>
              <p className={data.classP}>{data.companyText}</p>
            </div>
            <div className="services-img col s12 m6" />
          </div>
          <div className="services-section-each forth row">
            <div className="services-text right col s12 m6">
              <h5 className={data.classP}>{data.airport}</h5>
              <p className={data.classP}>{data.airportText}</p>
            </div>
            <div className="services-img left col s12 m6" />
          </div>
        </div>
      </section>
    );
  }
}

export default Sections;
