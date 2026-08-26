import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const email = 'akashakash95327@gmail.com';
  const whatsappNumber = '919363273831';

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: email,
      link: `mailto:${email}?subject=Portfolio%20Contact&body=Hi%20Akash%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`,
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 93632 73831',
      link: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 93632 73831',
      link: 'tel:+919363273831',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Chennai',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AshtheDeveloper777', label: 'GitHub' },
    { icon: FaWhatsapp, href: `https://wa.me/${whatsappNumber}`, label: 'WhatsApp' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <motion.span
            className="section-number"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            04.
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="title-line"
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities.
          Reach me directly by email, WhatsApp, or phone.
        </motion.p>

        <div className="contact-content">
          <motion.div className="contact-info" variants={containerVariants}>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <>
                  <div className="info-icon">
                    <Icon />
                  </div>
                  <div className="info-content">
                    <h4>{info.label}</h4>
                    <span>{info.value}</span>
                  </div>
                </>
              );

              return info.link ? (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('https') ? '_blank' : undefined}
                  rel={info.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="info-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={info.label}
                  className="info-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {content}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="contact-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4>Connect with me</h4>
            <div className="social-buttons">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                    <span>{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
            <motion.a
              href="https://forms.visme.co/fv/7vgyvk97-gv16eo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Copyright {new Date().getFullYear()} Akash. Built with React.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
