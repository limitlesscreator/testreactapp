// import React from 'react'
//
// export class SecondCounter extends React.Component{
//     constructor(props){
//         super(props)
//
//         this.state = {
//             counter: 0
//         }
//
//         this.plus = () => this.setState({counter : this.state.counter + 1})
//     }
//
//     render(){
//         return (
//             <div>{this.state.counter} <br/>
//             <button onClick={this.plus}>plus</button></div>
//         )
//     }
// }

const {useState} = require("react");
export const SecondCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}

            <button onClick={() => setCount(prev => prev + 1)}>plus</button>
        </div>
    )
}