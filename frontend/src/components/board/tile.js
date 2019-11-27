import React, { useState } from 'react';

/**
 * 
 * @param {*} props 
 * @param xPos The x position of the tile.
 * @param yPos The y position of the tile.
 * @param finishMove A function that is called when a piece is dropped in tile.
 */
export default function Tile(props) {
    const [xPos, updateXPos] = useState(props.xPos);
    const [yPos, updateYPos] = useState(props.yPos);

    const tileStyle = {
        gridColumnStart: props.xPos,
        gridRowStart: props.yPos,
    }

    return(
        <div 
            onClick={(e) => {console.log(String(yPos) + ", " + String(xPos))}}
            style={tileStyle}
        />
    );
}