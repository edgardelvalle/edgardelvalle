import * as React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Projects from './Projects';
import './GlobalStyles.css';
import AboutMe from './AboutMe';
import Contact from './Contact';

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
