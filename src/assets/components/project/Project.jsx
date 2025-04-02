import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Project.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website(Kido Bazar)",
      description: "Full-stack shopping platform with payment integration",
      tags: ["HTML", "Tailwind CSS", "JavaScript","Swiper JS","Chart JS","Laravel", "MySQL",],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Barber Shop Appointment System & e-commerce",
      description: "Book appointments and shop products online",
      tags: ["HTML", "Tailwind CSS", "JavaScript","Swiper JS","Chart JS","Laravel", "MySQL",],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://your-weather-app-demo.com",
    },
    {
      id: 3,
      title: "School Website",
      description: "Information hub for students and parents",
      tags: ["HTML", "Tailwind CSS", "JavaScript","Swiper JS","Chart JS","Laravel", "MySQL",],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-app-demo.com",
    },
    {
      id: 4,
      title: "Portfilo Website",
      description: "Showcase of my work and skills",
      tags: ["HTML","CSS","React JS","Swiper JS"],
      github: "https://github.com/yourusername/blog",
      demo: "https://your-blog-demo.com",
    },
    {
      id: 5,
      title: "Hands For Change(Donation website)",
      description: "Connect donors with those in need",
      tags: ["HTML", "Tailwind CSS", "JavaScript","Swiper JS","Chart JS","Laravel", "MySQL",],
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://your-fitness-app-demo.com",
    },

    {
      id: 6,
      title: "Event Management System",
      description: "Manage and organize events seamlessly",
      tags: ["HTML", "Tailwind CSS", "JavaScript","Swiper JS","Chart JS","Laravel", "MySQL",],
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "https://your-ai-app-demo.com",
    },

    {
      id: 7,
      title: "Liquor Store Management System",
      description: "Manage liquor store operations efficiently",
      tags: ["HTML", "Tailwind CSS", "JavaScript","Swiper JS","Chart JS","Laravel", "MySQL",],
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "https://your-ai-app-demo.com",
    },

    {
      id: 8,
      title: "Library Management System",
      description: "Manage library resources and users efficiently",
     tags:['Java','MySQL'],
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "https://your-ai-app-demo.com",
    }

  ];

  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2 className="section__title">
          My Projects
        </h2>

        <div className="projects-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,               // Reduced rotation for cleaner look
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,      // Removed slide shadows for cleaner look
            }}
            autoplay={{
              delay: 3000,              // Slightly longer delay for better viewing
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            loop={true}
            className="projects-swiper"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="project-slide">
                <div 
                  className="project-card"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="project-icon">
                    <FiFolder />
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    <div className={`project-links ${hoveredId === project.id ? 'active' : ''}`}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                        <FiGithub />
                        <span>Code</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo">
                        <FiExternalLink />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="card-glare"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;