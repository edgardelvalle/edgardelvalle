import * as React from 'react';
import Navbar from '../components/Navbar';
import Projects from './Projects';
import './GlobalStyles.css';
import AboutMe from './AboutMe';
import Contact from './Contact';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Projects />
      <AboutMe />
    </>
  );
};

export default IndexPage;
