import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import './EachProject.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import './Header/Header.css';
import './PhotoTour/PhotoTour.css';
import './Plans/Plans.css';
import './Privileges/Privileges.css';
import './Places/Places.css';
import './Location/Location.css';
import './overview/overview.css';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Getintouchprojects1 from '../../Reusable/Getintouchprojects1/Getintouchprojects1.js';
import Footer from '../../Reusable/Footer/Footer.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';

import { projects } from '../../Data/projects';

import Slider from 'react-slick';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import GoogleMapReact from 'google-map-react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const api = require('../../../api');

let actions = require('../../../actions');
const AnyReactComponent = ({ marker }) => (
  <img
    src={
      'https://res.cloudinary.com/dqbgnn5hf/image/upload/v1533986136/Facebook_Places.svg'
    }
    alt="cayan group "
  />
);
// const AnyReactComponent3 = ({ marker }) => <img src={'https://res.cloudinary.com/dd5e5iszi/image/upload/q_auto:eco/v1525080534/map/taksim.svg'} alt="cayan group " />;

// const AnyReactComponent2 = ({ marker }) => <img src={'https://res.cloudinary.com/dd5e5iszi/image/upload/q_auto:eco/v1525080534/map/airport.svg'} alt="cayan group " />;

let allProjects = projects;

class EachProject extends Component {
  state = {
    selectedOption: '',

    isTop: true
  };

