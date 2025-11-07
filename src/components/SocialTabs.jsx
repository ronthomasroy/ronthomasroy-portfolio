import React from 'react';
import { motion } from 'framer-motion';

export default function SocialTabs() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ron-thomas-roy/',
      
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ronthomasroy',
      
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ronthomasroy',
      
    },
    {
      name: 'Email',
      url: 'mailto:ronroy003@gmail.com',
      
    },
    {
      name: 'HFace',  
      url: 'https://huggingface.co/rontroy',
      
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/rontroy',
      
    }
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0,
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const tabVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.2,
      x: -8,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="social-tabs-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-tab"
          variants={tabVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="social-tab-content"
            variants={hoverVariants}
          >
            <span className="social-icon">{link.icon}</span>
            <span className="social-name">{link.name}</span>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
}
