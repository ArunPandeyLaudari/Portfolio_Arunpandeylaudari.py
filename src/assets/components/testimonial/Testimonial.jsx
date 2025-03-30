import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Harsh P.",
    role: "Product Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback:
      "I was hesitant to try Pagedone at first, but I'm so glad I did – it's exceeded all of my expectations.",
  },
  {
    name: "Alex K.",
    role: "Design Lead",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    feedback:
      "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
  },
  {
    name: "Jane D.",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5,
    feedback:
      "Pagedone is simply the best tool of investment in the market right now.",
  },
  {
    name: "Michael T.",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    rating: 4,
    feedback:
      "It's a fantastic platform! I highly recommend it to anyone looking for efficiency.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonial">
       <h2 className="section__title">What My Clients Say's</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true} // Enables infinite looping
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <div className="rating">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
            <p className="feedback">{testimonial.feedback}</p>
            <div className="user-info">
              <img src={testimonial.img} alt={testimonial.name} />
              <div>
                <h4 className="user-name">{testimonial.name}</h4>
                <p className="user-role">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
