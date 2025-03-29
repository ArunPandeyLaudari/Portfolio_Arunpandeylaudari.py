import React from 'react'

const Testimonial = () => {
  return (
   
    <section className="testimonial section" id="testimonial">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">My Clients Say</span>
    
        <div className="testimonial__container container swiper-container">
            <div className="swiper-wrapper">
            <div className="testimonial__card swiper-slide">
                <img src="" alt="" className="testimonial__img" />
                <h3 className="testimonial__name">Client Name</h3>
                <p className="testimonial__description">Client feedback goes here.</p>
            </div>
            {/* Add more testimonial cards as needed */}
            </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
    </section>
    
  )
}

export default Testimonial