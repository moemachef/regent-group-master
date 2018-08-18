import React, { Component } from 'react';
import './ads.css';
import Slider from 'react-slick';
class Ads extends Component {
  render() {
    const data = this.props.data;
    console.log(data.classInfoAr)
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,

          autoplay: true,
          autoplaySpeed: 3000
  };
    return (
            <section className="ads">
                <div className="container">
                {data.classInfoAr == 'infoTextAr' ?
                <Slider className="ads-carousel" {...settings}>
                  <div className="ads-each">
                  <a href="/projects/101">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1526039071/extras/my-template970_x_90_copy_7.jpg" alt="cayan group " />
                  </a>


                  </div>
                  <div className="ads-each">
                  <a href="/projects/128">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1526030601/extras/my-template970_x_90_copy_8.jpg" alt="cayan group " />
                  </a>

                  </div>
                  <div className="ads-each">
                  <a href="/projects/107">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1526030601/extras/my-template970_x_90_copy_9.jpg" alt="cayan group " />
                  </a>

                  </div>
                  <div className="ads-each">
                  <a href="/projects/4">
                  <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1526030601/extras/my-template970_x_90_copy_10.jpg" alt="cayan group " />
                  </a>

                  </div>

                </Slider>
                :
                  <Slider className="ads-carousel" {...settings}>
                    <div className="ads-each">
                    <a href="/projects/101">
                      <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/1.jpg" alt="cayan group "/>
                    </a>


                    </div>
                    <div className="ads-each">
                    <a href="/projects/128">
                      <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/2.jpg" alt="cayan group "/>
                    </a>

                    </div>
                    <div className="ads-each">
                    <a href="/projects/107">
                      <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/3.jpg" alt="cayan group "/>
                    </a>

                    </div>
                    <div className="ads-each">
                    <a href="/projects/4">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/5.jpg" alt="cayan group "/>
                    </a>

                    </div>
                    <div className="ads-each">
                    <a href="/projects/4">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/4.jpg" alt="cayan group "/>
                    </a>

                    </div>
                    <div className="ads-each">
                    <a href="/projects/4">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/6.jpg" alt="cayan group "/>
                    </a>

                    </div>
                    <div className="ads-each">
                    <a href="/projects/4">
                    <img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1531315064/other/7.jpg" alt="cayan group "/>
                    </a>

                    </div>

                  </Slider>
              }

                </div>
              </section>
    );
  }
}

export default Ads;
