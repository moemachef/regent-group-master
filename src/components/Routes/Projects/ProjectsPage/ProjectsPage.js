import React, { Component } from 'react';
import { projects } from '../../../Data/projects.js';
import './ProjectsPage.css';
import { Helmet } from 'react-helmet';

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      attention: '',
      isTop: true
    };
    setTimeout(() => {
      this.setState({ attention: true });
      return;
    }, 5000);
  }
  closeAttention = () => {
    this.setState({
      attention: false
    });
  };
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 3000;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    const data = this.props.data;

    return (
      <div className="projects-page col s12">
        <div className="container">
          <div className="row">
            <div className="projectsPage-wrapper col s12">
              {projects.map(product => {
                return (
                  <a href={'/projects/' + product.id}>
                    <div className={'wrapper col s3 cayan-' + product.id}>
                      <div className={'carouselImages cayan-' + product.id}>
                        <h6>{'IST ' + product.id}</h6>
                      </div>
                      {/* <div className="descriptionProjectsPage">
                    <h6 className={data.classDescriptionTitle}>{data.descriptionTitle}</h6>

                    <p className={data.classDescriptionEn}>{product.descriptionShort}</p>
                    <p className={data.classDescriptionAr}>{product.descriptionShortAr}</p>
                  </div> */}
                      <h5 className={data.classprice}>
                        ${product.priceMin.USD.toLocaleString() +
                          ' - $' +
                          product.priceMax.USD.toLocaleString()}
                      </h5>
                      <div className="project-info ">
                        <div
                          className={
                            'col s6 project-info-icons ' + data.classIcons1
                          }
                        >
                          <div className="each">
                            <i className={'ion-pin  ' + data.classIconsI} />
                            <p className={data.classEn}>{product.location}</p>
                            <p className={data.classAr}>{product.locationAr}</p>
                          </div>

                          <div className="each">
                            <i className={'ion-home ' + data.classIconsI} />
                            <p className="nutural">{product.typesAll}</p>
                          </div>

                          <div className="each">
                            <i className={'ion-map ' + data.classIconsI} />
                            <p className="nutural">{product.area}</p>
                          </div>

                          <div className="each">
                            <i
                              className={
                                'ion-ios-pricetags ' + data.classIconsI
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
                            <i className={'ion-cash ' + data.classIconsI} />
                            <p className={data.classEn}>{product.status}</p>
                            <p className={data.classAr}>{product.statusAr}</p>
                          </div>

                          <div className="each">
                            <i className={'ion-calendar ' + data.classIconsI} />
                            <p className={data.classEn}>
                              {product.deliveryDate}
                            </p>
                            <p className={data.classAr}>
                              {product.deliveryDateAr}
                            </p>
                          </div>
                        </div>
                        {/* <div className={"col s6 project-info-icons " + data.classIcons2}>

                    </div> */}
                        <br />
                        {/* <button className={"more-details row" + data.classTitle}>{data.moreDetails}</button> */}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
