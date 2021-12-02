import React, { useEffect } from 'react';

const MovieModal = props => {
    

    return(
        //onClick here allows clicking outside of the modal to close the modal by calling onClose from App.js. 
        //if props.show is true, then we will have an extra className called .show which will animate via css
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        {/* stopPropagation here stops the closing on click function to be called until it is called again in its specific inner div */}
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>{props.title}</h4>
                </div>
                <div className='modal-body'>
                    {props.children}
                </div>
                <div className='modal-footer'>
                {/*onClick here calls the onClose function in App*/}
                    <button className='button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default MovieModal