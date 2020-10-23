/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Adrian Vlase',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'I am a passionate Frontend Developer, always inspired by the idea of better myself every day. Proficient in HTML, SASS, JavaScript, plus modern libraries and frameworks such as React. Passionate about coding, willing to learn continuously, meticulous, ambitious, I always seek to deliver high quality to the assigned projects.',
  paragraphTwo:
    'I am a developer because I genuinely love learning and the absolutely massive scope of computer science is something I find incredibly rewarding and exciting. So, if you have know of any exciting opportunities that you feel would be a good fit please feel free to let me know.',
  paragraphThree:
    'Thanks for taking the time to go over my summary and if you would like to see some of my work check out my portfolio.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'My Portfolio',
    info:
      'This is the current website that contains few of my projects. The website was build with React and Gatsby and it was part of an assignment I was given.',
    info2: 'To see the other projects that I have done, please check my Github repos.',
    url: 'https://github.com/Obi-Webex/Portfolio',
    repo: 'https://github.com/Obi-Webex/Portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'apod.jpg',
    title: 'NASA Apod',
    info:
      'This is a simple webpage that calls an API and returns the Astronomy Picture of the Day.',
    info2:
      'The webpage is build using React and async requests to NASA API. Everyday it shows a wonderful image so, enjoy the view! ',
    url: 'https://obi-webex.github.io/Nasa-Apod/',
    repo: 'https://github.com/Obi-Webex/Nasa-Apod', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yelpy.jpg',
    title: 'Yelpy',
    info:
      'A clone of the Yelp website, built entirely with React creating static components, passing information, setting the state and calling the Yelp API.',
    info2: 'The user can search for restaurants using filters and see a list of desired selection.',
    url: 'https://obi-webex.github.io/Yelpy/',
    repo: 'https://github.com/Obi-Webex/Yelpy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mars-rovers.jpg',
    title: 'Mars Rover Photos',
    info:
      'This is an application I have done in about an hour, as a form of play. Users can see real images taken from Mars by the three rovers: Curiosity, Opportunity and Spirit.',
    info2:
      'This app calls an API from NASA and it was built with Materialize, CSS and API async requests.',
    url: 'https://obi-webex.github.io/Mars-Rovers/',
    repo: 'https://github.com/Obi-Webex/Mars-Rovers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jammming.jpg',
    title: 'Jammming',
    info:
      'This is a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account',
    info2:
      'The website was build with React, using components, passing state, and requests with the Spotify API.',
    url: 'https://obi-webex.github.io/jamming/',
    repo: 'https://github.com/Obi-Webex/jamming', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'adrian.vlase@webexpert-solutions.ro',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AdiVls',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adrian-vlase-680124b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Obi-Webex',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
