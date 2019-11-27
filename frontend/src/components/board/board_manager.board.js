import React, { useState } from 'react';

import Board from './board.js';

/**
 * A React component that renders an interactable chess board.
 * 
 * 
 * @param {*} props Contains the following parameters
 * @param onMove A required lambda function that is called every time a user tries to move a piece with parameters (piece, startLocation, endLocation).
 * @param makeMove An option event emitter that recieves the. 
 */
export default function BoardManager(props) {

    return(
        <div>
            <Board/>
        </div>
    );

}
