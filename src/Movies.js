// import React from 'react';
// import './App.css';

// class Movies extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         movie_library: [],
//       }
  
//     }
  
//     componentDidMount() {
//       // this runs once this page has loaded
//       // this only runs once, unlike the constructor that runs twice, for whatever reason
//       this.loadMovies();
//     }
  
//     loadMovies() {
//       // go to that url
//       // get the results
//       // put them into this.state.movie_library
  
//       fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
//         .then(res =>
//           res.json())
//         .then(result => { this.setState({ movie_library: result.results }) }
//         );;
//     }
    

    
//     render() {
      
  
//       return (
//         <div className="App">
//           Put movies here
//           {movies}
//         </div>
//       );
//     }
//   }
  
//   export default Movies;