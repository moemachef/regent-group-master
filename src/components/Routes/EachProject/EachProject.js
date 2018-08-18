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
                        alt="projects, real estate, istanbul, turkey,cayan group"
                        alt="cayan group "
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
                        alt="projects, real estate, istanbul, turkey,cayan group"
                        alt="cayan group "
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
                          alt="projects, real estate, istanbul, turkey,cayan group"
                          alt="cayan group "
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
        {/*
{
  selectedOption.label === 'TRY' ?
  <h3>{type.minPrice.TRY.toLocaleString()} TL - {type.maxPrice.TRY.toLocaleString()} TL</h3>
  :
  selectedOption.label === 'AED' ?
  <h3>{type.minPrice.AED.toLocaleString()} AED - {type.maxPrice.AED.toLocaleString()} AED</h3>
  :
  selectedOption.label === 'USD' ?
  <h3>${type.minPrice.USD.toLocaleString()} - ${type.maxPrice.USD.toLocaleString()} </h3>
  :
  selectedOption.label === 'SAR' ?
    <h3>{type.minPrice.SAR.toLocaleString()} SAR - {type.maxPrice.SAR.toLocaleString()} SAR</h3>
  :
  selectedOption.label === 'KWD' ?
    <h3>{type.minPrice.KWD.toLocaleString()} KWD - {type.maxPrice.KWD.toLocaleString()} KWD</h3>

  :
  selectedOption.label === 'OMR' ?
    <h3>{type.minPrice.OMR.toLocaleString()} OMR - {type.maxPrice.OMR.toLocaleString()} OMR</h3>
    :
  selectedOption.label === 'QAR' ?
    <h3>{type.minPrice.QAR.toLocaleString()} QAR - {type.maxPrice.QAR.toLocaleString()} QAR</h3>
    :
  selectedOption.label === 'BHD' ?
    <h3>{type.minPrice.BHD.toLocaleString()} BHD - {type.maxPrice.BHD.toLocaleString()} BHD</h3>
    :
  selectedOption.label === 'EUR' ?
    <h3>{type.minPrice.EUR.toLocaleString()} EUR - {type.maxPrice.EUR.toLocaleString()} EUR</h3>
    :
  selectedOption.label === 'GBP' ?
    <h3>{type.minPrice.GBP.toLocaleString()} GBP - {type.maxPrice.GBP.toLocaleString()} GBP </h3>
    :
  <h3>${type.minPrice.USD.toLocaleString()}  - ${type.maxPrice.USD.toLocaleString()} </h3>
}
*/}

        {/* <section className={"header-each-project col s12 cayan-"+ currentProduct.id} >
          <div className="header-wrapper col s12">
          <div className="row">


              <div className="header-details col s12 l6">
                <div className="project-code">
                    <h3 id="product-code">PROPERTY{currentProduct.id}</h3>

                </div>
                <div className="header-short-desc">
                  <h2 className={data.classInfoEn}>{currentProduct.descriptionShort}</h2>
                  <h2 className={data.classInfoAr}>{currentProduct.descriptionShortAr}</h2>
                </div>
                <div className="project-details row mobile-details">
                  <div className="project-details-wrapper">
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 location-icons">
                        <i className="ion-ios-location"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.location}</p>
                        <p className={data.classInfoEn}>{currentProduct.location}</p>
                        <p className={data.classInfoAr}>{currentProduct.locationAr}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 delivery-icons">
                        <i className="ion-key"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.delivery}</p>
                        <p className={data.classInfoEn}>{currentProduct.deliveryDate}</p>
                        <p className={data.classInfoAr}>{currentProduct.deliveryDateAr}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 type-icons">
                       <i className="ion-ios-home"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.type}</p>
                        <p className="nutural">{currentProduct.typesAll}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 area-icons">
                        <i className="ion-ios-browsers"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.area}</p>
                        <p className="nutural">{currentProduct.area}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 installments-icons">
                        <i className="ion-ios-pricetags"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.installments}</p>

                        <p className={data.classInfoEn}>{currentProduct.installment} months installments</p>
                        <p className={data.classInfoAr}>{currentProduct.installment} شهر تقسيط </p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 status-icons">
                        <i className="ion-social-usd"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.status}</p>
                        <p className={data.classInfoEn}>{currentProduct.downPayment}% Downpayment</p>
                        <p className={data.classInfoAr}>{currentProduct.downPayment}% دفعة اولى</p>
                      </div>
                  </div>
                    </div>
                    </div>
                <div className="project-details row desktop-details">
                  <div className="project-details-wrapper">
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 location-icons">
                        <i className="ion-ios-location"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.location}</p>
                        <p className={data.classInfoEn}>{currentProduct.location}</p>
                        <p className={data.classInfoAr}>{currentProduct.locationAr}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 delivery-icons">
                        <i className="ion-key"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.delivery}</p>
                        <p className={data.classInfoEn}>{currentProduct.deliveryDate}</p>
                        <p className={data.classInfoAr}>{currentProduct.deliveryDateAr}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 type-icons">
                       <i className="ion-ios-home"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.type}</p>
                        <p className="nutural">{currentProduct.typesAll}</p>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div className="project-details row desktop-details">
                  <div className="project-details-wrapper">
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 area-icons">
                        <i className="ion-ios-browsers"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.area}</p>
                        <p className="nutural">{currentProduct.area}</p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 installments-icons">
                        <i className="ion-ios-pricetags"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.installments}</p>

                        <p className={data.classInfoEn}>{currentProduct.installment} months installments</p>
                        <p className={data.classInfoAr}>{currentProduct.installment} شهر تقسيط </p>
                      </div>
                    </div>
                    <div className="project-details-each col s4 l4">
                      <div className="image col s12 status-icons">
                        <i className="ion-social-usd"></i>
                      </div>
                      <div className="text col s12">
                        <p className={data.classInfoAr}>{data.status}</p>
                        <p className={data.classInfoEn}>{currentProduct.downPayment}% Downpayment</p>
                        <p className={data.classInfoAr}>{currentProduct.downPayment}% دفعة اولى</p>
                      </div>
                  </div>
                    </div>
                    </div>

                            </div>

                            <div className={"header-main-image col s12 l6 cayan-"+ currentProduct.id} >

                             </div>
                             </div>
                            </div>
          </section> */}

        {/* <section className="overview">
            <div className="container">
              <div className="row">
                <div className="text row">
                  <h2 className={data.classTitle}>{data.overview}</h2>
                  <hr/>
                </div>
                <div className="description row">
                  <div className="description-text description-text-price col s12 m3 right">
                    <h1 className={"starting " + data.classTitle}>{data.starting}</h1>
                    <h1 className="price">${currentProduct.priceMin.USD.toLocaleString()}</h1>
                  </div>
                  <div className="description-text description-text-p col s12 m9 left">
                  {
                    currentProduct.id == 41?
                    <p className={data.classInfoEn}>Homes, residences, flats, condos and apartments for sale in Avcılar guaranteed by the Turkish Government (on the European side of Istanbul) in a residential project located in the area opposite of Bahçeşehir on the intersection of the TEM (E80) highway with many roads one of which leads to the E-5 highway.
                    <br/>
                    <br/>

                    The project features luxurious apartments with amazing designs and options including one bedroom apartments, two bedroom apartments, three bedroom apartments and four bedroom apartments in multiple sizes and types.
                    <br/>
                    <br/>

                    These Ready to move in apartments for sale in installments in Avcılar-Istanbul/Turkey guaranteed by the Turkish Government have an open and amazing view of Küçükçekmece Lake (Küçükçekmece Gölü) and nature, there are also some apartments with sea view.
                    <br/>
                    <br/>

                    The project is built on an area of 95,000 square meters and consists of 10 buildings include 1,431 apartments, homes, flats and residences, a 300 meters long shopping street with 40 commercial shops on 7,000 square meters, a parking lot with a capacity of 2,800 vehicle, ponds and carefully designed gardens plus a lot of social facilities.
                    <br/>
                    <br/>

                    The construction company was founded in 1987 with the purpose of providing professional services in the construction field, from there it gained so much experience and branched to many other fields in construction including residential projects, factories, schools, hospitals, airports, transportation roads, shopping malls among others.
                    <br/>
                    <br/>

                    These apartments for sale in instalments in Avcılar-Istanbul/Turkey guaranteed by the Turkish Government are finished and ready to move in.
                    </p>
                    :
                    currentProduct.id == 97?
                    <p className={data.classInfoEn}>
                    These Apartments for sale in installments in a residential investment project in Bağcılar-Istanbul/Turkey next to Metro Station are located on the Basın Ekspres road which connects the TEM-E80 Highway with E-5 highway and Atatürk Airport, there are also many important location surrounding the project like Mall of Istanbul, Atatürk Olympic Stadium, metro station, train station and many more.
                    <br/>
                    <br/>

                    Also this residential project is only 250 meters away from the new metro station which is currently under construction in front of the project.
                    <br/>
                    <br/>

                    The project is built on 76,800 square meters and includes 3 buildings, 488 residential units and many social facilities like shopping street, events area, sports facilities, library, kids club and many more.
                    <br/>
                    <br/>

                    This residential project also contains many smart and modern features like the smart home system which give you control over your home from your mobile phone to change the house temperature, lighting, shutdown electricity and water of the whole house, lock and unlock the doors, watch your guests through the site security cameras, summon the elevator and make video calls between apartment and the site management, there is also infrastructure for optic fibre internet and power efficient lights and systems among many others.
                    <br/>
                    <br/>

                    The project provides many apartments, houses and flats options including studios, one bedroom, two bedroom, three bedroom and four bedroom apartments, and these apartments include a smart design that will enable you to change the shape of your house through modular walls and add-ons,
                    <br/>
                    <br/>

                    Also, each apartment is assigned additional storage space, so you can store your extra possessions with confidence.
                    <br/>
                    <br/>

                    These Apartments for sale in installments in a residential investment project in Bağcılar-Istanbul/Turkey next to Metro Station are set to be delivered on march 2019.

                    </p>
                    :
                    currentProduct.id == 132?
                    <p className={data.classInfoEn}>
                    Ready to move in apartments for sale in installments in Bağcılar-Istanbul/Turkey on the Basın Ekspres Road with a charming view of the lake. Luxurious apartments with one bedroom, two bedrooms , three bedrooms or four bedrooms in different types and sizes.
<br/>
<br/>

The project is built on 55,000 square meters and consists of 7 buildings, two 19 and 29 floored buildings containing Residence apartments, two 7 floored buildings containing Loft apartments and two 27 and 31 floored towers containing Flats.

The project has a central location on the Basın Ekspres road which connects the TEM-E80 main road with E5 highway and Ataturk Airport, There are also a lot of important locations near the project including Mall of Istanbul, Atatürk Olympic Stadium, the metro station, the train station and many more.
<br/>
<br/>

The project contains 544 Residence apartments, 84 Loft apartments and 836 Tower apartments and many special features like a shopping mall within the project, a hotel, a cinema, 43,200 square meters of green spaces and social facilities among others.

The construction company was founded in 1966, since then it expanded from construction field to financing, tourism and energy with a staff of over 10,000 employees.
<br/>
<br/>

These apartments for sale in installments in Bağcılar-Istanbul/Turkey on the Basın Ekspres Road are finished and ready to move in.

                    </p>
                    :
                    currentProduct.id == 126?
                    <p className={data.classInfoEn}>
Investment Home-Office apartments for sale in instalments on the main road in Bağcılar-Istanbul/Turkey within a residential project located on the intersection of TEM-E80 Highway with the Basın Ekspres Road close to Mall of Istanbul, the train station, Ataturk Airport, shopping malls, the E5 Highway and many more.
<br/>
<br/>

The project is built on 9,500 square meters consisting of a 24-story tower with 273 residential units and 9 showrooms.
<br/>
<br/>
The project offers apartments, flats and home-offices with one bedroom or two bedrooms in different types and sizes with balconies and tall windows. The project also offers loft apartments with terraces.
<br/>
<br/>

The project has many unique features that includes an amazing Tri-facades architectural design, shops directly on the Basın Ekspres Road, a reception desk, a private garage for each apartment, open parking lot for guests, a fully equipped meeting room and more.
<br/>
<br/>

These Investment Home-Office apartments for sale in instalments on the main road in Bağcılar-Istanbul/Turkey are set to be completed at the end of 2018.

                    </p>
                    :
                    currentProduct.id == 143?
                    <p className={data.classInfoEn}>
Investment apartments overlooking the river for sale with installments in kagithane istanbul next to axis mall within an enormous housing project located in the heart of istanbul near taksim and maslak.
<br/>
<br/>
This project offers studios, apartments and houses with 1+1, 2+1, 3+1 ,4+1 with different areas and many options to select from, aslo some apartments has tarence and garden.
<br/>
This project has a big shopping street that provides everything you might need from pharmacies to hair salons, cafes and markets.
<br/>
<br/>
It also has studios for kids that offers parks with fresh air for playing to many entertainment activities.
<br/>
It also has different types of parks, gardens and aqua parks that covers 72% of the area of the project.
<br/>
<br/>
This project is set to finish on 2019 overlooking the river.
                    </p>
                    :
                    currentProduct.id == 144?
                    <p className={data.classInfoEn}>
Residential properties & apartments for sale in installments in Istanbul-Turkey located at a central location on the Basın Ekspres highway, which connects the TEM highway, E-5 highway and Ataturk airport. It is also within a walking distance of the metro station, the area is lively and surrounded by famous shopping centers like 212 power outlet mall and mall of Istanbul, as well as hospitals and several social and public facilities.

The project is being built on approximately 50,000 sqm of land, In the project which consists of two towers with a total of 503 residences, flats and homes which offers (1+1) one-bedroom, (2+1) two-bedrooms and (3+1) three-bedrooms apartment types.
<br/>
<br/>
This residential project offers a unique feature called (Fold-Home), which is a collection of social & recreational rooms as sky observation room, cinema and more to be utilized by the residence using a (pay-per-use) system, no payment is charged for an area you do not use or no fee is added to your subscription fee.
<br/>
<br/>
You can use Fold-home units, which can be utilized with cards defined for specific individuals, as private areas as a part of your house. When facilities suffer wear and tear and require repair works, money is not collected from anyone; this expense is compensated from depreciation.
<br/>
<br/>
These residential properties & apartments for sale in installments in Istanbul-Turkey are set to be delivered in December 2019.
                    </p>
                    :
                    currentProduct.id == 147?
                    <p className={data.classInfoEn}>
                    Investment apartments for sale with comfortable installments in Başakşehir - Istanbul / Turkey guaranteed by The Turkish government in an important location in the middle of the most important development projects in Istanbul, including Istanbul's new Airport, the health city of 8 specialized hospitals, the largest botanical garden in Europe, the Sultan Yavoz Selim Bridge, Kent, which is twice the size of Taksim Square .
                    <br/>
<br/>
The project is designed to be an integrated center of attraction that is supported by the Turkish government. It consists of a street surrounded by shops. The project divides into two sections,a huge semicircular square that includes the metro station, which will receive all the people coming to the famous Başakşehir. this residential project has 120 shops located under the residential buildings which provides many cafes and world famous brands, areas of relaxation include water basins, wooden floors, terraces and green spaces, a playground for watching the various entertainment, indoor pool light by natural light The sun, a sports center for practicing various kinds of sports and pilates, gardens and games for children are specially designed to ensure the safety of children and many other features.
<br/>
<br/>
The project consists of 615 units which has two bedrooms, three bedrooms, a lounge, four bedrooms, a hall, and even five-bedroom apartments with duplex apartments ranging from 106 square meters to 268 square meters. The apartments feature high ceilings, spacious rooms and balconies as well as enclosed balconies, a laundry room and a dressing room.
<br/>
<br/>
These apartments are to be completed for sale in the comfortable installments of Başak Shahir - Istanbul / Turkey with the Turkish government guarantee in 6 months
                    </p>
                    :
                    currentProduct.id == 148?
                    <p className={data.classInfoEn}>
Apartments with direct view of the sea for sale with interest-free government guarantee in Zeitenburno - Istanbul / Turkey

 In the Kazlıçeşme area, overlooking the Marmara Sea, near the E5 highway, Ataturk International Airport, metro station, metro station, train station and many other transportation routes.

This residential project has a unique location where the beach can be reached in a few minutes via a pedestrian bridge connecting the project directly to the beach and a 30 km coastal road.
<br/>
<br/>
The project was designed by the British architectural firm Chapman Taylor and has won more than 200 international awards.

The project is designed so that areas such as elevator openings, emergency stairs, social spaces, fire escape corridors, garbage rooms and mechanical floors are never included to the total square meters that you purchase, providing a price advantage in terms of net difference and total apartment area.

All apartments are equipped with a smart home system that can control lighting, curtains, air conditioners and floor heating via the touch control panel or remotely by phone. It also includes a video intercom system and the ability to watch surveillance camera recordings.
<br/>
<br/>
The project also includes a stone-paved square that will offer many cultural centers, high-end shops and restaurants, as well as many social and sports facilities.

These apartments are due to be completed with a direct view of the sea for sale without interest in Zeitenporno-Istanbul / Turkey in March 2019.
                    </p>
                    :
                    currentProduct.id == 101?
                    <p className={data.classInfoEn}>
Apartments for sale in Istanbul with installments in an investment residential project under construction with a beautiful design inspired by the Italian cities in Beshashheir - Istanbul / Turkey
<br/>
<br/>
 The project is characterized by a sophisticated design inspired by Italian cities
The project is also located near Lake Bahshashir, increasing the importance of its location in the region.
<br/>
<br/>
 It covers a total area of 475,000 square meters and consists of 8 buildings including 2,500 homes and a commercial center, as well as many social facilities and green spaces.

The project has many special features including shopping area including more than 100 shops, cafe and restaurant, health facilities such as swimming pools, sports and health centers, the latest building specifications as seismic resistance, external insulation of heat, sound and water, elevators with emergency systems, detection systems Smoke and fire extinguishing and many other features. The options available in this project offer you a new lifestyle. Modern life, convenient and charming view.
<br/>
<br/>
 The apartments are due to be completed in installments in a beautifully designed residential investment project inspired by the Italian cities of Bihashashir - Istanbul / Turkey at the end of 2019.
                    </p>
                    :
                    currentProduct.id == 119?
                    <p className={data.classInfoEn}>
Apartments are for sale near the schools and universities in Bashak Shahir - Istanbul / Turkey in an important location near the most important projects in Istanbul, including the third airport, the health city, which includes 8 specialized hospitals, the largest botanical garden in Europe, the bridge Sultan Yavuz Salim modern , Kent Square, which is twice the size of Taksim Square and others.
<br/>
<br/>
The residential project covers an area of 72,706 square meters, of which 80% is allocated for green spaces. It consists of 11 buildings, apartments, houses and houses with a total of 941, 27 shops and many social facilities.
<br/>
<br/>
The social facilities in the project were designed separately for men and women, including four indoor pools, a Turkish bath, a sauna, steam rooms and sports centers.
<br/>
<br/>
Other facilities include gardens and water basins, which include children's playgrounds, playgrounds for various types of sports, relaxation terraces, shopping malls and others. The project includes apartments with a bedroom, a lounge, two bedrooms, a lounge, three bedrooms and A lounge, four bedrooms, a lounge, five bedrooms and a lounge with large balconies and spacious rooms with multiple spaces and various options.
                    </p>

                    :
                    <p className={data.classInfoEn}>{currentProduct.description}</p>
                  }

                    {

                    currentProduct.id == 141?
                    <p className={data.classInfoAr}>شقق فاخرة استثمارية قيد انشاء للبيع في اسطنبول-اسنيورت يقع العقار الاستثماري بالقرب من طريق العام و خط المتروباص في اسطنبول-اسنيورت ٬ كما يقع بالقرب من العديد من المرافق الهامة مول توريوم للتسوق٬ مول مرمرا بارك للتسوق المدارس الحكومية و الخاصة و غيرها. كما يتم الأن إنشاء محطة مترو في منطقة العقار والتي سيتم الانتهاء منها في عام 2019 مما يعطي للمشروع قيمة استثمارية عقارية هامة. يمتد المشروع على مساحة 35,800 متر مربع و يتألف من بناء واحد و شقق, منازل و بيوت بعدد 165 و العديد من المرافق.يقدم المشروع خيارات معيشة على شكل شقق بغرفة نوم و صالة٬ غرفتين نوم و صالة أو ثلاث غرف نوم وصاله و اربع غرف وصاله بمساحات من 45 متر مربع و لغاية 252متر مربع جميعها ستسلم مع مطبخ جاهز٬ نظام انتركوم فيديو و أبواب حديدية مع جهاز إنذار. يتضمن المشروع على العديد من الميزات الخاصة منها نادي للأطفال مليئ بساحات اللعب و الألعاب٬ كراج مغلق أمن على مدار اليوم٬ مساحات خضراء من مساحة المشروع والعديد غيرها. هذه الشقق الاستثمارية قيد انشاء للبيع بالتقسيط في اسطنبول -اسنيورت و من المقرر أن يكتمل المشروع في شهر 6 عام 2019</p>
                    :
                    currentProduct.id == 126?
                    <p className={data.classInfoAr}>
مكاتب وشقق منزلية استثمارية للبيع بالتقسيط في اسطنبول بل القرب من الطريق الرئيسي في باغجلار-اسطنبول / تركيا ضمن مشروع سكني يقع على تقاطع الطريق العام تيم (TEM-E80) مع طريق باسن اكسبرس بالقرب من مول اسطنبول, محطة القطار, مطار أتاتورك, مراكز التسوق, الطريق العام أي-5 (E5) وغيرها الكثير.
<br/>
<br/>

تم بناء المشروع على مساحة 9,500 متر مربع مكون من برج مؤلف من 24 طابق, 273 وحدة سكنية و 9 غرف للعرض.
<br/>
<br/>

يتوفر في المشروع شقق, بيوت و مكاتب منزلية ذات غرفة نوم واحدة أو غرفتين نوم بأنواع و مساحات مختلفة مع شرفات ونوافذ طويلة. كما يقدم المشروع شققا علوية (lofts) مع تراسات.
<br/>
<br/>

يتميز المشروع بالعديد من المميزات الفريدة منها تصميم معماري ثلاثي الوجوه, محلات تجارية مباشرة على طريق باسن اكسبرس, مكتب استقبال, كراج خاص لكل شقة, موقف سيارات مفتوح للضيوف, غرفة اجتماعات مجهزة بالكامل و العديد غيرها.
<br/>
<br/>

من المقرر اكتمال هذه المكاتب المنزلية الاستثمارية للبيع بالتقسيط على الطريق الرئيسي في باغجلار-اسطنبول/تركيا في نهاية عام 2018.

                    </p>
                    :
                    currentProduct.id == 125?
                    <p className={data.classInfoAr}>
شقق مكتبية استثمارية للبيع بالتقسيط في كوتشوك تشكمجة-اسطنبول/تركيا ضمن مشروع سكني يمتد على مساحة 6,400 متر مربع و يتألف من برج مكون من 18 طابقا ذو ثلاث جوانب, تصميم معماري فريد و شرفات مصممة بشكل جميل. يحتوي البرج على 5 صالات عرض و شقق, منازل, بيوت و شقق مكتبية بعدد 149 منها ذات غرفة نوم واحدة أو غرفتين نوم في بمساحات متعددة و خيارات متنوعة.
<br/>
<br/>

يقدم هذا المشروع مفهوم الشقق المكتبية بتصميمه الفريد الذي يوفر نوافذ طويلة وغرف فسيحة تجعله مثاليا لاجتماعات العمل، كما يوفر موقف خارجي للسيارات للضيوف وموقف سيارات داخلي مخصص لكل شقة.
<br/>
<br/>

المشروع له موقع مركزي بالقرب من بحيرة كوتشوك تشكمجة, طريق تيم الرئيسي , مول اسطنبول, محطة القطار, طريق باسن اكسبرس, مطار أتاتورك والعديد من المواقع الهامة الأخرى.
<br/>
<br/>

من المقرر الانتهاء من الشقق المكتبية الاستثمارية للبيع بالتقسيط في كوتشوك تشكمجة-اسطنبول/تركيا في نهاية الشهر السابع عام 2018.
                     </p>
                    :
                    currentProduct.id == 136?
                    <p className={data.classInfoAr}>
                     الواصل بين طريق العام بالقرب من محطة المتروباص, مجمعات التسوق, بازار كبير, جامعة اسنيورت و الطريق السريع E5.  تم بناء المشروع على مساحة 56,880 متر مربع, مكون من 25 بناء منها 11 بناء مرتفع تحتوي على 1,424 وحدة سكنية منها شقق, منازل و بيوت مع غرفة نوم واحدة, غرفتين نوم, ثلاث غرف نوم أو أربع غرف نوم.  يتضمن المشروع على العديد من الميزات مثل منطقة لعب للأطفال بمساحة 1,400 متر مربع, مسار للمشي بطول 2 كم, مضمار لركوب الدراجات بطول 1 كم, سينما صغيرة, مكتبة, ملاعب و مرافق رياضية, مساحات خضراء, منطقة للتسوق و غيرها الكثير.  هذه الشقق للبيع بالتقسيط قرب محطة المترو الجديدة في اسنيورت-اسطنبول/تركيا كاملة و جاهزة للسكن
                    </p>
                    :
                    currentProduct.id == 101?
                    <p className={data.classInfoAr}>

شقق للبيع في اسطنبول بالتقسيط في مشروع سكني استثماري قيد انشاء بتصميم جميل مستوحى من المدن الإيطالية في بهشاشهير-اسطنبول / تركيا
<br/>
<br/>

يتميز المشروع بتصميم راقي مستوحى من المدن الإيطالية
كما و يتواجد المشروع بالقرب من بحيرة بهشاشهير مما يزيد من أهمية موقعه في المنطقة.
<br/>
<br/>

يمتد على مساحة كلية قدرها 475,000 متر مربع و يتألف من 8 أبنية تتضمن 2,500 منزل و محل تجاري بالإضافة إلى العديد من المرافق الاجتماعية و المساحات الخضراء.

يتضمن المشروع على العديد من الميزات الخاصة منها منطقة للتسوق تتضمن أكثر من 100 متجر٬ مقهى و مطعم٬ مرافق صحية كالمسابح و المراكز الرياضية و الصحية٬ أحدث مواصفات البناء كمقاومة الزلازل٬ العزل الخارجي للحرارة٬ الصوت و الماء٬ مصاعد مزودة بإنظمة طوارئ٬ أنظمة لكشف الدخان و الحرائق و إخمادها و العديد غيرها من الميزات. الخيارات المتوفرة في هذا المشروع تتيح لكم نمط حياة جديد. حياة عصرية, ملائمة و بإطلالة ساحرة.
<br/>
<br/>

من المقرر انتهاء هذه الشقق للبيع بالتقسيط في مشروع سكني استثماري بتصميم جميل مستوحى من المدن الإيطالية في بهشاشهير-اسطنبول/تركيا في نهاية عام 2019.
                    </p>
                    :
                    currentProduct.id == 127?
                    <p className={data.classInfoAr}>
                      (TEM/E-80)شقق للبيع بالتقسيط في اسطنبول ضمن مجمع بضمان الحكومة  في غازي عثمان باشا-اسطنبول / تركيا مباشرة بجانب الطريق السريع تيم ،
<br/>
<br/>
تم تطوير المشروع الاستثماري على مساحة 18,621 متر مربع و التي تتكون من 6 مباني، و تحتوي على 612 شقة و منزل. مباني الحديقة تطل على المنطقة الخضراء ذات المناظر الخلابة للمشروع، مع خيارات شقة 1+2 و شقة 1+3 لك و لعائلتك. أما المباني ذات مناظر الطبيعة التي تقع على جانب السوق فتتضمن خيارات شقة 1+2 و شقة 1+3، و أيضا مواقف مغطاة للسيارات.
<br/>
<br/>
يحتوي المشروع السكني على شارع للتسوق يضم 17 محل تجاري و الذي سيضيف قيمة كبيرة ليس فقط للمشروع و لكن أيضا للمنطقة مع العشرات من المحلات التجارية، المقاهي و المطاعم على طول الشارع بجانب المشروع.

هنالك مرافق اجتماعية متنوعة مع العديد من الرياضات، خيارات الاسترخاء من تراسات مفتوحة و مغلقة، مسابح مغطاة منفصلة للنساء و الرجال مع مقهى و يوفر المشروع خدمة الأمن على مدار الساعة حتى تتمكن من التمتع بوقتك بسلامة.
<br/>
<br/>
من المقرر أن تكتمل هذه الشقق للبيع بالتقسيط بقرب الطريق السريع تيم ضمن مجمع في غازي عثمان باشا-اسطنبول/تركيا بحلول الشهر السادس لعام 2019.
                    </p>
                    :
                    currentProduct.id == 115?
                    <p className={data.classInfoAr}>
                     شقق للبيع في مجمع سكني مضمون من قبل الحكومة التركية في بهشة شهير/ اسطنبول / تركيا في حي هوشديره الذي تم التخطيط له مع البنية التحتية و الخدمات المتطورة. يقع المشروع بالقرب من الطريق السريع تيم TEM الذي يسهل التنقل إلى العديد من المشاريع الهامة مثل المطار الثالث حيث يقع المركز الاستيطاني الجديد لمدينة اسطنبول، و ذلك بفضل قربه من المطار الثالث، مشروع قناة اسطنبول، طريق شمال مرمرة السريع و الجسر الثالث.يمكنك أيضًا استخدام خط مترو الأنفاق الذي سيصبح في الخدمة قريبًا، بالإضافة إلى خدمات النقل العام الأخرى الموجودة حاليًا بالقرب من المشروع و التي ستجعل حياتك أكثر سهولة من حيث التنقل في وقت قصير.
<br/>
<br/>
تم تصميم المشروع مع التركيز على المناظر الطبيعية بشكل خاص للغاية ، حيث يتم استخدام المساحات الخضراء بحيث يمكنك مشاهدة (حياة بارك) و هي حديقة المدينة العملاقة في اسطنبول ، و التي تبلغ مساحتها حوالي 142000 متر مربع . تمتع في هذه الحديقة مع البرك المائية، مسارات المشي لمسافات طويلة و مناطق نزهة.

يمتد هذا المشروع المكون من 13 وحدة على مساحة 41,000 متر مربع ، ويتراوح ارتفاع الشقق بين 3 و حتى 13 طابق. يحتوي المشروع على 1095 وحدة سكنية و 81 وحدة تجارية و يتم توزيع المناطق التجارية في الأسفل و المساكن في الأعلى. يقدم المشروع مزايا الاختيار بين مجموعة متنوعة من خيارات الشقق المتاحة بمساحات مختلفة مثل شقق 1+1 ، 2+1، 3+1 و 4+1.
<br/>
<br/>
يقدم المشروع العديد من الخدمات لتسهيل حياتك كالتعليم، الصحة، الرياضة،التسوق، مرافق النقل البديلة، المناطق الاجتماعية الآمنة، المطاعم ، المقاهي و المحلات التجارية. سوف تستفيد من موقف السيارات المغلق بشكل آمن و مريح دون البحث عن موقف للسيارات. و نظرًا لأن المشروع مغلق أمام حركة المرور داخل الموقع ، فإن أطفالك سيستمتعون باللعب بأمان و بحرية داخل الموقع.

هذه الشقق للبيع في مجمع سكني مضمونة من قبل الحكومة التركية في بهجة شهير - اسطنبول / تركيا و من المقرر تسليمها في سبتمبر 2020.
                    </p>
                    :
                    currentProduct.id == 132?
                    <p className={data.classInfoAr}>
شقق فاخرة جاهزة للسكن للبيع بالتقسيط في اسطنبول / تركيا على طريق باسن اكسبرس و بإطلالة ساحرة على البحيرة. شقق فخمة بنوع غرفة نوم واحدة, غرفتي نوم, ثلاث غرف نوم أو أربع غرف نوم ذات مساحات متعددة و خيارات متنوعة.

يمتد المشروع على مساحة كلية تبلغ 55,000 متر مربع و يتألف من 7 أبنية منها بنائين سكنيين ذات 19 و 29 طابق٬ بنائي شقق فخمة ذات 7 طوابق٬ بالإضافة إلى برجين ذو 31 طابق و برج 27 طابق.
<br/>
<br/>
للمشروع موقع مركزي على طريق باسن اكسبرس الذي يصل بين طريق  الرئيسي مع طريق  العام و مطار أتاتورك٬ بالإضافة إلى تواجد العديد من المراكز الهامة في المناطق المحيطة بالمشروع منها مول اسطنبول٬ استاديوم أتاتورك الأولومبي٬ محطة المترو٬ محطة القطار و غيرها.

يتضمن المشروع 544 شقة سكنية٬ 84 شقة و 836 شقة برجية بالإضافة إلى العديد من الميزات الهامة كمجمع للتسوق داخل المشروع٬ فندق٬ سينما٬ 43,200 متر مربع من المساحات الخضراء و المرافق الاجتماعية و العديد غيرها.
<br/>
<br/>
تم تأسيس الشركة المنشأة عام 1966 حيث تفرعت من مجال الإنشاء إلى خمس مجالات رئيسية في تركيا و العالم منها التمويل٬ السياحة و الطاقة بطاقم يتعدى 10,000 موظف.

هذه الشقق للبيع بالتقسيط في باغجلار-اسطنبول / تركيا على طريق باسن اكسبرس كاملة و جاهزة للسكن.
                    </p>
                    :
                    currentProduct.id == 100?
                    <p className={data.classInfoAr}>
شقق للبيع في اسطنبول بالتقسيط قرب محطة المترو مضمونة من قبل الحكومة التركية في باشاك شهير-اسطنبول/تركيا, بالقرب من أهم المشاريع التطويرية التي تشهدها اسطنبول و منها مطار اسطنبول الثالث, المدينة الصحية المؤلفة من 8 مشافي متخصصة, أكبر حديقة نباتية في أوروبا, جسر السلطان يافوز سليم, ميدان كينت و الذي تعادل مساحته ضعف مساحة ساحة تقسيم, وادي بشاك شهير و غيرها.

يتضمن هذا المشروع السكني على العديد من الميزات منها ثلاث مجمعات اجتماعية تتضمن مرافق مختلفة منفصلة للرجال و النساء, مسار للمشي بطول 1.4 كم محاط بالمحلات, المطاعم, القاهي و الأحواض المائية, ملاعب رياضية, مرافق صحية, حدائق, محلات تجارية و غيرها.

يتضمن المشروع على شقق, منازل و بيوت ذات غرفتين نوم و صالة, ثلاث غرف نوم و صالة أو أربع غرف نوم و صالة و يتألف من 3 أقسام,
<br/>
<br/>
القسم الأول هو عبارة عن دائرة من ثلاث أنواع مختلفة من الأبنية تتضمن مرافق اجتماعية, مساحات خضراء و ملاعب رياضية بالإضافة إلى وجود مرافق منفصلة للرجال و النساء.

القسم الثاني يتألف من 10 أبنية بأربع أنواع مختلفة تتضمن مناطق رياضية خارجية, أحواض مائية و مرافق منفصلة للرجال و النساء.

القسم الثالث هو عبار عن مجمع مفتوع للتسوق يتضمن 110 وحدات تجارية مليئة بالماركات العالمية, المطاعم و المقاهي لتلبية جميع الاحتياجات.
<br/>
<br/>
من المقرر انتهاء هذه الشقق للبيع بالتقسيط قرب محطة المترو مضمونة من قبل الحكومة التركية في باشاك شهير-اسطنبول/تركيا في نهاية شهر 6 عام 2019.

يتم الآن بناء المرحلة الجديدة و تتألف من 140 شقة و منزل، تعتبر مثالية للاستخدام بشكل مكاتب منزلية أو شقق تجارية. و تتوفر بأنواع شقة مع غرفة نوم واحدة أو شقة مع غرفتين نوم، تم تصميم البناء بمظهر معماري مميز تماما مع طبقات من المدرجات الزجاجية تطل على الوادي.
<br/>
<br/>
تبلغ مساحات الشقق ما بين 76 و 252 مترا مربعا، بعض الشقق تحتوي على تراس كبير بمساحة 100 متر مربع.

هذه المرحلة من المشروع سوف يتم تسليمها بالشهر الثاني عشر لعام 2019.
                    </p>
                    :

                    currentProduct.id == 15?
                      <p className={data.classInfoAr}>
                       شقق فخمة جاهزة للسكن للبيع بالتقسيط في عثمان غازي-بورصة/تركيا ضمن مجمع سكني تم تصميمه ليكون أحد أضخم مشاريع المنطقة و مركز جذب هام فيها حيث يتسع ل 8,000 شخص.

يرتفع المشروع 100 متر عن سطح البحر ممتدا على مساحة كلية قدرها 232,000 متر مربع و يتضمن على العديد من الميزات منها:
<br/>
<br/>
• مجمع رياضي يتضمن مضمار للمشي و الركض بطول 2,300 متر, مسابح داخلية و خارجية, مجمع للتنس, ملاعب رياضية, حديقة للتزلج, حائط للتسلق, ألعاب أطفال و غيرها.
<br/>
<br/>
• مساحات خضراء تتضمن بحيرة بمساحة 26,000 متر مربع, أقنية مائية للوصل بين المنازل, أحواض مائية, جزر منفصلة, حدائق تتضمن أشجار الغار, الخزامى, الماغنوليا, البلوط, الصنوبر, و غيرها.
<br/>
<br/>
• مرافق اجتماعية تتضمن جزيرة خاصة للاحتفالات, روضة للأطفال, تراسات للاسترخاء, مطاعم, مقاهي, نادي اجتماعي, باصات نقل مجانية للسكان, كراج داخلي و غيرها.
<br/>
<br/>
يتوفر في المشروع العديد من خيارات المعيشة و التي تزيد عن 22 خيار منها الفيلا الفخمة, الشقق البرجية, المنازل الراقية ضمن الأبنية النخفضة و غيرها.

تمتلك الشركة المنشأة خبرة تزيد عن 41 عاما و قد احتلت المرتبة الثانية عام 2010 بقائمة أكثر الشركات الإعمارية طلبا حيث تمتلك قيمة سوقية تبلغ 594 مليون ليرة تركية مما جعلها من أشهر الشركات الموثوقة في تركيا.

هذه الشقق الفخمة للبيع بالتقسيط في عثمان غازي-بورصة كاملة و جاهزة للسكن
                      </p>
                      :
                      currentProduct.id == 139?
                      <p className={data.classInfoAr}>
شقق استثمارية للبيع بالتقسيط الطويل بضمان الحكومة التركية في أفجلار-اسطنبول/تركيا بالقرب من قناة اسطنبول التي يتم العمل عليها حاليا و من محطة المترو الجديدة التي سيتم تسليمها في عام 2019 مما يعطي للمشروع قيمة استثمارية عالية.
<br/>
<br/>
يمتد هذا المشروع السكني على مساحة كلية 448,726 متر مربع منها 80% مخصصة للمساحات الخضراء و يتضمن على 33 محل تجاري و 1,849 وحدة سكنية منها شقق, منازل و بيوت ذات غرفة نوم واحدة, غرفتين نوم, ثلاث غرف نوم أو أربع غرف نوم و صالة.
<br/>
<br/>
يتضمن المشروع على العديد من الميزات منها ملعبين للتنس, ألعاب للأطفال, مرافق رياضية, حدائق خاصة مع أنظمة ري تلقائية, عزل حراري, مولد للكهرباء بسعة 100% لجميع المناطق العامة, نظام اتصال فيديو, مداخل مؤمنة, محطات شحن للسيارات الكهربائية, حضانة للأطفال و العديد غيرها.
<br/>
<br/>
من المقرر تسليم هذه الشقق الاستثمارية للبيع بالتقسيط الطويل بضمان الحكومة التركية في أفجلار-اسطنبول/تركيا في شهر 8 عام 2018.
                      </p>
                      :
                      currentProduct.id == 118?
                      <p className={data.classInfoAr}>
شقق استثمارية للبيع بالتقسيط بالقرب من البحر في بيليك دوزو-اسطنبول / تركيا
ضمن مشروع سكني يتم بناؤه قريباً نسبيا من الشاطئ، و يحتوي المشروع على 6 أبنية سكنية تم إنشاؤها على مساحة 120,000متر مربع و تبلغ المساحات الخضراء 70% منها. <br/>
<br/> يحتوي المشروع على 442 شقة و منزل مع مجموعة متنوعة من الشقق مثل غرفتين نوم، ثلاث غرف نوم و أربع غرف نوم. جميع الشقق تحتوي على بالكون ذات مساحات تبلغ حتى 22 متر مربع و بعض الشقق في المشروع تتمتع بإطلالة على البحر من البالكونات الواسعة. <br/>
<br/> هناك العديد من المرافق الاجتماعية و الترفيهية المدرجة في هذا المشروع جنبا إلى جنب مع خدمة الأمن على مدار الساعة. بالإضافة إلى 3 طوابق تحت الأرض مخصصة كمواقف مغلقة للسيارات، 2 منشأة رياضية للرجال و للنساء، حضانة للأطفال، مكتبة دراسية و معرض تجاري حيث يمكنك التسوق في 99 من المحلات التجارية المتضمنة في المشروع أو الذهاب إلى المولات القريبة مثل ميغروس و مرمرة بارك مول. <br/>
<br/> الجدير بالذكر أن المشروع بالقرب من المارينا حيث يمكن استخدام تاكسي البحر و التنقل بسرعة و سهولة إلى وسط المدينة. و أخيراً، سيتم افتتاح خط مترو جديد في المنطقة في عام 2019 و الذي يتم إنشاؤه حالياً.  من المقرر تسليم هذه الشقق الاستثمارية للبيع بالتقسيط بالقرب من البحر في بيليك دوزو-اسطنبول / تركيا في الشهر السادس لعام 2019.
                      </p>
                    :
                    currentProduct.id == 11?
                    <p className={data.classInfoAr}>
                     شقق فاخرة و فلل فخمة بإطلالة بحرية مباشرة للبيع بالتقسيط في بيليك دوزو- اسطنبول/تركيا حيث الشقق, المنازل و البيوت متوفرة بنوع غرفة و صالة٬ غرفتين و صالة٬ ثلاث غرف و صالة أو أربع غرف و صالة و الفلل الطابقية متوفرة بخمس أنواع مختلفة ذات ميزات فخمة كمصعد الداخلي٬ مسبح خاص٬ كراج للسيارات و غيرها, جميعها ذات إطلالات ساحرة على البحر و الطبيعة.

تخيل أن يكون كل شيء تحتاجه للحياة٬ العمل و الاستمتاع على عتبة منزلك. تخيل الرمال الذهبية٬ البحر الصافي و جميع المرافق كالمارينا٬ مجمع التسوق٬ المدارس٬ المشافي٬ المقاهي و المطاعم البحرية٬ الرياضات البحرية٬ نادي الخيول و غيرها العديد في أضخم مشاريع الطرف الأوروبي و الذي ستنتهي جميع مراحله في عام 2021.
<br/>
<br/>
يمتد المشروع الكلي على أرض مساحتها 1,200 فدان حيث تلتقي الطبيعة بالبحر بالقرب من مارينا اسطنبول متضمناً 5,000 شقة, منزل و بيت بالإضافة إلى 330 فيلا.

لقد تم تأسيس الشركة المنشأة للمشروع عام 1979 بهدف إنشاء أرقى و أفخم المشاريع السكنية٬ المباني المكتبية و مجمعات التسوق و التي وصلت إلى 33 مشروع و خمس مجمعات تسوق حائزة على جوائز عالمية.
<br/>
<br/>
هنا يوجد شقق عقارية فاخرة و فلل فخمة بإطلالة بحرية مباشرة جاهزة وقيد انشاء للبيع بالتقسيط في بيليك دوزو - اسطنبول / تركيا
                    </p>
                      :
                      currentProduct.id == 131?
                      <p className={data.classInfoAr}>
شقق للبيع بالقرب من ميدان اسنيورت ضمن مجمع في اسطنبول/تركيا و التي يجري بناؤها على مساحة 310,000 متر مربع. و قد تم تصميم المشروع الذي يتكون من 7 أبنية تضم 2,550 مسكنا بأنواع كثيرة مثل شقق استوديو (1+0)، شقق غرفة و صالة (1+1)، شقق مع غرفتين نوم (2+1) و شقق مع ثلاث غرف نوم (3+1).<br/>
<br/>
تم إنشاء شارع تجاري تحت اسم (جادة اسطنبول) ضمن المشروع و الذي يتكون من 59 متجرا في قلب هذا المشروع الفريد، ليوفر لكم عدد من المحلات التجارية الراقية.<br/>
<br/>
من تركيبات الديكور إلى الأجهزة المضمنة، كل شيء في مطبخ شقتك هو ذو جودة عالية و حديثة. ناهيك عن المرافق الترفيهية و الاجتماعية المتوفرة كقاعة سينما مجهزة بأحدث التكنولوجيا، المرافق الرياضية تكملها بار الفيتامين الذي يقدم مختلف كوكتيلات الفاكهة و المرطبات الصحية.و هناك أيضا نادي خاص للأطفال جنبا إلى جنب مع الحدائق و الملاعب، كل ذلك في مجتمع آمن و مخدم.
                      </p>
                      :
                      currentProduct.id == 97?
                      <p className={data.classInfoAr}>
هذه الشقق الفاخرة للبيع بمشروع سكني استثماري في باغجلار-اسطنبول / تركيا بجانب محطة المترو تقع على طريق باسن اكسبرس الذي يصل بين طريق (تيم | أي 80) الرئيسي مع طريق (أي 5 ) العام و مطار أتاتورك٬ بالإضافة إلى تواجد العديد من المراكز الهامة في المناطق المحيطة بالمشروع منها مول اسطنبول٬ استاديوم أتاتورك الأولومبي٬ محطة المترو٬ محطة القطار و غيرها.
<br/>

<br/>
كما تبعد محطة المترو الجديدة و التي يتم إنشاءها حاليا مقابل المشروع مسافة 250 متر عن المشروع.

يمتد المشروع على مساحة 76,800 متر مربع و يتضمن 3 أبنية٬ شقق, منازل و بيوت بعدد 488 و العديد من المرافق الإجتماعية منها شارع للتسوق٬ منطقة للاحتفالات٬ مرافق رياضية٬ مكتبة٬ نادي للأطفال و العديد غيرها.
<br/>

<br/>
كما يتضمن المشروع على العديد من الميزات الذكية و الحديثة منها نظام المنزل الذكي الذي يمكن من التحكم بالمنزل عن بعد بواسطة الهاتف الخليوي مثل تعديل درجة حرارة المنزل٬ الإضاءة٬ إغلاق الماء و الكهرباء عن المنزل بالكامل٬ فتح و إغلاق الأبواب٬ رؤية الضيوف عن طريق الكاميرات٬ طلب المصعد عن طريق الهاتف٬ تواجد بنية تحتية جاهزة للانترنت الضوئي٬ اتصال فيديو بين الشقق و إدارة المشروع٬ إضاءة و أنظمة موفرة للطاقة و العديد غيرها.
<br/>

<br/>
يتوافر في المشروع شقق بأنواع عديدة متضمنة شقق الاستديوهات, غرفة نوم و صالة, غرفتين نوم و صالة, ثلاث غرف و صالة و شقق أربع غرف و صالة٬ و تتميز هذه الشقق بتصميم ذكي قابل للتعديل بواسطة جدران متحركة و ملحقات قابلة للطوي٬
<br/>

<br/>
كما يخصص لكل شقة مساحة تخزين خاصة لتخزين أي ممتلكات بأمان و خصوصية.
<br/>

<br/>
من المقرر تسليم هذه الشقق للبيع بمشروع سكني استثماري في باغجلار-اسطنبول/تركيا بجانب محطة المترو في عام 2019.
                      </p>
                      :
                      currentProduct.id == 138?
                      <p className={data.classInfoAr}>
تقع هذه الشقق الاستثمارية بإطلالة مفتوحة على الطبيعة للبيع بالتقسيط في اسبارتكولا / أفجلار-اسطنبول / تركيا بالقرب من (طريق تيم | أي 80) الرئيسي٬ و من أهم ميزات المشروع كونه مضمون٬ مكفول و مدعوم من قبل الحكومة التركية.
<br/>
<br/>

كما يتم الأن إنشاء محطة مترو في منطقة المشروع و التي ستكون جاهزة للاستعمال في عام 2020.
<br/>
<br/>

يقدم لكم المشروع شقق, منازل و بيوت فخمة ذات تصاميم رائعة و خيارات عديدة ذات غرفتين نوم و صالة, ثلاث غرف نوم و صالة و أربع غرف نوم و صالة بمساحات متعددة و خيارات متنوعة.
<br/>
<br/>

لهذه الشقق الاستثمارية بإطلالة مفتوحة على الطبيعة للبيع بالتقسيط في أفجلار-اسطنبول/تركيا إطلالة رائعة و مفتوحة على الطبيعة بسبب تواجد المشروع بالقرب من موقع أثري بمساحة 380,000 متر مربع مما يمنع إنشاء أي بناء أخر في المنطقة مما يضمن بقاء الإطلالة مفتوحة.
<br/>
<br/>

يمتد المشروع على مساحة قدرها 41,168 متر مربع و يتألف من 10 أبنية تتضمن 724 وحدة سكنية٬ منطقة للتسوق تتضمن 52 محل تجاري٬ كراج مغلق للسيارات٬ أحواض مائية و حدائق منسقة تمتد على مساحة 6,000 متر مربع٬ مسبح داخلي بالإضافة إلى العديد من المرافق الاجتماعية.
<br/>
<br/>

من المقرر انتهاء المشروع في نهاية عام 2019.

                      </p>
                      :
                      currentProduct.id == 41?
                      <p className={data.classInfoAr}>
منازل, بيوت و شقق جاهزة للسكن للبيع في أفجلار  بضمان الحكومة التركية ضمن مشروع سكني يقع في المنطقة المقابلة لبهشاشهير  في اسطنبول الأوروبية على طريق (تيم | أي 80) الرئيسي عند تقاطع عدة طرق منها المؤدي إلى طريق E5 العام٬ و من أهم ميزات المشروع كونه مضمون٬ مكفول و مدعوم من قبل الحكومة التركية.
<br/>
<br/>

يقدم لكم المشروع شقق فخمة ذات تصاميم رائعة بخيارات تتضمن شقق غرفة نوم و صالة, شقق غرفتين نوم و صالة, شقق ثلاث غرف نوم و صالة و شقق أربع غرف نوم و صالة ذات مساحات متعددة و خيارات متنوعة.
<br/>
<br/>

لهذه الشقق الجاهزة للسكن للبيع بالتقسيط في أفجلار-اسطنبول/تركيا بضمان الحكومة التركية إطلالة رائعة و مفتوحة على بحيرة كتشك اتشكمجة  أو على الطبيعة٬ كما تتوافر لبعض الشقق إطلالة على البحر.
<br/>
<br/>

يمتد المشروع على مساحة قدرها 95,000 متر مربع و يتألف من 10 أبنية تتضمن 1,431 شقة, منزل و بيت٬ شارع تسوق بطول 300 متر يحتوي 40 محل تجاري على مساحة 7,000 متر مربع٬ كراج للسيارات بسعة كلية 2,800 سيارة٬ أحواض مائية و حدائق منسقة بالإضافة إلى العديد من المرافق الاجتماعية.
<br/>
<br/>

لقد تم تأسيس الشركة المنشأة عام 1987 بهدف تقديم خدمات احترافية في مجال الإنشاء٬ و قد اكتسبت الشركة خبرة كبيرة و تفرعت إلى عدة مجالات أخرى في الإعمار كالمشاريع السكنية٬ المصانع٬ المدارس٬ المشافي٬ المطارات٬ طرق النقل٬ مجمعات التسوق و غيرها.
<br/>
<br/>

هذه الشقق العقارية للبيع بالتقسيط في أفجلار-اسطنبول / تركيا بضمان الحكومة التركية كاملة و جاهزة للسكن.

                      </p>
                      :
                      currentProduct.id == 143?
                      <p className={data.classInfoAr}>
شقق استثمارية في اسطنبول مطلة على النهر للبيع بالتقسيط في كاغيتهانه-اسطنبول / تركيا جانب مول أكسس ضمن مشروع سكني يقع على نهر ساداباد في موقع مركزي بالقرب من مراكز التسوق, الجامعات, المستشفيات, وسائل النقل العام و العديد غيرها.
<br/>
<br/>
يقدم هذا المشروع السكني استوديوهات, شقق, منازل و بيوت ذات غرفة نوم و صالة, غرفتي نوم و صالة, ثلاث غرف نوم و صالة أو أربع غرف نوم و صالة بمساحات متعددة و خيارات متنوعة مزودة بنظام نوافذ كبيرة بالإضافة إلى تضمن بعضها على حديقة أو تراس.
<br/>
<br/>
يشمل المشروع على شارع للتسوق الذي يوفر كل شيء من الصيدليات إلى صالونات تصفيف الشعر، من المقاهي إلى المتاجر الفخمة.
<br/>
<br/>
كما يتضمن على استوديوهات للأطفال و التي سوف تقدم كل شيء من الملاعب في الهواء الطلق إلى غرف الهوايات مع العديد من الأنشطة الملونة و الترفيهية.

بالإضافة إلى أنه يتضمن على أنواع مختلفة من الحدائق, الأحواض المائية و الأنشطة الخارجية التي تغطي 72٪ من مساحة المشروع.

من المقرر انتهاء هذه الشقق الاستثمارية المطلة على النهر للبيع بالتقسيط في كاغيتهانه-اسطنبول/تركيا جانب مول أكسس في الشهر الرابع من عام 2019.
                      </p>
                      :
                      currentProduct.id == 140?
                      <p className={data.classInfoAr}>
شقق للبيع بالتقسيط في مشروع سكني استثماري بتصميم جميل بجانب مول أكبتي في بهشاشهير-اسطنبول/تركيا العقاريه  و سيتم الانتهاء من محطة الميترو و التي يتم إنشائها في منطقة المشروع في نهاية عام 2018٬ كما و يتواجد المشروع بالقرب من بحيرة بهشاشهير مما يزيد من أهمية موقعه في المنطقة
<br/>
<br/>
يتميز المشروع بتصميم راقي و يمتد على مساحة كلية قدرها75.000 متر مربع و يتألف من 5 ابنيه تتضمن 459 منزل و محل تجاري
بالإضافة إلى العديد من المرافق الاجتماعية و المساحات الخضراء.
الخيارات المتوفرة في هذا المشروع تتيح لكم نمط حياة جديد. حياة عصرية ملائمة و بإطلالة ساحرة. شقق فخمة واسعة ذات غرفة و صالة, غرفتين و صالة, ثلاث غرف و صالة من 65 متر مربع و حتى 176 متر مربع بمساحات متعددة و خيارات متنوعة
<br/>
<br/>
من المقرر انتهاء هذه الشقق للبيع بالتقسيط في مشروع سكني استثماري بتصميم جميل بجانب مول أكبتي في بهشاشهير-اسطنبول في نهاية اول عام 2019
                      </p>

                      :
                      currentProduct.id == 128?
                      <p className={data.classInfoAr}>
شقق عقاريه استثماريه فاخره قيد الانشاء وبضمان الحكومه في قلب اسطنبول العقاريه الجديد والمميز الذي يقع في منطقة ايوب الاستثماريه وتم
 تصميمه من قبل المكتب المعماري الحائز على جائزة التاغو هذا المشروع يعكس الملمس التاريخي وجماليات اسطنبول يجمع مع
 العمارةالعثمانية والعمارة الحديثة ويتم وضع وفقا للعرض الذهبي وشبه الجزيرة مناط المعيشة مع شرفات المطله على جامع سلطان
 ايوب وبحر الخليج وجسر البوسفور ويحيط بالمشروع معدات اجتماعية وتقنية كاملة مع المدرسة والحديقة والمسجد الذي بني في داخل
 المشروع من البدايه
<br/>
<br/>
الخيارات المتوفرة في هذا المشروع تتيح لكم نمط حياة جديد حياة عصرية, ملائمة و بإطلالة ساحرة. شقق فخمة واسعة ذات غرفة و
 صالة, غرفتين و صالة, ثلاث غرف و صالة, أربع غرف و صالة و حتى شقق ذات خمس غرف و صالة بمساحات متعددة و خيارات
 متنوعة
<br/>
<br/>
من المقرر انتهاء هذه شقق عقاريه استثماريه فاخره قيد الانشاء وبضمان الحكومه في قلب اسطنبول/تركيا في نهاية عام 2019.
                      </p>
                      :
                      currentProduct.id == 113?
                      <p className={data.classInfoAr}>
                 شقق للبيع بمجمع سكني استثماري قرب مركز توياب للمعارض في -اسطنبول و يقع المجمع بمكان قريب نسبيا من الطريق السريع  الذي يعد أحد الطرق الرئيسية في مدينة اسطنبول، و الذي يحوي خط المتروباص حيث يمكنك استخدامه للتنقل بسهولة في جميع أنحاء المدينة و بين الجانب الأوروبي و الآسيوي.
<br/>
<br/>يقع المشروع السكني بالقرب من مركز توياب للمعارض و بالقرب من المدارس الحكومية، المدارس الخاصة و مركز صحة الأسرة.
<br/>
<br/>تم بناء المشروع على مساحة 39,561 م 2 و مساحة بناء إجمالية تبلغ 362,584 م 2 تتكون من إجمالي 2785 وحدة سكنية و تجارية بما في ذلك 2683 شقة و منزل من نوع (شقة 1+1 غرفة نوم واحدة ، شقة 1+2 مع غرفتين نوم و شقة 1+3 مع ثلاث غرف نوم) بالإضافة إلى 102 من المحلات و الوحدات التجارية.<br/>
<br/>يضم المشروع 2450 متر مربع من المساحات الخضراء و منتزه للأطفال يتكون من 900 متر مربع من المساحات الاجتماعية و 1550 متر مربع من الحدائق الطبيعية، ويقدم لك المشروع منطقة حديقة طبيعية ضخمة في وسط المدينة حيث يمكنك أن تبدأ يومك في حديقة خضراء و هادئة أثناء تناول قهوتك
هذه الشقق للبيع بمجمع سكني استثماري قرب مركز توياب للمعارض ستكتمل بحلول الشهر الثاني عشر لعام 2019
                       </p>
                       :
                       currentProduct.id == 144?
                       <p className={data.classInfoAr}>
  عقارات سكنية و شقق للبيع بالتقسيط في اسطنبول-تركيا ضمن مشروع سكني و الذي يقع في موقع مركزي على طريق باسن اكسبرس السريع الذي يربط طريق تيم السريع، طريق  السريع و مطار أتاتورك. و يقع المشروع أيضاً على مسافة قريبة من محطة المترو، و تعتبر هذه المنطقة حيوية جداً و تحيط بها العديد من مراكز التسوق الشهيرة مثل 212 باور أوتليت مول و مول اسطنبول، و العديد من المستشفيات و الكثير من المرافق الاجتماعية و العامة.

تم بناء المشروع على مساحة 50,000 متر مربع، و الذي يتكون من برجين سكنيين مع 503 شقة و منزل و يوفر أنواع متعددة من الشقق مثل (1+1) غرفة نوم واحدة، (2+1) غرفتين نوم و (3+1) ثلاث غرف نوم.
<br/>
<br/>
يقدم هذا المشروع السكني ميزة فريدة من نوعها تسمى (فولد هوم)، و هي عبارة عن مجموعة من الغرف الاجتماعية و الترفيهية مثل قاعة مراقبة السماء، السينما و أكثر من ذلك لإستخدامها من قبل السكان باستخدام نظام (الدفع عند الإستخدام)، ولا يوجد أي دفع للمنطقة التي لا تستخدم و لا يتم إضافة تكلفة إلى رسوم الاشتراك الخاص بك.
<br/>
<br/>
يمكنك استخدام وحدات (فولد هوم)، والتي يمكن استخدامها مع بطاقات محددة لأفراد معينين، باعتبارها مناطق خاصة كجزء من منزلك. عندما تعاني المرافق من التلف و تتطلب أعمال الإصلاح، لا يتم جمع الأموال من أي شخص. و يتم تعويض هذه النفقات من الإستهلاك.
<br/>
<br/>
من المقرر تسليم هذه العقارات سكنية و الشقق للبيع بالتقسيط في اسطنبول-تركيا في الشهر الثاني عشر لعام 2019.
                        </p>
                      :
                      currentProduct.id == 107?
                      <p className={data.classInfoAr}>
                     شقق استثمارية على شاطئ البحر للبيع بالتقسيط في بيوك جكمجة -اسطنبول/ تركيا ضمن مشروع سكني يتم بناءه على مساحة 121,406 متر مربع من الأراضي في منطقة ميماروبا حيث يمتد على شاطئ ساحلي يبلغ طوله 13 كم، مما يتيح ل 95٪ من مناطق المعيشة بالاستمتاع بالإطلالة البحرية. علاوة على ذلك، يتم تخصيص مساحة تجارية قدرها 10,000 متر مربع لإقامة سوق فاخر على البحر مباشرة.

يقدم المجمع السكني مجموعة متنوعة من 270 من المساكن، شقق مطلة على البحر، منازل للعطلة، 56 منزل مرتفع (Penthouse)، 40 شقة دوبليكس مع حديقة أو تراس جميعها متوفرة بمساحات مختلفة مع غرفة نوم واحدة، غرفتين نوم، ثلاث غرف نوم، أربع غرف نوم أو خمس غرف نوم .
<br/>
<br/>
يقدم المشروع العديد من الميزات الفريدة منها بازار الذواقة على الشاطئ، الحديقة المائية، شارع الفن، ساحة الرقص، مرفأ القوارب، حديقة التأمل، متنزه الحيوانات الأليفة و غيرها الكثير.
<br/>
<br/>
من المقرر اكتمال هذه الشقق الاستثمارية على شاطئ البحر للبيع بالتقسيط في بيوك جكمجة-اسطنبول/تركيا في نهاية عام 2019.

                       </p>
                      :
                      currentProduct.id == 147?
                      <p className={data.classInfoAr}>
                      شقق استثمارية للبيع بالتقسيط المريح في باشاك شهير-اسطنبول/تركيا بضمان الحكومة التركية بموقع هام يتوسط أهم المشاريع التطويرية التي تشهدها اسطنبول و منها مطار اسطنبول الثالث, المدينة الصحية المؤلفة من 8 مشافي متخصصة, أكبر حديقة نباتية في أوروبا, جسر السلطان يافوز سليم, ميدان كينت و الذي تعادل مساحته ضعف مساحة ساحة تقسيم و غيرها.
                      <br/>
<br/>
لقد تم تصميم المشروع ليكون مركز جذب متكامل بحيث أنه مدعوم من قبل الحكومة التركية و يتألف من شارع محاط بالمتاجر يقسم المشروع إلى قسمين لينتهي إلى ساحة ضخمة نصف دائرية تتضمن محطة قطار الأنفاق (المترو) و التي ستتلقى جميع الأشخاص القادمين إلى بشاك شهير.

من الميزات المتواجدة في هذا المشروع السكني 120 محل تجاري متواجدين تحت الأبنية السكنية توفر العديد من المقاهي و أشهر الماركات العالمية, مناطق للاسترخاء تتضمن أحواض مائية, أرضيات خشبية, تراسات و مساحات خضراء, مدرج لمشاهدة مختلف عروض التسلية, مسبح داخلي بإضاءة طبيعية عن طريق ضوء الشمس, مركز رياضي لممارسة مختلف أنواع الرياضة و البيلاتس, حدائق و ألعاب للأطفال مصممة بشكل خاص لضمان سلامة الأطفال و العديد غيرها من الميزات.
<br/>
<br/>
يتوفر في المشروع شقق منازل و بيوت بعدد 615 ذات غرفتين نوم و صالة, ثلاث غرف نوم و صالة, أربع غرف نوم و صالة و حتى الشقق ذات خمس غرف نوم مع توافر شقق دوبلكس بمساحات من 106 متر مربع و حتى 268 متر مربع.

تتميز الشقق بأسقف مرتفعة, غرف واسعة و شرفات بالإضافة إلى تضمنها على شرفات مغلقة, غرفة للغسيل و غرفة للملابس.
<br/>
<br/>
من المقرر انتهاء هذه الشقق الاستثمارية للبيع بالتقسيط المريح في باشاك شهير-اسطنبول/تركيا بضمان الحكومة التركية في شهر 6 عام 2018.
                      </p>
                      :
                      currentProduct.id == 148?
                      <p className={data.classInfoAr}>
شقق بإطلالة مباشرة على البحر للبيع بالتقسيط بضمان الحكومة بدون فوائد في زيتينبورنو- اسطنبول / تركيا

ضمن مشروع سكني يتم بناءه بضمان الحكومة التركية على مساحة 111 هكتار في منطقة كازلي تششمة (Kazlıçeşme) مطلة على بحر مرمرة بالقرب من الطريق السريع E5، مطار أتاتورك الدولي، محطة المترو، محطة المتروباص، محطة القطار والعديد من طرق النقل الأخرى.
<br/>
<br/>
لهذا المشروع السكني موقع فريد حيث يمكن الوصول إلى الشاطئ في بضع دقائق عبر جسر للمشاة يربط المشروع مباشرة بشاطئ البحر وطريق ساحلي بطول 30 كم.

تم تصميم المشروع من قبل شركة الهندسة المعمارية البريطانية تشابمان تايلور و التي حازت على أكثر من 200 جائزة دولية.
<br/>
<br/>
تم تصميم المشروع بحيث لا يتم تضمين مناطق مثل فتحات المصعد, سلالم الطوارئ, المساحات الاجتماعية, ممرات الهروب من الحرائق, غرف القمامة والأرضيات الميكانيكية أبدا إلى مجموع الأمتار المربعة التي قمت بشرائها، مما يوفر ميزة سعرية من حيث الفرق صافي و إجمالي مساحة الشقة.

كما تم تجهيز جميع الشقق بنظام المنزل الذكي الذي سيمكن من التحكم بالإضاءة، الستائر, مكيفات الهواء و التدفئة الأرضية عن طريق لوحة التحكم باللمس أو عن بعد عبر الهاتف، كما يتضمن نظام اتصال داخلي عبر الفيديو، والقدرة على مشاهدة تسجيلات كميرات المراقبة.

يشمل المشروع أيضا على ساحة مرصوفة بالأحجار و التي ستقدم العديد من المراكز الثقافية والمحلات التجارية الراقية والمطاعم بالإضافة إلى العديد من المرافق الاجتماعية والرياضية.

من المقرر الانتهاء من هذه الشقق بإطلالة مباشرة على البحر للبيع بالتقسيط بدون فوائد في زيتينبورنو-اسطنبول/ تركيا في شهر أذار عام 2019.
                      </p>
                      :
                      currentProduct.id == 119?
                      <p className={data.classInfoAr}>
تقع هذه الشقق للبيع بالقرب من المدارس و الجامعات في بشاك شهير-اسطنبول/تركيا بموقع هام بالقرب من أهم المشاريع التي تشهدها اسطنبول و منها المطار الثالث, المدينة الصحية و التي تتضمن 8 مشافي متخصصة, أكبر حديقة نباتية في أوروبا, جسر السلطان يافوز سليم الحديث, ميدان كينت و الذي تعادل مساحته ضعف مساحة ساحة تقسيم و غيرها.<br/>
<br/>يمتد هذا المشروع السكني على مساحة 72,706 متر مربع منها 80% مخصصة للمساحات الخضراء و يتألف من 11 بناء, شقق, منازل و بيوت بعدد 941, 27 محل تجاري و العديد من المرافق الاجتماعية.<br/>
<br/>لقد تم تصميم المرافق الاجتماعية في المشروع بشكل منفصل للرجال و النساء متضمنة أربع مسابح داخلية, الحمام التركي, الساونا, غرف البخار و المراكز الرياضية.<br/>
<br/>من المرافق الأخرى التي يتضمنها المشروع الحدائق و الأحواض المائية و التي تتضمن ألعاب للأطفال, ملاعب لمختلف أنواع الرياضات, تراسات للاسترخاء, محلات تجارية للتسوق و غيرها.يتواجد في المشروع شقق سكنية ذات غرفة نوم و صالة, غرفتين نوم و صالة, ثلاث غرف نوم و صالة, أربع غرف نوم و صالة و خمس غرف نوم و صالة ذات شرفات كبيرة و غرف واسعة بمساحات متعددة و خيارات متنوعة.
                      </p>

                     :

                    <p className={data.classInfoAr}>{currentProduct.descriptionAr}</p>
                    }

                  </div>

                </div>
              </div>
            </div>

          </section> */}
        {/* <div className=" ad-image">
          <div className="container">
          { currentProduct.id == '100' || currentProduct.id == '112' || currentProduct.id == '138'?
            <a href="/projects/140"><img className="ad-img" src={data.ad2} alt="cayan group "/></a>
          :
          currentProduct.id == '140' || currentProduct.id == '127' || currentProduct.id == '115'?
          <a href="/projects/131"><img className="ad-img" src={data.ad1} alt="cayan group "/></a>
            :
            currentProduct.id == '132' || currentProduct.id == '131' || currentProduct.id == '4'?
            <a href="/projects/139"><img className="ad-img" src={data.ad5} alt="cayan group "/></a>
            :
            currentProduct.id == '103' || currentProduct.id == '97' || currentProduct.id == '127'?
            <a href="/projects/138"><img className="ad-img" src={data.ad4} alt="cayan group "/></a>
            :
            currentProduct.id == '106' || currentProduct.id == '136' || currentProduct.id == '140'?
            <a href="/projects/138"><img className="ad-img" src={data.ad6} alt="cayan group "/></a>
            :
            currentProduct.id == '143' || currentProduct.id == '139' || currentProduct.id == '101'?
            <a href="/projects/144"><img className="ad-img" src={data.ad6} alt="cayan group "/></a>
            :
            currentProduct.id == '125' || currentProduct.id == '126' || currentProduct.id == '144'?
            <a href="/projects/138"><img className="ad-img" src={data.ad6} alt="cayan group "/></a>
            :
            <a href="/projects/100"><img className="ad-img" src={data.ad3} alt="cayan group "/></a>
        }




          </div> </div> */}

        {/* <section className="photo-tour col s12">
              <div className="container">
                <div className="row">
                  <div className="text">
                    <h2 className={data.classTitle}>{data.photo}</h2>
                    <hr/>
                  </div>
                  <div className="images col s12">
                    <div className="left-btn col s1">
                      <p>PREV</p>
                    </div>
                         <Slider {...settings}>
                          {currentProduct.images.map((images)=>{return(<div className="image-each">
                            <img src={images} alt="projects, real estate, istanbul, turkey,cayan group" alt="cayan group "/>
                          </div>)})}
                        </Slider>
                    <div className="right-btn col s1">
                      <p>NEXT</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
        {/* <Getintouchprojects1 data={content.page.getintouch}/> */}
        {/* <section className="privilages">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.privileges}</h2>
                      <hr />
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image parks">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.parks}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image family">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.family}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image pool">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.pool}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image security">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.security}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image cafes">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.cafes}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image resturants">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.resturants}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image gym">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.fitness}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image trails">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.trails}</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
        {/* <section className="photo-tour col s12">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.apartmentsPhotos}</h2>
                      <hr/>
                    </div>
                    <div className="images col s12">
                      <div className="left-btn col s1">
                        <p>PREV</p>
                      </div>
                           <Slider {...settings}>
                            {currentProduct.interior.map((interior)=>{return(<div className="image-each">
                              <img src={interior} alt="projects, real estate, istanbul, turkey,cayan group" alt="cayan group "/>
                            </div>)})}
                          </Slider>
                      <div className="right-btn col s1">
                        <p>NEXT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
        {/* <section className="plans col s12">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.plans}</h2>
                      <hr/>
                    </div>
                    <Tabs>

                      <TabList>
                      {currentProduct.types.map((type)=>{return(
                        <Tab>{type.type}</Tab>
                        )})}
                      </TabList>
                      {currentProduct.types.map((type)=>{return(

                      <TabPanel>
                      <div className="plan-image s12 m8 left">
                        <img src={type.plan} alt="projects, real estate, istanbul, turkey,cayan group" alt="cayan group "/>
                      </div>
                      <div className="plan-info s12 m4 right">
                      <Select
                              name="form-field-name"
                              value={selectedOption}
                              onChange={this.handleChange}
                              clearable = {false}
                              className = 'z-depth-1'
                              placeholder= 'USD'
                              options={[
                                { value: 'USD', label: 'USD',clearableValue: false },
                                { value: 'TRY', label: 'TRY',clearableValue: false },
                                { value: 'SAR', label: 'SAR',clearableValue: false },
                                { value: 'AED', label: 'AED',clearableValue: false },
                                { value: 'KWD', label: 'KWD',clearableValue: false },
                                { value: 'OMR', label: 'OMR',clearableValue: false },
                                { value: 'QAR', label: 'QAR',clearableValue: false },
                                { value: 'BHD', label: 'BHD',clearableValue: false },
                                { value: 'EUR', label: 'EUR',clearableValue: false },
                                { value: 'GBP', label: 'GBP',clearableValue: false },
                              ]}
                            />
                        <div className="price">
                        {
                          selectedOption.label === 'TRY' ?
                          <h3>{type.minPrice.TRY.toLocaleString()} TL - {type.maxPrice.TRY.toLocaleString()} TL</h3>
                          :
                          selectedOption.label === 'AED' ?
                          <h3>{type.minPrice.AED.toLocaleString()} AED - {type.maxPrice.AED.toLocaleString()} AED</h3>
                          :
                          selectedOption.label === 'USD' ?
                          <h3>${type.minPrice.USD.toLocaleString()} - ${type.maxPrice.USD.toLocaleString()} </h3>
                          :
                          selectedOption.label === 'SAR' ?
                            <h3>{type.minPrice.SAR.toLocaleString()} SAR - {type.maxPrice.SAR.toLocaleString()} SAR</h3>
                          :
                          selectedOption.label === 'KWD' ?
                            <h3>{type.minPrice.KWD.toLocaleString()} KWD - {type.maxPrice.KWD.toLocaleString()} KWD</h3>

                          :
                          selectedOption.label === 'OMR' ?
                            <h3>{type.minPrice.OMR.toLocaleString()} OMR - {type.maxPrice.OMR.toLocaleString()} OMR</h3>
                            :
                          selectedOption.label === 'QAR' ?
                            <h3>{type.minPrice.QAR.toLocaleString()} QAR - {type.maxPrice.QAR.toLocaleString()} QAR</h3>
                            :
                          selectedOption.label === 'BHD' ?
                            <h3>{type.minPrice.BHD.toLocaleString()} BHD - {type.maxPrice.BHD.toLocaleString()} BHD</h3>
                            :
                          selectedOption.label === 'EUR' ?
                            <h3>{type.minPrice.EUR.toLocaleString()} EUR - {type.maxPrice.EUR.toLocaleString()} EUR</h3>
                            :
                          selectedOption.label === 'GBP' ?
                            <h3>{type.minPrice.GBP.toLocaleString()} GBP - {type.maxPrice.GBP.toLocaleString()} GBP </h3>
                            :
                          <h3>${type.minPrice.USD.toLocaleString()}  - ${type.maxPrice.USD.toLocaleString()} </h3>
}

                        </div>



                        <div className="area">
                          <h3 className={data.classInfoAr} >{type.minArea}m - {type.maxArea}m</h3>
                        </div>
                        <a href="#contact-section">
                          <button type="button" name="button" className={data.classInfoAr}>
                              {data.button}
                          </button>
                        </a>
                      </div>
                      </TabPanel>
                      )})}
                    </Tabs>

                  </div>
                </div>
              </section> */}
        {/* {
                currentProduct.id != 15 ?
                <section className="places">
                    <div className="container">
                      <div className="row">
                        <div className="text">
                          <h2 className={data.classTitle}>{data.places}</h2>
                          <hr />
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image metro">
                            <p>{currentProduct.distances.metro}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.metro}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image taksim">
                          <p>{currentProduct.distances.taksim}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.taksim}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image sultan">
                            <p>{currentProduct.distances.sultan}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.sultan}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image ataturk">
                            <p>{currentProduct.distances.ataturk}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.ataturk}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image metrobus">
                            <p>{currentProduct.distances.metrobus}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.metrobus}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image new-airport">
                            <p>{currentProduct.distances.newairport}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.newairport}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image tem">
                            <p>{currentProduct.distances.tem}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.tem}</p>
                            <hr />
                          </div>
                        </div>
                        <div className="places-each col s12 m6 l3">
                          <div className="image beach">
                            <p>{currentProduct.distances.beach}</p>
                          </div>
                          <div className="text-each">
                            <p className={data.classInfoAr}>{data.beach}</p>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  :
                  null

              } */}
        {/*
              <section className="location">
                  <div className="container">
                    <div className="row">
                      <div className="text">
                        <h2 className={data.classTitle}>{data.nearBy}</h2>
                        <hr/>
                      </div>

                      <div className="tabs col s12 row">
                        <ul>
                          <li>
                            <div className="airport"></div>
                            <p>{data.ataturk}</p>
                          </li>
                          <li>
                            <div className="airport"></div>
                            <p>{data.airport}</p>
                          </li>
                          <li>
                            <div className="taksim"></div>
                            <p>{data.taksim}</p>
                          </li>

                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className="map  col s10">

                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0" }}
                      defaultCenter={centerProject}
                      defaultZoom={this.props.zoom}
                    >
                      <AnyReactComponent
                        lat={locationLat}
                        lng={locationLng}
                      />
                      <AnyReactComponent2
                        lat={40.989335}
                        lng={ 28.802444}
                      />
                      <AnyReactComponent3
                        lat={41.047102}
                        lng={28.962483}
                      />
                    </GoogleMapReact>
                  </div>
                </section>
*/}
        {/* <Ads data={content.page.eachProject}/> */}
        {/* <div className="ad-image-big ">
                <div className="container">
          { currentProduct.id == '100' || currentProduct.id == '112' || currentProduct.id == '127'?
            <a href="/projects/138"><img className="ad-img-big" src={data.ad55} alt="cayan group " /></a>
          :
          currentProduct.id == '140' || currentProduct.id == '103' || currentProduct.id == '115'?
          <a href="/projects/127"><img className="ad-img-big" src={data.ad66} alt="cayan group " /></a>
            :
            currentProduct.id == '132' || currentProduct.id == '131' || currentProduct.id == '4'?
            <a href="/projects/139"><img className="ad-img-big" src={data.ad44} alt="cayan group " /></a>
            :
            currentProduct.id == '126' || currentProduct.id == '141' || currentProduct.id == '144'?
            <a href="/projects/97"><img className="ad-img-big" src={data.ad22} alt="cayan group " /></a>
            :
            currentProduct.id == '106' || currentProduct.id == '138' || currentProduct.id == '97'?
            <a href="/projects/136"><img className="ad-img-big" src={data.ad33} alt="cayan group " /></a>
            :
            currentProduct.id == '143' || currentProduct.id == '139' || currentProduct.id == '101'?
            <a href="/projects/144"><img className="ad-img-big" src={data.ad6} alt="cayan group " /></a>

            :
            <a href="/projects/140"><img className="ad-img-big" src={data.ad66} alt="cayan group " /></a>
        }




          </div>

                    </div>

                <div className="text">
                  <h2 className={"related-projects " + data.classTitle}>{data.titleRelated}</h2>
                <hr />
                </div>
*/}
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
