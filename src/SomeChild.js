import React from 'react';

export const SomeChild = (props) => {
    let someDataForApp = 5
    return (
        <>
            <br/>
            <button onClick={() => props.getTheValue(someDataForApp)}>give App number 5</button>
        </>
    );
};
