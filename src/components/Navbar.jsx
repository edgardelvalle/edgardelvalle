import React from 'react';
import styled from 'styled-components';
import Logo from '../files/Logo.svg';

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.95);
  height: 7vh;
  min-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .logo-container {
    margin-left: 20px;

    .name {
      color: #353535;
      font-weight: 700;
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      font-size: 1.5rem;
      letter-spacing: -1px;

      .last-name {
        font-weight: 300;
      }

      @media screen and (max-width: 700px) {
        display: none;
      }
    }

    .logo {
      margin-right: 10px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
    }
  }

  .link-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
  }

  .link-item {
    color: #484848;
    font-weight: 500;
    font-size: 0.9rem;
    margin-right: 20px;
    white-space: nowrap;
    text-transform: uppercase;
    transition: ease 0.1s;

    a {
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      color: #767676;
    }

    a:visited {
      color: inherit;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <div className="logo-container">
        <a href="#top" aria-label="Edgar Del Valle, back to top">
          <img className="logo" src={Logo} alt="" />
          <p className="name">
            Edgar<span className="last-name">DelValle</span>
          </p>
        </a>
      </div>
      <nav>
        <ul className="link-list">
          <li className="link-item">
            <a href="#contact">Contact</a>
          </li>
          <li className="link-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="link-item">
            <a href="#about-me">About Me</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
