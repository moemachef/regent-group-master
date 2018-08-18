import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../data/content.json'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const content = require('../../../reducer');

class Navbar extends Component {
    state = {
    selectedOption: 'USD',
  }
  // let switchCurrency = this.props.switchCurrency

  handleChange = (selectedOption) => {

    this.setState({ selectedOption });
    

  }
  showSettings (event) {
    event.preventDefault();

  }
  render() {
        const { selectedOption } = this.state;
        const content = this.props.content;
        const data = this.props.data;
        let switchLanguage = this.props.switchLanguage;
    return (
      <div>
        <i
          onClick={this.showSettings}
          className="material-icons sidenav-trigger right"
        />
        <Menu>
          <img
            className="sidenav-logo"
            src="http://res.cloudinary.com/dgfb9ldfx/image/upload/v1531999292/regent-react-real-estate-app/logo_white_version.png"
            alt="regent group logo"
          />
          <li className="link-wrapper">
            <NavLink
              activeClassName="selected"
              className="menu-item"
              exact
              to="/"
            >
              {data.home}
            </NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink
              activeClassName="selected"
              className="menu-item"
              exact
              to="/projects"
            >
              {data.projects}
            </NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink
              activeClassName="selected"
              className="menu-item"
              exact
              to="/services"
            >
              {data.services}
            </NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink
              activeClassName="selected"
              className="menu-item"
              exact
              to="/about"
            >
              {data.about}
            </NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink
              activeClassName="selected"
              className="menu-item"
              exact
              to="/contact"
            >
              {data.contact}
            </NavLink>
          </li>
        </Menu>
        <div className="navbar-fixed ">
          <nav className="normal-nav">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                <img
                  className="responsive-img"
                  src="http://res.cloudinary.com/dgfb9ldfx/image/upload/v1531747547/regent-react-real-estate-app/logo_alone_website.png"
                  alt="cayan group logo"
                />
              </a>

              <ul
                className={
                  'nav-links center hide-on-med-and-down ' + data.class
                }
              >
                <li className="link-wrapper">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    exact
                    to="/"
                  >
                    {data.home}
                  </NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to="/projects"
                  >
                    {data.projects}
                  </NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to="/services"
                  >
                    {data.services}
                  </NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to="/about"
                  >
                    {data.about}
                  </NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link"
                    to="/contact"
                  >
                    {data.contact}
                  </NavLink>
                </li>
              </ul>
              <ul className="right hide-on-med-and-down language">
                <li className="dropdown-button right">
                  <a
                    onClick={switchLanguage.bind(this, 'en')}
                    className="language-a"
                  >
                    Eng
                  </a>
                </li>
                <li className="dropdown-button right">
                  <a
                    onClick={switchLanguage.bind(this, 'ar')}
                    className="language-a"
                  >
                    عربي
                  </a>
                </li>

                {/* <li className="right">
                  <a
                    href="https://api.whatsapp.com/send?phone=905550818898"
                    className="waves-effect waves-light btn-large"
                  >
                    <ion-icon name="logo-whatsapp" className="whats-icon" />
                    +90-555-081-8898
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }

}

export default Navbar;
