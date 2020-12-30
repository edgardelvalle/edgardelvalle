import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  position: fixed;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.95);
  height: 50px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;

  .link-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
  }

  .link-item {
    text-transform: capitalize;

    a {
      color: inherit;
      text-decoration: none;
    }

    a:visited {
      color: inherit;
    }

    a:first-child {
      margin-right: 20px;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <ul className="link-list">
        <li className="link-item">
          <Link to="#contact">Contact</Link>
        </li>
        <li className="link-item">
          <Link to="#projects">Projects</Link>
        </li>
        <li className="link-item">
          <Link to="#about-me">About Me</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
