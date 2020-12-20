import * as React from 'react';
import styled from 'styled-components';
import { animated, useTrail } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .full-name {
    color: #2f2f2f;
    text-transform: uppercase;
    font-size: 9vw;
    margin: 0;
    text-align: center;
  }

  .last-name {
    font-weight: 300;
    display: block;
    font-size: 6.4vw;
  }

  .description {
    text-transform: uppercase;
    font-size: 1vw;
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
`;

const IndexPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="hero">
        <h1 className="full-name">
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
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faLinkedinIn} />
          </a>
          <a rel="noreferrer" href="mailto:edqardv@gmail.com">
            <FontAwesomeIcon color="#2f2f2f" size="3x" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default IndexPage;
