import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css'; // Updated CSS file
import {imga} from '../../images/about.jpg';
import {imgb} from '../../images/testimonial2.png';
import {imgc} from '../../images/testimonial1.png';
import {imgd} from '../../images/testimonial3.png';
import {imge} from '../../images/testimonial1.png';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Swostik Chapagain',
      position: 'CEO',
      image: imga, // Replace with your image paths
      rating: 5,
      description: 'Working with this team was an absolute pleasure. They understood my requirements perfectly and delivered beyond my expectations.',
      date: 'March 15, 2025'
    },
    {
      id: 2,
      name: 'Binisha Chapagain',
      position: 'Flutter Developer',
      image: imgb, // Replace with your image paths
      rating: 4,
      description: 'Very professional service. The final product was exactly what I was looking for, and they were responsive throughout the process.',
      date: 'February 28, 2025'
    },
    {
      id: 3,
      name: 'Nabin Poudel',
      position: 'Software Engineer',
      image: imgc, // Replace with your image paths
      rating: 5,
      description: 'I am extremely satisfied with the results. Their attention to detail and creative approach helped bring my vision to life.',
      date: 'January 20, 2025'
    },
    {
      id: 4,
      name: 'Milan Poudel',
      position: 'Web Developer',
      image: imgd, // Replace with your image paths
      rating: 5,
      description: 'Outstanding work! They exceeded my expectations and delivered the project ahead of schedule. Would definitely work with them again.',
      date: 'March 5, 2025'
    },
    {
      id: 5,
      name: 'Sohan Kafle',
      position:'CEO',
      image: imge, // Replace with your image paths
      rating: 4,
      description: 'Great communication and exceptional skills. They transformed my ideas into reality with impressive results.',
      date: 'February 10, 2025'
    }
  ];

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h1 className="section__title">What My Clients Say's</h1>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false} // Removed navigation arrows
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-image-container">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}`} 
                      className="client-image"
                    />



                  </div>
                  <div className="client-info">
                    <h3 className="client-name">{testimonial.name}</h3>
                    <p className="client-position">{testimonial.position}</p>
                    <div className="client-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.description}</p>
                  <p className="testimonial-date">{testimonial.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;