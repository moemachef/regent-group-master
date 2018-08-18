import React, {
  Component
} from 'react';
import ReactTelInput from 'react-telephone-input/lib/withStyles';
import './Getintouchprojects.css';
import Map from '../Map/Map.js';
import ReactPixel from 'react-facebook-pixel';
class Getintouchprojects extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      url: '',
      thankYou : false,
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
        thankYou : false
      });
}

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
    global.chosenCurrency = 'USD'
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });

  }

  handleInputChange = (telNumber, selectedCountry) => {

    var currentLocation = window.location.href;
    this.setState({
      phone: telNumber,
      url: currentLocation
    });

  }

  gtag_report_conversion = (url) => {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
        'send_to': 'AW-881122469/O89kCLa1mIUBEKW5k6QD',
        'event_callback': callback
    });
    return false;
  }
  // gtag_report_conversion = (url) => {
  //   var callback = function () {
  //     if (typeof(url) != 'undefined') {
  //       window.location = url;
  //     }
  //   };
  //   window.gtag('event', 'conversion', {
  //       'send_to': 'AW-802276413/nvTOCKjZjYUBEL2Ix_4C',
  //       'event_callback': callback
  //   });
  //   return false;
  // }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      url: this.state.url
    };
    if (user.phone == '+' || user.phone.length < 18 ) {
  
      this.setState({
        class1 : false
      })
     return
    } 

    fetch('https://api.formbucket.com/f/buk_5pZlX4fRjDrezI22h0yu8oYL', {
        method: 'post',
        mode: 'cors',
        headers: {
          'accept': 'application/javascript',
          'Content-Type': 'application/json',
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJEOEJxTkZZRU91YUUwUWk1Y0pUNDhVV1oiLCJpc3MiOiJhcGkuZm9ybWJ1Y2tldC5jb20iLCJ1aWQiOiI1YTg5NDQ2OTY0ZjgxMTA5YmI2NzBlZWMiLCJleHAiOjE1MjUyNjA1MzUsImlhdCI6MTUyMjY2ODUzNX0.cV0CR692ON4p9n6dnfycfljpdznG5tU037vQMQKrmK4',
        },
        body: JSON.stringify(user)
      }).then(res => {
        const advancedMatching = {
          em: 'eahefnawy@gmail.com'
        }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
        const options = {
          autoConfig: true, // set pixel's autoConfig
          debug: false, // enable logs
        };
        ReactPixel.init('781042682039671', advancedMatching, options);

        

        ReactPixel.track('Lead') // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
        // ReactPixel.trackCustom( event, data ) 	// For tracking custom events
        this.setState({
          thankYou : true
        })
        
        // setTimeout( function(){
        //   window.location = '/#thank-you';
        // }  , 4000 );
        this.gtag_report_conversion(this.url);

      })
      .catch(function(error) {

      });

  }






  render() {
    let isShowing = false;
    const data = this.props.data;
    return ( <
      section className = "contact-section"
      id = "contact-section" >
      <div id="thank-you" className={this.state.thankYou ? 'show1' : 'hide1'}>
      <h2 className={data.classTitle}>{data.thankyouTitle}</h2>
      <p className={data.classTitle}>{data.thankyoup}</p>
      <i className="ion-android-checkmark-circle"></i>
      <a className={"browse " + data.classTitle} href="/projects">{data.thankyoubtn1}</a>
      <a className={"close " + data.classTitle} onClick={this.closeThankyou}>{data.thankyoubtn2}</a>
      </div>
      <
      div className = "container" >
      <
      div className = "row" >
      <
      h1 className = {
        "body-h1 " + data.classTitle
      } > {
        data.title
      } < /h1> <
      div className = "contact-social col s1 l1" >
      <
      div className = "contact-social-icons twitter" >
      <
      a href = "https://twitter.com/CayanGroup_tr"
      target = "_blank"
      rel = "noopener noreferrer" >
      <
      i className = "ion-social-twitter twitter" > < /i> <
      /a> <
      /div> <
      br / >
      <
      div className = "contact-social-icons facebook" >
      <
      a href = "https://www.facebook.com/CayanGroup.tr/"
      target = "_blank"
      rel = "noopener noreferrer" >
      <
      i className = "ion-social-facebook facebook" > < /i> <
      /a> <
      /div> <
      br / >
      <
      div className = "contact-social-icons instagram" >
      <
      a href = "https://www.instagram.com/cayangroup_tr/"
      target = "_blank"
      rel = "noopener noreferrer" >
      <
      i className = "ion-social-instagram instagram" > < /i> <
      /a> <
      /div> <
      br / >
      <
      div className = "contact-social-icons youtube" >
      <
      a href = "https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1"
      target = "_blank"
      rel = "noopener noreferrer" >
      <
      i className = "ion-social-youtube youtube" > < /i> <
      /a> <
      /div> <
      br / >
      <
      div className = "contact-social-icons linkedin" >
      <
      a href = "https://www.linkedin.com/in/cayan-group-490441113/"
      target = "_blank"
      rel = "noopener noreferrer" >
      <
      i className = "ion-social-linkedin linkedin" > < /i> <
      /a> <
      /div> <
      /div>

      <
      div className = "contact-input1 col s12 l11 " >
      <
      div className="contact-input-right right col s12 m5">

      <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1526026629/extras/fadiiiii-finall.p.png" alt="sales, call center"/>
      <
      div className="contact-input-right-text">
      <h4 className={data.classTitle}>{data.operator}</h4>
      <h5 className={data.classTitle}>{data.operator1}</h5>
      <p>+90-506-116-2526</p>
      <
      p className = "" > +90-553-333-5550 < /p> 

      </div>
      <
      /div>
      <
      div className = "contact-input-left left col s12 m7" >
      <
      h5 className = {"h5-first " +
        data.classTitle
      } > {
        data.getInTouch
      } < /h5> <
      p className = {"p-first " +
        data.classTitle
      } > {
        data.getInTouchP
      } < /p>

      <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      div className = {
        "input-field " + data.classInput
      } >
      <
      p className = {
        "label " + data.classTitle
      } > {
        data.name
      } < /p> <
      input className = "validate"
      type = "text"
      name = "name"
      placeholder = ""
      onChange = {
        this.handleNameChange
      }
      required / >

      <
      /div>

      <
      div className = {
        "input-field " + data.classInput
      } >
      <
      p className = {
        "label " + data.classTitle
      } > {
        data.email
      } < /p> <
      input className = "validate"
      type = "email"
      name = "email"
      placeholder = ""
      onChange = {
        this.handleEmailChange
      }
      required / >

      <
      /div> <
      div className = {
        "input-field " + data.classInput
      } >
      <
      div className = "row" >
      <
      p className = {
        "label " + data.classTitle
      } > {
        data.number
      } < /p> <
      /div> <
      ReactTelInput className = {
        data.classInput
      }
      defaultCountry = 'tr'
      flagsImagePath = 'https://res.cloudinary.com/dd5e5iszi/image/upload/v1522998573/extras/flags.png'
      preferredCountries = {
        ['tr', 'sa', 'ae', 'kw', 'qa', 'om', 'bh', 'eg', 'jo', 'lb', 'dz', 'ma', 'ly', 'sy']
      }
      onChange = {
        this.handleInputChange
      }
      />
      <p className={this.state.class1 ? 'hide1' : 'show1'}>Please enter your phone number</p>

      <
      /div>

      <
      button className = "btn waves-effect waves-light"
      type = "submit" > send < /button> <
      /form >

      <
      div className = "contact-info" >
      <
      i className = "ion-location left " > < /i> <
      p className = "" > Cumhuriyet Mah.Hürriyet Cd .1979 Sk.no: 16 önay garden residence Esenyurt.Istanbul < /p> <
      br / >
      <
      i className = "ion-ios-email left " > < /i> <
      p className = "" > info@cayan-group.com< /p> <
      br / >
      <
      i className = "ion-ios-telephone left " > < /i> <
      p className = "" > +90-506-116-2526 < /p>
      <
      /div> <
      div className = "contact-social-mobile" >
      <
      a className = "bg-facebook"
      href = "https://www.facebook.com/CayanGroup.tr/"
      target = "_blank"
      rel = "noopener noreferrer" > < i className = "ion-social-facebook" > < /i></a >
      <
      a className = "bg-twitter"
      href = "https://twitter.com/CayanGroup_tr"
      target = "_blank"
      rel = "noopener noreferrer" > < i className = "ion-social-twitter" > < /i></a >
      <
      a className = "bg-youtube"
      href = "https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1"
      target = "_blank"
      rel = "noopener noreferrer" > < i className = "ion-social-youtube" > < /i></a >
      <
      a className = "bg-linkedin"
      href = "https://www.linkedin.com/in/cayan-group-490441113/"
      target = "_blank"
      rel = "noopener noreferrer" > < i className = "ion-social-linkedin" > < /i></a >
      <
      a className = "bg-instagram"
      href = "https://www.instagram.com/cayangroup_tr/"
      target = "_blank"
      rel = "noopener noreferrer" > < i className = "ion-social-instagram-outline" > < /i></a >
      <
      /div> <
      /div>
      <
      /div>
      <
      /div> <
      /div> <
      /section>
    );
  }
}

export default Getintouchprojects;
