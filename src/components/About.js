import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';
import './about.css';

const About = () => {
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

  const features = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React',
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side logic with Python Flask and Java',
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: 'Designing and optimizing SQL databases for scalable applications',
    },
    {
      icon: FaMobile,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment',
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
            01.
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="title-line"
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={itemVariants}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. My journey in software development has
              equipped me with a strong foundation in both frontend and backend
              technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I specialize in Python Flask for backend development, creating
              RESTful APIs and server-side applications. On the frontend, I work
              with React to build dynamic and responsive user interfaces. My
              experience with Java and SQL allows me to develop comprehensive
              solutions that are both efficient and scalable.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm always eager to learn new technologies and take on challenging
              projects that push the boundaries of what's possible.
            </motion.p>

            <motion.div
              className="tech-stack"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Technologies I work with:</h3>
              <div className="tech-list">
                {['Python', 'Flask', 'React', 'Java', 'SQL', 'JavaScript', 'HTML/CSS', 'Git'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, type: 'spring' }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-features"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
