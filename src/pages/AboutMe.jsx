import React from 'react';
import styled from 'styled-components';
import Memoji from '../files/Memoji.png';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  color: #242424;
  flex-direction: column;
  align-items: center;

  .header {
    align-self: flex-start;
    font-size: 3rem;
    margin-left: 5%;
    margin-top: 7%;
  }

  .hero {
    width: 80vw;
    border-radius: 25px;
    padding: 20px;
    margin-top: 3%;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .memoji {
    height: 200px;
    /* flex-grow: 1; */
  }

  .summary {
    flex-grow: 2;
  }

  .greeting {
    font-size: 1.5rem;
  }

  .name {
    font-weight: 700;
  }

  .summary-statement {
    line-height: 2rem;
  }

  .skill-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
  }

  .skill-item {
    margin: 10px;
  }
`;

const AboutMe = () => {
  return (
    <Container id="about-me">
      <h1 className="header">About me...</h1>
      <div className="hero">
        <div className="info">
          <img className="memoji" src={Memoji} alt="Edgar's memoji" />
          <div className="summary">
            <p className="greeting">
              Hello, I'm <span className="name">Edgar Del Valle</span>.
            </p>
            <p className="summary-statement">
              I am a student at California State University San Marcos majoring
              in Computer Science: Computer Information Systems. I am currently
              searching for my first web developer role.
            </p>
            <p className="skill-statement">My skills include:</p>
            <ul className="skill-list">
              <li className="skill-item">HTML</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">ReactJS</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
