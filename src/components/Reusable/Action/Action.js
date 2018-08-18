import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Action.css';
let actions = require('../../../actions');
class Action extends Component {
  render() {
    return (
      <div>
        <div className="contact-us-bar">
          <a
            href="https://api.whatsapp.com/send?phone=905550818898"
            className="left"
          >
            <i className="ion-social-whatsapp" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=905550818898"
            className="right"
          >
            <i className="ion-android-call" />
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ content: state.content }),
  dispatch => ({
    switchLanguage: lang => dispatch(actions.switchLanguage(lang))
  })
)(Action);
