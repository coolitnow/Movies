import React, { useEffect, useState } from 'react';
import { Card, Button, Icon, Input } from 'semantic-ui-react'
import './App.css';
import MovieModal from './components/MovieModal';

function Movies() {
  const [movieLibrary, setMovieLibrary] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [typeFecthError, setTypeFetchError] = useState(null)



    //similar to componentDidMount and componentDidUpdate"
    useEffect(() => {
      //update movieLibrary using the movie API
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=APIKEYHERE!&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
        .then(res =>
          res.json())
        .then(result => { 
          setMovieLibrary(result.results)
          setIsLoading(false) },
          (error) => {
            setTypeFetchError(true)
            setIsLoading(false)
          }
        )
}, [])
// render() {
//   let movies = [];
//   for (let i = 0; i < this.state.movie_library.length; i++) {
//     movies.push(<img src={"https://image.tmdb.org/t/p/w500" + this.state.movie_library[i].poster_path} />)
//   }

  return (
    <div style={{padding: 20}}>
      <h1>
        Movies Are Fun. 
      </h1>
      <h2>Most Popular Movies</h2>
      <MovieModal />
    </div>
  );
}


export default Movies;