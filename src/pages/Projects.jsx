import React from 'react';
import styled from 'styled-components';
import MovieLibrary from '../images/MovieLibrary.png';
import projectdata from '../data/projectdata';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #f7f7f7;

  .project-list {
    margin-top: 3%;
  }

  .project {
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10%;
  }

  .projects-header {
    font-size: 3rem;
  }

  .project-screenshot {
    width: 60%;
    flex-grow: 4;
    border-radius: 20px;
    margin: 1rem;

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  .project-tools {
    color: #6a6a6a;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
`;

const Projects = () => {
  return (
    <Container id="projects">
      <div className="project-list">
        <h1 className="projects-header">Projects</h1>
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
              <a
                rel="noreferrer"
                target="_blank"
                className="project-link"
                href={project.site}
              >
                Site
              </a>
              <a
                rel="noreferrer"
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
