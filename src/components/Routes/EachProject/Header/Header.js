import React, { Component } from 'react';
import { projects } from '../../../Data/projects';
import find from 'lodash/find';
import { Link } from 'react-router-dom';

import './Header.css';


let allProjects = projects

class Header extends Component {

  render() {
    // const content = this.props.content;
    const data = this.props.data;

    const product = find(allProjects, {  id: projects.id });
    const currentProduct = product;
    return (
      <section className={"header-each-project col s12 cayan-"+ currentProduct.id} >
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

            
            
              
            
              

          </section>

    );
  }
}

export default Header;
