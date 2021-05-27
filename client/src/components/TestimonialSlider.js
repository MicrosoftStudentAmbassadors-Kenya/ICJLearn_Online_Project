import React, { Component } from "react";
import Swiper from "react-id-swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      renderPagenation: () => <div className="swiper-pagination" />
    };
    let data = [
      {
        testimonialImage: "1.jpg",
        testimonialName: "Caleb Kigwi",
        testimonialDesignation: "High School Student, Kenya",
        testimonialText:
          "While I was in primary school, I was introduced to the concepts of Artificial Intelligence and I was fascinated by what technology is doing around the world. I begun studying AI, under the guidance of some Microsoft Learn Student Ambassadors from Kenya and I would love to have more of my school friends learn about technology."
      },
      {
        testimonialImage: "3.jpg",
        testimonialName: "Steven Kariuki",
        testimonialDesignation: "High School Student, Kenya",
        testimonialText:
          "Still in my high school, during the COVID-19 pandemic period away from school, I was introduced to the concepts of Artificial Intelligence and I admit that I have had a lot of fun learning more about technology. This platform provides easy access to learning materials and makes it possible for more and more students to be introduced to technology even whil still in high school."
      },
      {
        testimonialImage: "2.jpg",
        testimonialName: "Julia Muiruri",
        testimonialDesignation: "Instructor, Introduction to Programming",
        testimonialText:
          "I did not have the priviledge of learning technology during my high school, and I always felt like every child needs to understand the technological advancements that are affecting their day-to-day lives and future. With this platform, introducing technology concepts to students all over our institutions in the country becomes more efficient and will improve the emergence of tech enthusiasts who will contribute to the overall growth of our continent"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide testimonial-slider__single-slide" key={i}>
          <div className="author">
            <div className="author__image">
              <img
                src={`assets/img/testimonial/${val.testimonialImage}`}
                alt=""
              />
            </div>
            <div className="author__details">
              <h4 className="name">{val.testimonialName}</h4>
              <div className="designation">{val.testimonialDesignation}</div>
            </div>
          </div>
          <div className="content">{val.testimonialText}</div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <Swiper {...params}>{DataList}</Swiper>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;
