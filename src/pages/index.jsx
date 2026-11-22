import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../components/GlobalStyles.css';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import SEO from '../components/SEO';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
        <Projects />
        <AboutMe />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
