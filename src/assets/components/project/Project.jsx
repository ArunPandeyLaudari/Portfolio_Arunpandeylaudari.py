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
      title: "E-Commerce Website",
      description: "Full-stack shopping platform with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather with interactive maps",
      tags: ["React", "API", "CSS"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://your-weather-app-demo.com",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative workspace with real-time updates",
      tags: ["React", "Firebase", "Material UI"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-app-demo.com",
    },
    {
      id: 4,
      title: "Personal Blog",
      description: "Markdown-supported content platform",
      tags: ["Next.js", "Tailwind", "Prisma"],
      github: "https://github.com/yourusername/blog",
      demo: "https://your-blog-demo.com",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Health analytics and workout planner",
      tags: ["React Native", "Chart.js", "Firebase"],
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://your-fitness-app-demo.com",
    },
    {
      id: 6,
      title: "AI Image Generator",
      description: "Create unique art with machine learning",
      tags: ["React", "OpenAI API", "TailwindCSS"],
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