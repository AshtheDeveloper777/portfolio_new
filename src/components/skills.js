import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJava,
  FaReact,
  FaDatabase,
  FaCode,
  FaServer,
} from 'react-icons/fa';
import { SiFlask, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories =[
    {
      title: 'Backend',
      icon: FaServer,
      skills: [
        { name: 'Python', icon: FaPython, level: 90, color: '#3776ab' },
        { name: 'Flask', icon: SiFlask, level: 85, color: '#000000' },
        { name: 'Java', icon: FaJava, level: 80, color: '#ed8b00' },
        { name: 'SQL', icon: FaDatabase, level: 85, color: '#4479a1' },
      ],
    },
    {
      title: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'React', icon: FaReact, level: 90, color: '#61dafb' },
        { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#f7df1e' },
        { name: 'HTML5', icon: SiHtml5, level: 90, color: '#e34f26' },
        { name: 'CSS3', icon: SiCss3, level: 85, color: '#1572b6' },
      ],
    },
  ];

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
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
            02.
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="title-line"
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <skill.icon className="skill-icon" style={{ color: skill.color }} />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Additional Tools & Technologies</h3>
          <div className="tools-grid">
            {['Git', 'REST APIs', 'JSON', 'Postman', 'VS Code', 'Linux', 'Docker', 'AWS'].map((tool, index) => (
              <motion.div
                key={tool}
                className="tool-badge"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
