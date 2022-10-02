import React, {useContext, useReducer} from 'react';
import {Context} from "../../index";


const initState = {
    count: 0
}

const reducerCount = (state,action) => {
    switch (action.type){
        case "INC":
            return {...state, count: state.count + 1}
        case "DEC":
            return {...state, count: state.count - 1}
    }
}

export const CounterReduce = () => {
    const [state, dispatch] = useReducer(reducerCount, initState)

    const getName = useContext(Context)
    return (
        <>
            state {state.count}

            <button onClick={() => dispatch({type: "INC"})}>Inc</button>
            <button onClick={() => dispatch({type: "DEC"})}>Dec</button>
            name: {getName.name}
        </>
    );
};
