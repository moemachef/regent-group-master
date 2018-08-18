import React, { Component } from 'react';
import Slider from 'react-slick';

import { projects } from '../../Data/CarouselData.js';

import './ProjectsCarousel.css';

class ProjectsCarousel extends Component {
  render() {
    const data = this.props.data;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        { breakpoint: 400, settings: { slidesToShow: 1 } },
        { breakpoint: 992, settings: { slidesToShow: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 2 } }
      ]
    };
    return (
      <div className="projetcsCarousel ">
        <div className="containermy">
          <div className="row">
            <div className="container">
              {/* <h1 className={'body-h1 ' + data.classTitle}>{data.title}</h1> */}
            </div>

            <div className="carousel">
              <div className="left-btn col s1">
                <p className={data.btns}>PREV</p>
              </div>
              <Slider className="inner col s10" {...settings}>
                {projects.map(product => {
                  return (
                    <a key={product.id} href={'/projects/' + product.id}>
                      <div className="wrapper">
                        <div className={'carouselImages cayan-' + product.id}>
                          <h6>{'IST ' + product.id}</h6>
                        </div>
                        <div className="description">
                          <h5 className="center-align">
                            {product.priceMin.TRY} TL - {product.priceMax.TRY}{' '}
                            TL
                            {/* {product.priceMin.TRY +
                              ' - ' +
                              product.priceMax.TRY} */}
                          </h5>
                        </div>

                        <div className="project-info1 ">
                          <div
                            className={
                              'col s6 project-info-icons ' +
                              data.classDescriptionTitle
                            }
                          >
                            {/* data.classIconsI = change icons location */}
                            <div className="each">
                              <i className={'ion-pin ' + data.classIcons1} />
                              <p className={data.classEn}>{product.location}</p>
                              <p className={data.classAr}>
                                {product.locationAr}
                              </p>
                            </div>

                            <div className="each">
                              <i className={'ion-home ' + data.classIcons1} />
                              <p className="nutural">{product.types}</p>
                            </div>
                            <div className="each">
                              <i className={'ion-map ' + data.classIcons1} />
                              <p className="nutural">{product.area}</p>
                            </div>

                            <div className="each">
                              <i
                                className={
                                  'ion-ios-pricetags ' + data.classIcons1
                                }
                              />
                              <p className={data.classEn}>
                                {product.installment} months installments
                              </p>
                              <p className={data.classAr}>
                                {' '}
                                تقسيط {product.installment} شهر
                              </p>
                            </div>

                            <div className="each">
                              <i className={'ion-cash ' + data.classIcons1} />
                              <p className={data.classEn}>{product.status}</p>
                              <p className={data.classAr}>{product.statusAr}</p>
                            </div>

                            <div className="each">
                              <i
                                className={'ion-calendar ' + data.classIcons1}
                              />
                              <p className="nutural">{product.deliveryDate}</p>
                              {/* <p className="nutural">
                                {product.deliveryDateAr}
                              </p> */}
                            </div>

                            <div />
                          </div>
                          {/* <div
                            className={
                              'col s6 project-info-icons ' + data.classIcons2
                            }
                          >

                          </div> */}
                          {/* <button className={'more-details ' + data.classTitle}>
                            {data.moreDetails}
                          </button> */}
                        </div>
                        <div />
                      </div>
                    </a>
                  );
                })}
              </Slider>
              <div className="right-btn col s1">
                <p className={data.btns}>NEXT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsCarousel;
