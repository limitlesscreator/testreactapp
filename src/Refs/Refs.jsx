import React, {useEffect, useRef, useState} from 'react';

export const Refs = () => {
    let [changeState, setChangeState] = useState(false)
    let someRef = useRef()
    let focusOnInput = () => {
        someRef.current.focus()
    }


    // don't work like this:D
    let obj = {
        rendered: 0
    }
    useEffect(() => {
        obj.rendered += 1
    })
    console.log('state changed')
    return (
        <>
            rendered {obj.rendered}
            <br/>
            <button onClick={() => setChangeState(prev => !prev)}>change state</button>
             <button onClick={focusOnInput}>focus</button> <input ref={someRef} type="text"/>
        </>
    );
};
