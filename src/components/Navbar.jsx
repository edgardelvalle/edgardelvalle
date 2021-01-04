import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../files/Logo.svg';

const Container = styled.aside`
  position: fixed;
  top: 0;
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
    font-weight: 600;
    font-size: 0.9rem;
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

    a:first-child {
      margin-right: 20px;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <div className="logo-container">
        <a href="#">
          <img className="logo" src={Logo} alt="" />
          <p className="name">
            Edgar<span className="last-name">DelValle</span>
          </p>
        </a>
      </div>
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
