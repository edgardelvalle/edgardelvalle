import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import resume from '../files/Edgar Del Valle_Resume.pdf';
import { motion } from 'framer-motion';
import Logo from '../files/Logo.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;

  .logo {
    z-index: -1;
    opacity: 0.05;
    position: fixed;
    transform: translateX(30%);
    min-height: 80vh;
  }

  .hero {
    display: flex;
    flex-direction: column;
  }

  .name {
    color: #2f2f2f;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
  }

  .first-name {
    font-size: 10rem;

    @media (max-width: 1000px) {
      font-size: 6rem;
    }
  }

  .last-name {
    font-size: 7rem;
    font-weight: 300;
    display: block;

    @media (max-width: 1000px) {
      font-size: 4.3rem;
    }
  }

  .description {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.5vw;
    text-align: center;
  }

  .contact {
    margin: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
      text-decoration: none;
      color: inherit;
      margin: 20px;

      :visiter {
        color: inherit;
      }
    }
  }

  .resume {
    text-transform: uppercase;
    text-decoration: none;
    align-self: center;
    color: white;
    border-radius: 10px;

    background-color: #0088ff;
    padding: 10px 13px;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <img src={Logo} alt="My logo" className="logo" />
      <div className="hero">
        <motion.h1
          transition={{ duration: 0.25 }}
          animate={{ scale: [0, 1] }}
          className="name first-name"
        >
          Edgar
        </motion.h1>
        <motion.h1
          transition={{ duration: 0.25 }}
          animate={{ scale: [0, 0, 1] }}
          className="name last-name"
        >
          Del Valle
        </motion.h1>
        <span className="description">Web Developer</span>
        <div className="contact">
          <motion.a
            whileHover={{ scale: 1.15 }}
            rel="noreferrer"
            target="_blank"
            href="https://github.com/edgardelvalle"
          >
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faGithub} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15 }}
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/edgardelvalleb/"
          >
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faLinkedin} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15 }}
            rel="noreferrer"
            href="mailto:edqardv@gmail.com"
          >
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faEnvelope} />
          </motion.a>
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="resume"
          href={resume}
          download
        >
          Resume <FontAwesomeIcon color="white" size="1x" icon={faFilePdf} />
        </motion.a>
      </div>
    </Container>
  );
};

export default Contact;
