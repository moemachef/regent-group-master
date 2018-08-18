import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="row">
        <section className="about-hero-carousel col s12">

          <br/>
          <img className="responsive-img" srcSet="https://res.cloudinary.com/cayangroup9292/image/upload/v1521978953/about/_about-cayan-hero-lg.png"  alt=""/>
        </section>
          </div>


      </div>

    );
  }
}

export default Header;
