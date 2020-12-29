import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 300;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .link-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  .link-item {
    text-transform: uppercase;

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
