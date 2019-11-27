import React, { useState } from 'react';

import './board.css';

/**
 * 
 * @param {*} props 
 * @param imagePath The string path for the piece image.
 */
export default function Piece(props) {

    const pieceStyle = {
        backgroundImage: 'url(' + props.imagePath + ')',
        // backgroundImage: "url('../../assets/pieces/white_king.png')",
        // backgroundImage: `url(${require(`${props.imagePath}`)})`,
        // backgroundImage: `url(require("${props.imagePath}"))`,
        gridColumnStart: props.xPos,
        gridRowStart: props.yPos,
        // width: "60px",
        // height: "60px",
    }
    console.log(props.imagePath);

    return(
        <div 
            className="piece" 
            style={pieceStyle}
            draggable={true}
        />
    );
}