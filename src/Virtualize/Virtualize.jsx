import React, {useState} from 'react';
import {List} from "react-virtualized";

export const Virtualize = () => {
    const elems = [...Array(300000).keys()]
    return (
        <>
            <List
            width={600}
            height={600}
            rowHeight={50}
            rowCount={elems.length}
            rowRenderer={({key, index, style, parent}) => {

                const element = elems[index]
                return <li style={style} key={key}>{element}</li>

            }}
            />
        </>
    );
};
