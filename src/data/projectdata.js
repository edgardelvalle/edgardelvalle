import MovieLibrary from '../images/MovieLibrary.webp';
import PersonalWebsite from '../images/PersonalWebsite.webp';

const projects = [
  {
    title: 'Personal Website',
    tools: ['React', 'styled-components', 'GatsbyJS'],
    site: 'https://www.edgardelvalle.com',
    sourcecode: 'https://github.com/edgardelvalle/edgardelvalle',
    screenshot: PersonalWebsite,
  },
  {
    title: 'Movie Library',
    tools: ['React', 'React-Router', 'Redux', 'Axios'],
    site: 'https://movies.edgardelvalle.com',
    sourcecode: 'https://github.com/edgardelvalle/moviesearch3',
    screenshot: MovieLibrary,
  },
];

export default projects;
