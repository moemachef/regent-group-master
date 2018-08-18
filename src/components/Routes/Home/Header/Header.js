import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Header.css';
import {Helmet} from "react-helmet";
class Header extends Component {
  render() {
    const data = this.props.data;
    var pageTitle = () => {
      document.title = " Real Estate Istanbul, Turkey  | Home Page "  ;

    }
    pageTitle()
    return (
<div className="home-page-header" /> 

    );
  }
}

export default Header;
