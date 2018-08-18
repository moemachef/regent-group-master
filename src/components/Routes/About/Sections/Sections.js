import React, { Component } from 'react';

import './Sections.css';

class Sections extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="about-outter">
        <div className="container">
          <div className="row">
            <div className="intro-image">
              <img src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1533325347/logo.png" />
            </div>

            <section className="about col s12">
              {/* <h1 className={"body-h1 " + data.classTitle}>{data.title}</h1> */}
              {/* <hr/> */}
              <p className={data.classTitle}>{data.description}</p>
              <p className={data.classTitle}>{data.description2}</p>
            </section>

            {/* <section className="our-team">

            <div className="row">
              <div className="our-team-div col s12">
              <h1 className={"body-h1 " + data.classTitle}>{data.ourteam}</h1>
              <hr/>
                <div className="our-team-each col s12 m4">
                  <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1523868775/about/ikram-website.jpg"  alt=""/>
                  <div className="name">
                    <h5 className={data.classTitle}>{data.team1}</h5>
                  </div>
                  <h6 className={data.classTitle}>{data.callcenter}</h6>
                  <hr />
                  <div className="position">

                    <p><i className="ion-ios-telephone-outline"></i>+90-505-037-8872</p>
                  </div>
                </div>
                <div className="our-team-each col s12 m4">
                  <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1523970504/about/fadiiiii-finall.jpg" alt=""/>
                  <div className="name">
                    <h5 className={data.classTitle}>{data.team2}</h5>
                  </div>
                  <h6 className={data.classTitle}>{data.headofsales}</h6>
                  <hr />
                  <div className="position">

                    <p><i className="ion-ios-telephone-outline"></i>+90-553-333-5550</p>
                  </div>
                </div>
                <div className="our-team-each col s12 m4">
                  <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1523869811/about/MOHAMED-website.jpg" alt=""/>
                  <div className="name">
                    <h5 className={data.classTitle}>{data.team3}</h5>
                  </div>
                  <h6 className={data.classTitle}>{data.sales}</h6>
                  <hr />
                  <div className="position">

                    <p><i className="ion-ios-telephone-outline"></i>+90-554-160-1354</p>
                  </div>
                </div>
              </div>
            </div>

        </section> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sections;
