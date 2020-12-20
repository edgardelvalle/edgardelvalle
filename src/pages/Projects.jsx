import React from 'react';
import styled from 'styled-components';
import MovieLibrary from '../images/MovieLibrary.png';
import projectdata from '../data/projectdata';
import Navbar from '../components/Navbar';

const Container = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;

  .project-list {
    margin-top: 15%;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    margin-bottom: 5%;
  }

  .project-tools {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
  }

  .tool {
    font-weight: 300;
    margin-right: 10px;
  }

  .project-link {
    text-decoration: none;
    color: #0058ff;
    margin-right: 20px;

    :visited {
      color: #0058ff;
    }
  }

  .project-screenshot {
    width: 700px;
    border-radius: 20px;
    transform: translateY(-80px);
    margin-right: 5%;

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
`;

const Projects = () => {
  return (
    <Container>
      <Navbar />
      <div className="project-list">
        {projectdata.map(project => (
          <div className="project">
            <img
              className="project-screenshot"
              src={MovieLibrary}
              alt="Movie Library Screenshot"
            />
            <div className="project-details">
              <h1 className="project-title">{project.title}</h1>
              <ul className="project-tools">
                {project.tools.map(tool => (
                  <li className="tool">{tool}</li>
                ))}
              </ul>
              <a target="_blank" className="project-link" href={project.site}>
                Site
              </a>
              <a
                target="_blank"
                className="project-link"
                href={project.sourcecode}
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
