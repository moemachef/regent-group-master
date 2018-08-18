import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';
import './Home.css';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Footer from '../../Reusable/Footer/Footer.js';
import Action from '../../Reusable/Action/Action.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Header from './Header/Header.js';
import Info from './Info/Info.js';
import Whyus from './Whyus/Whyus.js';

let actions = require('../../../actions');

class Home extends Component {
  render() {
    const advancedMatching = {
      em: 'eahefnawy@gmail.com'
    }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false // enable logs
    };

    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    if (content) {
      return (
        <div className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Regent Group Real Estate in Istanbul, Turkey</title>
            <meta
              name="description"
              content="We have a large portfolio of Istanbul properties, Istanbul apartments and other real estate investment opportunities in Turkey. we will help you find the home of your dreams in Turkey for best prices and offers. Istanbul Real Estate, Istanbul Apartments. "
            />
            <link rel="canonical" href="http://www.cayan-group.com/" />
          </Helmet>
          <Action />
          {/*<Attention data={content.page.attention}/>*/}
          <Navbar
            data={content.page.navbar}
            switchLanguage={switchLanguage}
          />{' '}
          <Header data={content.page.Home.header} />{' '}
          <Whyus data={content.page.Home.whyus} />{' '}
          {/* <div className="container">
            <h1
              className={
                'body-h1 ' + content.page.Home.ProjectsCarousel.classTitle
              }
            >
              {content.page.Home.ProjectsCarousel.title}
            </h1>
          </div> */}
          <ProjectsCarousel data={content.page.Home.ProjectsCarousel} />
          <Info data={content.page.Home.info} />
          <Getintouch data={content.page.getintouch} />{' '}
          <Footer data={content.page.footer} />{' '}
        </div>
      );
    } else {
      return;
    }
  }
}

export default connect(
  state => ({
    content: state.content
  }),
  dispatch => ({
    switchLanguage: lang => dispatch(actions.switchLanguage(lang))
  })
)(Home);
