import './App.css';
import React from 'react'
import {Counter} from "./ClassComponents/Counter";
import {SecondCounter} from "./ClassComponents/SecondCounter";
import {Shop} from "./Portals/Shop";

export class App extends React.Component{
  render(){
    return <div>
      {/*<button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>*/}
      {/*<button onClick={this.unmountCounter} disabled={!this.state.mount}>Unount</button>*/}
      {/*{this.state.mount ? <Counter/> : null}*/}
      {/*<Counter/>*/}
      {/*<SecondCounter/>*/}
      <Shop/>
    </div>
  }
}
