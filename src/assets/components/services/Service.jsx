import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import "./Service.css";

const services = [
  {
    icon: <FaLaptopCode className="service-icon" />, 
    title: "Web Designing",
    description: "Creating modern and responsive web designs tailored to your needs."
  },
  {
    icon: <FaCode className="service-icon" />, 
    title: "Web Development",
    description: "Developing high-performance websites with clean and scalable code."
  },
  {
    icon: <FaMobileAlt className="service-icon" />, 
    title: "App Development",
    description: "Building intuitive and user-friendly mobile applications."
  }
];

const Service = () => {
  return (
    <section className="service-section" id="services">
      <h2 className="service-title">Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">{service.icon}</div>
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
