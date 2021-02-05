import React, { Component } from 'react';
import './App.css';
import FilmDetails from './Component/FilmDetails'
import FilmList from './Component/FilmList'
import TMDB from './TMDB';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmList films={TMDB.films}/>
          <FilmDetails films={TMDB.films}/>
        </div>
      </div>
    );
  }
}

export default App;