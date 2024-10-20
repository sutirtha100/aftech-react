import React from 'react';
import Slider from "react-slick"; // Import the react-slick Slider component
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const projects = [
    {
      url: "https://abledisabilitysupportservices.com.au/",
      img: "https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/project-logo01.png"
    },
    {
      url: "https://daphnehealthcare.com.au/",
      img: "https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/project-logo02.png"
    },
    {
      url: "https://focushub.com.au/",
      img: "https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/project-logo03.png"
    },
    {
      url: "https://adaptfamilyhealthsolutions.com.au/",
      img: "https://aftechnologiesweb.com/wp-content/themes/af-technologies-web/images/project-logo04.png"
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-panel">
      <div className="project-top text-center" data-aos="fade-up">
        <div className="container">
          <div className="project-bg-title fw-bold pb-3">Our Completed Projects</div>
          <div className="text-common pb-4 pb-md-5">
            Best Transforming vision into stunning, effective, and engaging digital experiences.
          </div>
        </div>
      </div>
      <div className="project-bottom" data-aos="fade-up">
        <div className="container">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div className="item" key={index}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-logo-box">
                  <img src={project.img} alt={`Project ${index + 1}`} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Projects;
