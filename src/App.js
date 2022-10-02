import './App.css';
import React, {useEffect, useState} from 'react'
import {Refs} from "./Refs/Refs";
import car from '../src/img/car.jpg'
import {ChildComponent} from "./ClassComponents/childComponent";
import {SomeChild} from "./SomeChild";
import {Virtualize} from "./Virtualize/Virtualize";
import {Counter} from "./ClassComponents/Counter";

import {connect, useDispatch, useSelector} from "react-redux";
import {CounterReduce} from "./Hooks/useReducer/counterReduce";
import NewCounter from "./Redux/NewCounter";



export function App() {
    // const numberOfCounter = useSelector(state => state.count)
    const dispatch = useDispatch()


    return (
        <div >

            <br/>
            <NewCounter name={'Vova'}/>
            {/*<button onClick={() => dispatch({type: "INC_COUNTER"})}>+</button>*/}
            {/*<br/>*/}
            {/*<button onClick={() => fetchPosts()}>fetch users</button>*/}

            {/*<CounterReduce/>*/}
        </div>

    )

}