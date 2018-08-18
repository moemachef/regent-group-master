import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    const data = this.props.data;
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <img src="https://res.cloudinary.com/dgfb9ldfx/image/upload/v1531999292/regent-react-real-estate-app/logo_white_version.png" />

              <ul className="footer-social">
                <a
                  className="bg-facebook"
                  href="https://www.facebook.com/RegentGroupTR/"
                >
                  <i className="ion-social-facebook" />
                </a>
                <a
                  className="bg-twitter"
                  href="https://www.instagram.com/regent_group_istanbul/"
                >
                  <i
                    className="ion-social-instagram

"
                  />
                </a>
                <a className="bg-youtube" href="https://twitter.com/Regent_Gr">
                  <i className="ion-social-twitter" />
                </a>
                <a className="bg-linkedin" href="#">
                  <i className="ion-social-snapchat" />
                </a>
                <a
                  className="bg-instagram"
                  href="https://api.whatsapp.com/send?phone=905550818898"
                >
                  <i className="ion-social-whatsapp" />
                </a>
              </ul>
              <p className={data.classNav}>{data.copyrights}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
