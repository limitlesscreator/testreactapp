import React from 'react';

export const ChildComponent = React.memo(props => {
    console.log('childComponent rerender')
    // console.log(this.props)
    return (
        <div>
            {/*<div onClick={() => this.incFunc()}>*/}
            <br/>
            <br/>
            bellow child component
            <br/>
            {/*child state {this.state.inc}*/}
            <br/>
            {/*count from parent: {this.props.count}*/}
        </div>
    );
})

