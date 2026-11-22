import React from 'react';
import styled from 'styled-components';
import projectdata from '../data/projectdata';

const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;

  .header {
    align-self: flex-start;
    font-size: 3rem;
    margin-top: 7%;
    margin-left: 5%;
  }

  .project-list {
    margin-top: 3%;
  }

  .project {
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10%;

    @media (max-width: 768px) {
      width: 100vw;
    }
  }

  .project-screenshot {
    width: 70%;
    border-radius: 20px;
    margin: 1rem;
    flex-grow: 2;

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

    @media (max-width: 768px) {
      width: 100vw;
      height: 100%;
      margin: 0;
      border-radius: 0;
      box-shadow: none;
      left: 0;
    }
  }

  .project-details {
    padding: 5% 0 0 5%;
  }

  .project-title {
    font-size: 2rem;
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
    margin-bottom: 10px;
  }

  .project-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .project-link {
    text-decoration: none;
    font-weight: 700;
    padding: 10px 13px;
    border-radius: 20px;
    border: 2px solid #0088ff;
    margin: 20px 20px 0 0;
    color: #0088ff;
    transition: all ease-in-out 50ms;

    &:visited {
      color: #0088ff;
    }
    &:hover {
      background-color: #0088ff;
      color: white;
    }
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <h2 className="header">Projects</h2>
      <div className="project-list">
        {projectdata.map(project => (
          <article className="project" key={project.title}>
            <img
              className="project-screenshot"
              src={project.screenshot}
              alt={`${project.title} screenshot`}
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-tools">
                {project.tools.map(tool => (
                  <li className="tool" key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                  href={project.site}
                >
                  Demo
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
          </article>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
