import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import resume from '../files/Edgar Del Valle_Resume.pdf';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;

  .hero {
    display: flex;
    flex-direction: column;
  }

  .first-name {
    font-size: 10rem;
    color: #2f2f2f;
    text-transform: uppercase;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 6rem;
    }
  }

  .last-name {
    font-size: 7rem;
    font-weight: 300;
    display: block;

    @media (max-width: 768px) {
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
    transition: all ease-in-out 100ms;

    :hover {
      background-color: #50adff;
      transform: translateY(-5px);
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
    }
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <div className="hero">
        <h1 className="first-name">
          Edgar <span className="last-name">Del Valle</span>
        </h1>

        <span className="description">Web Developer</span>
        <div className="contact">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/edgardelvalle"
          >
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faGithub} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/edgardelvalleb/"
          >
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faLinkedin} />
          </a>
          <a rel="noreferrer" href="mailto:edqardv@gmail.com">
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faEnvelope} />
          </a>
        </div>
        <a className="resume" href={resume} download>
          Resume <FontAwesomeIcon color="white" size="1x" icon={faFilePdf} />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
