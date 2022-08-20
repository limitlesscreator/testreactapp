import React from 'react';
import {createPortal} from "react-dom";

export const Description = (props) => {
    const {price, desc} = props

    return createPortal(
        <>
            <p>Price: {price}</p>
            <p>Description: {desc}</p>
        </>,
        document.querySelector('#itemDescription')
    )
};
