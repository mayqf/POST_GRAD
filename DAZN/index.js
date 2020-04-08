'use strict';

{
  const API_URL = 'https://swapi.co/api/films/';

  async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  }

  function createAndAppend(name, parent, options = {}) {
    const child = document.createElement(name);
    parent.appendChild(child);
    Object.keys(options).forEach(key => {
      const value = options[key];
      if (key === 'text') {
        child.textContent = value;
      } else {
        child.setAttribute(key, value);
      }
    });
    return child;
  }

  function renderError(error) {
    const root = document.getElementById('root');
    createAndAppend('div', root, {
      text: error.message,
      class: 'alert',
    });
  }

  function renderFilms(films) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const filmList = createAndAppend('ul', container, {
      class: 'list-container',
    });
    films.forEach(film => {
        const listItem = createAndAppend('li', filmList, {
          class: 'li',
        });
        
        createAndAppend('h1', listItem, {
          class: 'film-title',
          text: film.title,
        });
        createAndAppend('h3', listItem, {
          class: 'film-date',
          text: film.release_date,
        });
        createAndAppend('p', listItem, {
          class: 'film-crawl',
          text: film.opening_crawl,
        });
      });
  }

  
  async function renderWholePage(url) {
    const root = document.getElementById('root');
    const header = createAndAppend('header', root, {
      id: 'header',
    });
    createAndAppend('h1', header, {
      class: 'header-title',
      text: 'SWAPI (The Star Wars API)',
    });
    const container = createAndAppend('main', root, {
      id: 'container',
    });
    
    try {
      const apiResponse = await fetchJSON(url);
      let films = apiResponse.results;
      console.log(films); 
      renderFilms(films);
    
    } catch (error) {
      renderError(error);
    }
  }

  function main(url) {
    renderWholePage(url);
  }

  window.onload = () => main(API_URL);
}
