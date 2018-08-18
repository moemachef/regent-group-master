import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css';
import './Whyus.css';

class Whyus extends Component {
  render() {
    const data = this.props.data;
    return (
      <section className="why-choose-us">
        <div className="container">
          <div className="row">
            {/* <h1 className={'body-h1 ' + data.classTitle}>{data.title}</h1> */}
            <div className="why-choose-us-info">
              <div className="col s12 m6 l4">
                <div className="why-choose-us-info-each col s12">
                  <i className={'ion-ios-home col s12 bg ' + data.classIcon} />
                  {/*<div className="col s12 bg bg-pro"></div> */}
                  <br />
                  <div
                    className={'col s12 why-choose-us-text ' + data.classText}
                  >
                    <h6>{data.professional}</h6>
                    {/* <p>{data.professionalText}</p> */}
                  </div>
                </div>
                <div className="why-choose-us-info-each col s12">
                  <i
                    className={'ion-android-globe col s12 bg ' + data.classIcon}
                  />
                  <br />
                  {/*<div className="col s12 bg bg-fast_com"></div>*/}
                  <div
                    className={'col s12 why-choose-us-text ' + data.classText}
                  >
                    <h6>{data.fast}</h6>
                    {/* <p>{data.fastText}</p> */}
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="why-choose-us-info-each col s12">
                  <i
                    className={'ion-ios-pricetags col s12 bg ' + data.classIcon}
                  />
                  <br />
                  {/*<div className="col s12 bg bg-best_pricing"></div>*/}
                  <div
                    className={'col s12 why-choose-us-text ' + data.classText}
                  >
                    <h6>{data.pricing}</h6>
                    {/* <p>{data.pricingText}</p> */}
                  </div>
                </div>
                <div className="why-choose-us-info-each col s12">
                  <i className={'ion-cash col s12 bg ' + data.classIcon} />
                  <br />
                  {/*<div className="col s12 bg bg-service"></div>*/}
                  <div
                    className={'col s12 why-choose-us-text ' + data.classText}
                  >
                    <h6>{data.service}</h6>
                    {/* <p>{data.serviceText}</p> */}
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l4">
                <div className="why-choose-us-info-each col s12 m6 l12">
                  <i
                    className={'ion-ios-location col s12 bg ' + data.classIcon}
                  />
                  <br />
                  {/*<div className="col s12 bg bg-trust"></div>*/}
                  <div
                    className={'col s12 why-choose-us-text ' + data.classText}
                  >
                    <h6>{data.trust}</h6>
                    {/* <p>{data.trustText}</p> */}
                  </div>
                </div>
                <div className="why-choose-us-info-each col s12 m6 l12">
                  <i
                    className={
                      'ion-arrow-graph-up-left col s12 bg ' + data.classIcon
                    }
                  />
                  <br />
                  {/*<div className="col s12 bg bg-satisfy"></div>*/}
                  <div
                    className={'col s12 why-choose-us-text ' + data.classText}
                  >
                    <h6>{data.passion}</h6>
                    {/* <p>{data.passionText}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Whyus;
