import './App.css';
import React,
{ useState } from 'react';
import './MovieModal.css'
import MovieModal from './MovieModal'

class Movies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movie_library: [],
            show: true,

        }

    }

    componentDidMount() {
        // this runs once this page has loaded
        // this only runs once, unlike the constructor that runs twice, for whatever reason
        this.loadMovies();
    }

    loadMovies() {
        // go to that url
        // get the results
        // put them into this.state.movie_library

        fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
            .then(res =>
                res.json())
            .then(result => { this.setState({ movie_library: result.results }) }
            );
    }
    
  
    setShow = () => {
        
    }

    render() {


        return (
            <div className="App">
                {/* onClick calls the setShow function to change show's value to true, thus "showing" the modal. */}
                <button onClick={() => this.setState({show: true})}>
                    Show MovieModal
                </button>
                {/* onClose is the function passed to MovieModal. onClick in Modal calls onClose which changes show to false, thus closing the Modal */}
                <MovieModal onClose={() => this.setState({show: false })} show={this.state.show}>
                    <p>This is modal body</p>
                </MovieModal>
            </div>
        );
    }
}

export default Movies;