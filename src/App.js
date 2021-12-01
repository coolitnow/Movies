import logo from './logo.svg';
import './App.css';
import React, 
  {useState} from 'react';
import Movies from './Movies.js';
import './MovieModal.css'
import MovieModal from './MovieModal'

function App() {
  //declare new state var to control whether Modal is shown or not. Var named show, useState sets the default value of this state car to "false". setShow is the function that will update show
  const [show, setShow] = useState(false)

  return (
    <div className="App">
       {/* onClick calls the setShow function to change show's value to true, thus "showing" the modal. */}
        <button onClick={() => setShow(true) }>
          Show MovieModal
        </button>
        {/* onClose is the function passed to MovieModal. onClick in Modal calls onClose which changes show to false, thus closing the Modal */}
        <MovieModal onClose={() => setShow(false)} show={show}/>
    </div>
  );
}

export default App;
