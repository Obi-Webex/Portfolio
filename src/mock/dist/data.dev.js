"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubButtons = exports.footerData = exports.contactData = exports.projectsData = exports.aboutData = exports.heroData = exports.headData = void 0;

var _nanoid = require("nanoid");

// HEAD DATA
var headData = {
  title: '',
  // e.g: 'Name | Developer'
  lang: '',
  // e.g: en, es, fr, jp
  description: '' // e.g: Welcome to my website

}; // HERO DATA

exports.headData = headData;
var heroData = {
  title: '',
  name: 'Adrian Vlase',
  subtitle: 'Frontend Developer',
  cta: ''
}; // ABOUT DATA

exports.heroData = heroData;
var aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I am a passionate Frontend Developer, always inspired by the idea of better myself every day. Proficient in HTML, SASS, JavaScript, plus modern libraries and frameworks such as React. Passionate about coding, willing to learn continuously, meticulous, ambitious, I always seek to deliver high quality to the assigned projects.',
  paragraphTwo: 'I am a developer because I genuinely love learning and the absolutely massive scope of computer science is something I find incredibly rewarding and exciting. So, if you have know of any exciting opportunities that you feel would be a good fit please feel free to let me know.',
  paragraphThree: 'Thanks for taking the time to go over my summary and if you would like to see some of my work check out my portfolio',
  resume: '' // if no resume, the button will not show up

}; // PROJECTS DATA

exports.aboutData = aboutData;
var projectsData = [{
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: 'Portfolio',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: 'NASA Apod',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'ravenous.jpg',
  title: 'Ravenous',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'project.jpg',
  title: 'NASA Rover Images',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}, {
  id: (0, _nanoid.nanoid)(),
  img: 'jammming.jpg',
  title: 'Jammming',
  info: '',
  info2: '',
  url: '',
  repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up

}]; // CONTACT DATA

exports.projectsData = projectsData;
var contactData = {
  cta: '',
  btn: '',
  email: ''
}; // FOOTER DATA

exports.contactData = contactData;
var footerData = {
  networks: [{
    id: (0, _nanoid.nanoid)(),
    name: 'twitter',
    url: ''
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'codepen',
    url: ''
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'linkedin',
    url: ''
  }, {
    id: (0, _nanoid.nanoid)(),
    name: 'github',
    url: ''
  }]
}; // Github start/fork buttons

exports.footerData = footerData;
var githubButtons = {
  isEnabled: true // set to false to disable the GitHub stars/fork buttons

};
exports.githubButtons = githubButtons;