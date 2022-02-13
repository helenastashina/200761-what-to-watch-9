import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  currentFilm: {
    name: 'The Grand Budapest Hotel',
    picture: 'img/bg-the-grand-budapest-hotel.jpg',
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    genre: 'Drama',
    year: '2014',
  },
  filmsList: [
    {
      name: 'Fantastic Beasts: The Crimes of Grindelwald',
      url: 'film-page.html',
      poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    },
    {
      name: 'Bohemian Rhapsody',
      url: 'film-page.html',
      poster: 'img/bohemian-rhapsody.jpg',
    },
    {
      name: 'Macbeth',
      url: 'film-page.html',
      poster: 'img/macbeth.jpg',
    },
    {
      name: 'Aviator',
      url: 'film-page.html',
      poster: 'img/aviator.jpg',
    },
    {
      name: 'We need to talk about Kevin',
      url: 'film-page.html',
      poster: 'img/we-need-to-talk-about-kevin.jpg',
    },
    {
      name: 'What We Do in the Shadows',
      url: 'film-page.html',
      poster: 'img/what-we-do-in-the-shadows.jpg',
    },
    {
      name: 'Revenant',
      url: 'film-page.html',
      poster: 'img/revenant.jpg',
    },
    {
      name: 'Johnny English',
      url: 'film-page.html',
      poster: 'img/johnny-english.jpg',
    },
    {
      name: 'Shutter Island',
      url: 'film-page.html',
      poster: 'img/shutter-island.jpg',
    },
    {
      name: 'Pulp Fiction',
      url: 'film-page.html',
      poster: 'img/pulp-fiction.jpg',
    },
    {
      name: 'No Country for Old Men',
      url: 'film-page.html',
      poster: 'img/no-country-for-old-men.jpg',
    },
    {
      name: 'Snatch',
      url: 'film-page.html',
      poster: 'img/snatch.jpg',
    },
    {
      name: 'Moonrise Kingdom',
      url: 'film-page.html',
      poster: 'img/moonrise-kingdom.jpg',
    },
    {
      name: 'Seven Years in Tibet',
      url: 'film-page.html',
      poster: 'img/seven-years-in-tibet.jpg',
    },
    {
      name: 'Midnight Special',
      url: 'film-page.html',
      poster: 'img/midnight-special.jpg',
    },
    {
      name: 'War of the Worlds',
      url: 'film-page.html',
      poster: 'img/war-of-the-worlds.jpg',
    },
    {
      name: 'Dardjeeling Limited',
      url: 'film-page.html',
      poster: 'img/dardjeeling-limited.jpg',
    },
    {
      name: 'Orlando',
      url: 'film-page.html',
      poster: 'img/orlando.jpg',
    },
    {
      name: 'Mindhunter',
      url: 'film-page.html',
      poster: 'img/mindhunter.jpg',
    },
    {
      name: 'Midnight Special',
      url: 'film-page.html',
      poster: 'img/midnight-special.jpg',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App currentFilm={Settings.currentFilm} filmsList={Settings.filmsList} />
  </React.StrictMode>,
  document.getElementById('root'));
