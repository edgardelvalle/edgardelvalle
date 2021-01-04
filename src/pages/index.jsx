import * as React from 'react';
import Navbar from '../components/Navbar';
import Projects from './Projects';
import './GlobalStyles.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Edgar Del Valle</title>
      </Helmet>
      <Navbar />
      <Contact />
      <Projects />
      <AboutMe />
    </>
  );
};

export default IndexPage;
