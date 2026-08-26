import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaDownload, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import './hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AshtheDeveloper777', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/AkashCodesIt/', label: 'LeetCode' },
    { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/profile/akashakao39c', label: 'GeeksforGeeks' },
    { icon: FaEnvelope, href: 'mailto:akashakash95327@gmail.com?subject=Portfolio%20Contact', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/919363273831', label: 'WhatsApp' },
  ];

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-content"
          variants={itemVariants}
        >
          <motion.div
            className="greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="wave">👋</span> Hi, I'm <span className="greeting-name">AKASH S</span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="gradient-text">Full Stack Developer</span>
          </motion.h1>

          <motion.div
            className="hero-typed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Next.js Developer',
                2000,
                'React Specialist',
                2000,
                'Tailwind CSS Architect',
                2000,
                'Python Flask Developer',
                2000,
                'Full Stack Engineer',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="typed-text"
            />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I build modern, scalable web applications and intuitive interfaces.
            Passionate about high-performance React ecosystem tech & sleek user experiences.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {socialLinks.map((social, index) => {
              const SocialIcon = social.icon;
              const isExternal = social.href.startsWith('https');

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <SocialIcon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="floating-shapes">
            <motion.div
              className="shape shape-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="shape shape-2"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="shape shape-3"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <div className="code-window">
            <div className="code-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
{`const developer = {
  name: "AKASH S",
  role: "Full Stack Dev",
  skills: ["Next.js", "React", "Tailwind CSS", "Python"],
  profiles: ["LeetCode", "GeeksforGeeks", "GitHub"],
  status: "Available for projects"
};`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
