import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import Sections from './Sections/Sections.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Footer from '../../Reusable/Footer/Footer.js';
import { Helmet } from 'react-helmet';

let actions = require('../../../actions');

class About extends Component {
  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;
    var pageTitle = () => {
      document.title = ' Real Estate Istanbul, Turkey  | About ';
    };
    pageTitle();
    return (
      <div className="">
        {/* <Helmet>
                  <meta charSet="utf-8" />
                  <title>Cayan Group Real Estate in Istanbul, Turkey | About </title>
                  <meta name="description" content="We have a large portfolio of Istanbul properties, Istanbul apartments and other real estate investment opportunities in Turkey. we will help you find the home of your dreams in Turkey for best prices and offers. Istanbul Real Estate, Istanbul Apartments for Sale. "/>
                  <link rel="canonical" href="http://www.cayan-group.com/About" />
                </Helmet> */}
        <Action />
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage} />
        <Header />
        <Sections data={content.page.about} />
        <Getintouch data={content.page.getintouch} />
        <Footer data={content.page.footer} />
      </div>
    );
  }
}

export default connect(
  state => ({ content: state.content }),
  dispatch => ({
    switchLanguage: lang => dispatch(actions.switchLanguage(lang))
  })
)(About);
