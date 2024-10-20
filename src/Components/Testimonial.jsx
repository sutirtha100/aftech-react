import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Dia Choudhary",
    date: "2024-06-28",
    review:
      "I am very happy with the service provided by the staff. Work was done very professionally, promptly, as well as with great detail. Highly recommended!",
    avatar: "https://cdn.trustindex.io/assets/default-avatar/noprofile-06.svg",
  },
  {
    name: "Cindy Cai",
    date: "2024-06-06",
    review:
      "I was saved with AF Technologies Web's help when I was disappointed at my poor website knowledge. They are very honest and full of integrity.",
    avatar: "https://cdn.trustindex.io/assets/default-avatar/noprofile-05.svg",
  },
  {
    name: "Khushi Chauhan",
    date: "2024-06-06",
    review:
      "Professional, reliable, and very dedicated to his work. Faizan has done a fabulous job creating my website, logo, and flyer 👏👏.",
    avatar: "https://cdn.trustindex.io/assets/default-avatar/noprofile-04.svg",
  },
  {
    name: "Kanav Modi",
    date: "2024-05-15",
    review:
      "I had the pleasure of working with AF Technologies, located at 93, Picnic Garden, Kolkata, India. They provided exceptional service.",
    avatar: "https://cdn.trustindex.io/assets/default-avatar/noprofile-03.svg",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Loop through the slides
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll one card at a time
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-panel">
      <h2 className="testimonial-title" data-aos="fade-up">
        Our Client Testimonial
      </h2>
      <Slider {...settings} className="testimonial-box" data-aos="fade-up">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-date">{testimonial.date}</p>
              </div>
              <img
                src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
                alt="Google"
                className="google-logo"
              />
            </div>
            <p className="testimonial-review">{testimonial.review}</p>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">&#9733;</span> // Unicode for ★
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
