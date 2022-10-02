import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/Portals/Item.module.sass';

import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {Provider} from "react-redux";

import index from "./Redux";

export const Context = React.createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Context.Provider value={{name: 'vova'}}>
     <Provider store={index}>
         <App />
     </Provider>
 </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
