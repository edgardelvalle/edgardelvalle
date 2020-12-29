import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .greeting {
    font-size: 1.5rem;
  }

  .name {
    font-weight: 700;
  }

  .skill-list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    justify-content: center;
  }

  .skill-item {
    margin: 10px;
  }

  .summary {
    padding: 2.5%;
  }
`;

const AboutMe = () => {
  return (
    <Container id="about-me">
      <p className="greeting">
        Hello, my name is <span className="name">Edgar Del Valle</span>.
      </p>
      <div className="summary">
        <p className="summary-statement">
          I am a student at{' '}
          <span className="summary-school"> California State University </span>{' '}
          San Marcos with a major in
          <span className="summary-major">
            {' '}
            Computer Science: Computer Information Systems
          </span>
        </p>
        <p className="skill-statement">My skills include:</p>
        <ul className="skill-list">
          <li className="skill-item">HTML</li>
          <li className="skill-item">CSS</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">ReactJS</li>
        </ul>
      </div>
    </Container>
  );
};

export default AboutMe;
