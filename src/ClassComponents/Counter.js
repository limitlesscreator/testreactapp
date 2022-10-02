import * as React from "react";
import {ChildComponent} from "./childComponent";

export class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            someFalseOrTrue: false
        }


        this.changeParent = () => {
            this.setState({someFalseOrTrue: !this.state.someFalseOrTrue})
            console.log(this.state.someFalseOrTrue)
        }

        // this.increment = this.increment.bind(this)
    }

    increment = (e) => {
        console.log(e)
        this.setState((prevState) => (
            {count: prevState.count + 1}
        ))
        this.setState((prevState) => (
            {count: prevState.count + 1}
        ))
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>{this.state.count}</button>
                {/*<button onClick={() => this.changeParent()}>change Parent</button>*/}
                {/*<ChildComponent count={this.state.count}/>*/}
            </div>
        )
    }
}