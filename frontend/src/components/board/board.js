import React, { useState } from 'react';

import './board.css';
import Tile from './tile';
import Piece from './piece';

function initTiles() {
    const tiles = [];
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++){
            tiles.push(<Tile key={j + 8*i} xPos={i} yPos={j}/>)
        }
    }
    return tiles
}

export default function Board() {
    const [board, updateBoard] = useState(initTiles());
    const [pieces, updatePieces] = useState([]);
    return(
        <div className="board">
            {board} 
            <Piece 
                imagePath="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/90px-Chess_klt45.svg.png" 
                xPos={2} 
                yPos={3}
            />
            {/* <div className="piece"></div> */}
        </div>
    );
}