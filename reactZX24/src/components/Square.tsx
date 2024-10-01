import React,  { MouseEvent } from 'react';

type SquareProps = {
    value : Int8Array;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Square = ({ value, onClick }:SquareProps) => {
    return(
    <button onClick={onClick}>
        {value}
    </button>
    )
}

export default Square;