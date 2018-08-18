import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import ReactTelInput from 'react-telephone-input/lib/withStyles';
import './Getintouch.css';
import Map from '../Map/Map.js';
// import ReactPixel from 'react-facebook-pixel';
class Getintouch extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      url: '',
      thankYou: false,
      class1: true
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.gtag_report_conversion = this.gtag_report_conversion.bind(this);
  }
  closeThankyou = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      url: '',
      thankYou: false
    });
  };
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
    global.chosenCurrency = 'USD';
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleInputChange = (telNumber, selectedCountry) => {
    var currentLocation = window.location.href;
    this.setState({
      phone: telNumber,
      url: currentLocation
    });
  };
  gtag_report_conversion = url => {
    var callback = function() {
      if (typeof url != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      send_to: 'AW-881122469/O89kCLa1mIUBEKW5k6QD',
      event_callback: callback
    });
    return false;
  };
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      url: this.state.url
    };
    if (user.phone == '+' || user.phone.length < 16) {
      this.setState({
        class1: false
      });
      return;
    }

    fetch('https://api.formbucket.com/f/buk_xubeJIcp8yAbDJnzioQ2T8E3', {
      method: 'post',
      mode: 'cors',
      headers: {
        accept: 'application/javascript',
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJEOEJxTkZZRU91YUUwUWk1Y0pUNDhVV1oiLCJpc3MiOiJhcGkuZm9ybWJ1Y2tldC5jb20iLCJ1aWQiOiI1YTg5NDQ2OTY0ZjgxMTA5YmI2NzBlZWMiLCJleHAiOjE1MjUyNjA1MzUsImlhdCI6MTUyMjY2ODUzNX0.cV0CR692ON4p9n6dnfycfljpdznG5tU037vQMQKrmK4'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        alert('thank you, we will call you as soon as possible!');
        const advancedMatching = {
          em: 'designer.cayan@gmail.com'
        }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
        const options = {
          autoConfig: true, // set pixel's autoConfig
          debug: false // enable logs
        };
        // ReactPixel.init('781042682039671', advancedMatching, options);

        // ReactPixel.track('Lead'); // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
        // ReactPixel.trackCustom( event, data ) 	// For tracking custom events
        this.setState({
          thankYou: true
        });
        this.gtag_report_conversion(this.url);
        // setTimeout( function(){

        //   window.location = '/#thank-you';

        // }  , 4000 );
      })
      .catch(function(error) {});
  };

  render() {
    const data = this.props.data;
    return (
      <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="contact-input col s12 l7 ">
              <h5 className={data.classTitle}>{data.getInTouch}</h5>
              <p className={data.classTitle}>{data.getInTouchP}</p>

              <form onSubmit={this.handleSubmit}>
                <div className={'input-field ' + data.classInput}>
                  <p className={'label ' + data.classTitle}>{data.name}</p>
                  <input
                    className="validate"
                    type="text"
                    name="name"
                    placeholder=""
                    onChange={this.handleNameChange}
                    required
                  />
                </div>

                <div className={'input-field ' + data.classInput}>
                  <p className={'label ' + data.classTitle}>{data.email}</p>
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    placeholder=""
                    onChange={this.handleEmailChange}
                    required
                  />
                </div>
                <div className={'input-field ' + data.classInput}>
                  <div className="row">
                    <p className={'label ' + data.classTitle}>{data.number}</p>
                  </div>
                  <ReactTelInput
                    className={data.classInput}
                    defaultCountry="tr"
                    flagsImagePath="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522998573/extras/flags.png"
                    preferredCountries={[
                      'tr',
                      'sa',
                      'ae',
                      'kw',
                      'qa',
                      'om',
                      'bh',
                      'eg',
                      'jo',
                      'lb',
                      'dz',
                      'ma',
                      'ly',
                      'sy'
                    ]}
                    onChange={this.handleInputChange}
                  />
                </div>

                <button className="btn waves-effect waves-light" type="submit">
                  Send
                </button>
              </form>
            </div>
            <Map />
          </div>
        </div>
      </section>
    );
  }
}

export default Getintouch;
