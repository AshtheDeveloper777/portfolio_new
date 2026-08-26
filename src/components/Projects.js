import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCloudSun,
  FaShoppingCart,
  FaPenNib,
  FaCoffee,
  FaComments,
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Real-Time Chat App',
      description: 'Modern real-time messaging application built with Next.js, React, and Tailwind CSS featuring interactive chat rooms, instant updates, and responsive UI.',
      tags: ['Next.js', 'Tailwind CSS', 'React', 'WebSockets'],
      category: 'fullstack',
      github: 'https://github.com/AshtheDeveloper777/chat-app',
      demo: 'https://chatappaksh.vercel.app/',
      icon: FaComments,
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'React weather app with live weather search, API-powered forecasts, and a clean responsive interface.',
      tags: ['React', 'API', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/AshtheDeveloper777/weather_App',
      demo: 'https://weatherappaksh.vercel.app/',
      icon: FaCloudSun,
    },
    {
      id: 3,
      title: 'E-Commerce Store',
      description: 'React online shop experience with product browsing, cart interactions, and a polished storefront flow.',
      tags: ['React', 'JavaScript', 'E-Commerce'],
      category: 'frontend',
      github: 'https://github.com/AshtheDeveloper777/E-commerce',
      demo: 'https://onlineshopaksh-silk.vercel.app/',
      icon: FaShoppingCart,
    },
    {
      id: 4,
      title: 'Blog Post App',
      description: 'React blog platform for reading and publishing posts with a modern layout and deploy-ready routing.',
      tags: ['React', 'Blog', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/AshtheDeveloper777/new_Blogpost',
      demo: 'https://newblogpostaksh.vercel.app/',
      icon: FaPenNib,
    },
    {
      id: 5,
      title: 'Cafe and WiFi API',
      description: 'Cafe finder web app backed by an API for discovering cafe details, WiFi availability, and useful venue info.',
      tags: ['React', 'API', 'Web App'],
      category: 'fullstack',
      github: 'https://github.com/AshtheDeveloper777/cafe_api-web',
      demo: 'https://cafeapiweb.vercel.app/',
      icon: FaCoffee,
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        <motion.div
          className="section-header"
          variants={itemVariants}
        >
          <motion.span
            className="section-number"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            03.
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="title-line"
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filterOption) => (
            <motion.button
              key={filterOption.value}
              className={`filter-btn ${filter === filterOption.value ? 'active' : ''}`}
              onClick={() => setFilter(filterOption.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterOption.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card"
                  whileHover={{ y: -8 }}
                >
                  <div className="project-image">
                    <ProjectIcon className="project-visual-icon" aria-hidden="true" />
                    <div className="project-overlay">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.title} GitHub repository`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${project.title} live demo`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <ProjectIcon className="project-icon" />
                      <h3>{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