  // let switchCurrency = this.props.switchCurrency
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 3000;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });

    // console.log(`Selected: ${selectedOption.label}`);
    console.log(selectedOption.label);
  };

  static defaultProps = {
    center: { lat: 41.016431, lng: 28.653232 },
    zoom: 11
  };

  render() {
    const { selectedOption } = this.state;
    const content = this.props.content;

    const data = content.page.eachProject;
    const product = find(allProjects, { id: this.props.match.params.id });
    const currentProduct = product;
    const locationLat = product.lat;
    const locationLng = product.lng;
    const switchLanguage = this.props.switchLanguage;
    const centerProject = { lat: product.lat, lng: product.lng };

    var pageTitle = () => {
      document.title = 'Regent Group | Property ' + currentProduct.id;
      // pageTitle()
    };
    pageTitle();

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage} />
        <div className="row">
          <section className="header-each-project">
            <div className="left col s12 l8">
              <Slider {...settings}>
                {currentProduct.images.map(images => {
                  return (
                    <div className="image-each">
                      <img
                        src={images}
                        alt="projects, real estate, istanbul, turkey,regent group"
                        alt="regent group "
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* <div className={'left col s12 l8 cayan-' + currentProduct.id}>
              <h1>IST {currentProduct.id}</h1>
              <div className={'header-img cayan-' + currentProduct.id} />
            </div> */}
            <div className="right col s12 l4">
              {/* <div className="right-inner"> */}

              <div className={'each ' + data.classInfoAr}>
                <i className="ion-ios-location" />
                <p className={'location ' + data.classInfoEn}>
                  {currentProduct.location}
                </p>
                <p className={data.classInfoAr}>{currentProduct.locationAr}</p>
              </div>
              <div className={'each ' + data.classInfoAr}>
                <i className="ion-home" />
                <p className={data.classInfoEn}>{currentProduct.typesAll}</p>
                <p className={data.classInfoAr}>{currentProduct.typesAll}</p>
              </div>
              <div className={'each ' + data.classInfoAr}>
                <i className="ion-map" />
                <p className={data.classInfoEn}>{currentProduct.area}</p>
                <p className={data.classInfoAr}>{currentProduct.area}</p>
              </div>
              <div className={'each ' + data.classInfoAr}>
                <i className="ion-ios-pricetags " />
                <p className={data.classInfoEn}>
                  {currentProduct.installment} months
                </p>
                <p className={data.classInfoAr}>
                  {'  '}
                  <span>{currentProduct.installment}</span>
                  شهر
                </p>
              </div>
              <div className={'each ' + data.classInfoAr}>
                <i className="ion-cash" />
                <p className={data.classInfoEn}>
                  {currentProduct.downPayment} %
                </p>
                <p className={data.classInfoAr}>
                  ٪ {currentProduct.downPayment}
                </p>
              </div>
              <div className={'each ' + data.classInfoAr}>
                <i className="ion-calendar" />
                <p className={data.classInfoEn}>
                  {currentProduct.deliveryDate}
                </p>
                <p className={data.classInfoAr}>
                  {currentProduct.deliveryDateAr}
                </p>
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
        <div className="row">
          <section className="overview">
            <div className="left col s12 l8 description">
              <div className="inner">
                <h1 className="code">IST {currentProduct.id}</h1>
                <p className={data.classInfoEn}>
                  {currentProduct.descriptionShort}
                </p>
                <p className={data.classInfoAr}>
                  {currentProduct.descriptionShortAr}
                </p>
              </div>
            </div>
            <div className="right col s12 l4">
              <div className="inner">
                {/* <p>Prices</p> */}

                <p className={data.classTitle}>{data.starting}</p>
                <h2>${currentProduct.priceMin.USD.toLocaleString()}</h2>
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <section className="photo-tour">
            <div className="left col s12 l8">
              <Slider {...settings}>
                {currentProduct.interior.map(interior => {
                  return (
                    <div className="image-each">
                      <img
                        src={interior}
                        alt="projects, real estate, istanbul, turkey,regent group"
                        alt="regent group "
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="right col s12 l4">
              <div className="each">
                <p className={data.classInfoAr}>{data.security}</p>
                <i className="ion-android-star" />
              </div>
              <div className="each">
                <p className={data.classInfoAr}>{data.resturants}</p>
                <i className="ion-android-restaurant" />
              </div>
              <div className="each">
                <p className={data.classInfoAr}>{data.cafes}</p>
                <i className="ion-coffee" />
              </div>
              <div className="each">
                <p className={data.classInfoAr}>{data.parks}</p>
                <i className="ion-leaf" />
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <section className="plan">
            <Tabs>
              <div className="left col s12 l8">
                {currentProduct.types.map(type => {
                  return (
                    <TabPanel>
                      <div className="price">
                        <h3>
                          ${type.minPrice.USD.toLocaleString()} - ${type.maxPrice.USD.toLocaleString()}{' '}
                        </h3>
                      </div>
                      <div className="area">
                        <h3 className={data.classInfoAr}>
                          {type.minArea}m - {type.maxArea}m
                        </h3>
                      </div>
                      <div className="plan-image ">
                        <img
                          src={type.plan}
                          alt="projects, real estate, istanbul, turkey,Regent group"
                          alt="Regent group "
                        />
                      </div>
                    </TabPanel>
                  );
                })}
              </div>
              <div className="right col s12 l4">
                <TabList>
                  {currentProduct.types.map(type => {
                    return <Tab>{type.type}</Tab>;
                  })}
                </TabList>
              </div>
            </Tabs>
          </section>
        </div>
        <section className="location">
          <div className="row">
            <div className="left col s12 l8">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0'
                }}
                defaultCenter={centerProject}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent lat={locationLat} lng={locationLng} />
                {/* <AnyReactComponent2
                        lat={40.989335}
                        lng={ 28.802444}
                      />
                      <AnyReactComponent3
                        lat={41.047102}
                        lng={28.962483}
                      /> */}
              </GoogleMapReact>
            </div>
            <div className="right col s12 l4">
              <div className="each">
                <i className="ion-android-bus" />
                <p className={data.classInfoAr}>{data.metrobus}</p>
                <p>{currentProduct.distances.metrobus}</p>
              </div>
              <div className="each">
                <h2>TEM</h2>
                {/* <i className="ion-android-car" /> */}
                {/* <p className={data.classInfoAr}>{data.taksim}</p> */}
                <p>{currentProduct.distances.tem}</p>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <ProjectsCarousel data={content.page.Home.ProjectsCarousel} />
        <Getintouch data={content.page.getintouch} />
        <Footer data={content.page.footer} />
        <Action />
      </div>
    );
  }
}

export default connect(
  state => ({ content: state.content }),
  dispatch => ({
    switchLanguage: lang => dispatch(actions.switchLanguage(lang))
  })
)(EachProject);
