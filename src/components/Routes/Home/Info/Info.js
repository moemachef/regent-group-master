import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Info.css';

class Info extends Component {
  render() {
    const data = this.props.data;

    return (
      <section className="company-intro center section" id="company-intro">
        <div className="container">
          <div className="row">
            <h4 className={data.classInfo}>{data.main}</h4>
            <p className={data.classInfo}>{data.submain}</p>
          </div>
        </div>
      </section>
    
    );
  }
}

export default Info;
