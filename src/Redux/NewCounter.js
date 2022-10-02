import {connect} from "react-redux";
import React from "react";

export function NewCounter(props){
    console.log(props)
    return (
        <div>counter: {props.numberOfCounter}
        <br/>
            <button onClick={() => props.increment({type: 'INC_COUNTER'})}>inc</button>
            <br/>
            {props.ownProps.name}

        </div>
    )
}

function mapStateToProps(state,ownProps) {
    console.log('state')
    return {
        numberOfCounter: state.count,
        ownProps
    }
}

function mapDispatchToProps(dispatch){
    let dispatchFunction = () => dispatch({type: 'INC_COUNTER'})
    return {increment: dispatchFunction}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCounter)