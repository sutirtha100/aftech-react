import React, { useEffect, useState } from "react";

// import "../public/Assets/Css/Style.css"

function Navbar() {

  const [hideHeaderTop, setHideHeaderTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideHeaderTop(true);
      } else {
        setHideHeaderTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar navbar-default fixed-top">
        <div className="header-top w-100">
          <div className="container">
            <ul className="d-flex gap-3 justify-content-center align-items-center">
              <li className="skype">
                Skype No Aus: <a href="tel:0390055974">0390055974</a>
              </li>
              <li>
                <a href="/" className="common_btn">
                  Pay Now
                </a>
              </li>
              <li>
                <a
                  href="https://aftechnologiesweb.com/contact-us/"
                  className="common_btn2"
                >
                  Get a Free Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-mid w-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                <div className="hd-logo">
                  <a href="https://aftechnologiesweb.com/" rel="home">
                    <img
                      src="https://aftechnologiesweb.com/wp-content/uploads/2024/07/logo.png"
                      alt="AF Technologies Web"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-4 col-2">
                <div className="hd-link text-end">
                  <nav
                    id="primary-navigation"
                    className="site-navigation primary-navigation"
                  >
                    <a className="screen-reader-text skip-link" href="/content">
                      Skip to content{" "}
                    </a>
                    <div className="menu-service-menu-container">
                      <ul id="primary-menu" className="nav-menu">
                        <li
                          id="menu-item-20"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14 current_page_item menu-item-20"
                        >
                          <a
                            href="https://aftechnologiesweb.com/"
                            aria-current="page"
                          >
                            Home
                          </a>
                        </li>
                        <li
                          id="menu-item-89"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                        >
                          <a href="https://aftechnologiesweb.com/graphic-designing/">
                            Graphic Designing
                          </a>
                        </li>
                        <li
                          id="menu-item-90"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90"
                        >
                          <a href="https://aftechnologiesweb.com/website-development/">
                            Website Development
                          </a>
                        </li>
                        <li
                          id="menu-item-91"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91"
                        >
                          <a href="https://aftechnologiesweb.com/seo/">SEO</a>
                        </li>
                        <li
                          id="menu-item-92"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"
                        >
                          <a href="https://aftechnologiesweb.com/social-media/">
                            Social Media
                          </a>
                        </li>
                        <li
                          id="menu-item-93"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"
                        >
                          <a href="https://aftechnologiesweb.com/google-ads-ppc/">
                            Google Ads PPC
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom w-100 text-center d-none d-lg-block">
          <div className="container">
            <nav
              id="primary-navigation"
              className="site-navigation primary-navigation"
            >
              <a className="screen-reader-text skip-link" href="/content">
                Skip to content{" "}
              </a>
              <div className="menu-header-menu-container">
                <ul id="primary-menu" className="nav-menu">
                  <li
                    id="menu-item-96"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"
                  >
                    <a href="https://aftechnologiesweb.com/about-us/">
                      About Us
                    </a>
                  </li>
                  <li
                    id="menu-item-112"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-112"
                  >
                    <a href="/">Case Studies</a>
                  </li>
                  <li
                    id="menu-item-113"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-113"
                  >
                    <a href="/WeWork">Our Work</a>
                  </li>
                  <li
                    id="menu-item-114"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-114"
                  >
                    <a href="/">Blog</a>
                  </li>
                  <li
                    id="menu-item-97"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"
                  >
                    <a href="https://aftechnologiesweb.com/contact-us/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
