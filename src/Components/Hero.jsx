import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-banner position-relative">
      <Slider {...settings}>
        <div>
          <img
            className="big w-100"
            src="https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/banner-img01.jpg"
            alt="Banner 1"
          />
        </div>
        <div>
          <img
            className="big w-100"
            src="https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/banner-img02.jpg"
            alt="Banner 2"
          />
        </div>
        <div>
          <img
            className="big w-100"
            src="https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/banner-img03.jpg"
            alt="Banner 3"
          />
        </div>
      </Slider>

      <div className="desc position-absolute w-100">
        <div className="container">
          <div className="banner-content">
            <div className="banner-bg-title fw-bold">
              Transform Your Vision into an Impressive Online Presence with Our Professional
            </div>
            <ul className="d-flex gap-3 mt-4">
              <li>
                <a href="https://aftechnologiesweb.com/contact-us/" className="common_btn2">
                  Get a Free Consultation
                </a>
              </li>
              <li>
                <a href="#" className="common_btn">
                  Hire Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="particles-js"></div>
    </div>
  );
}

export default Hero;
