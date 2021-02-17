import React from 'react';

function Subject(props){

    return (
        <div className="card">
            <p>This is a subject! It is called {props.title} and it is in {props.year} of the course. The lecturer is <span className="lecturer">{props.lecturer}</span></p>
            <p><em>{props.children}</em></p>
        </div>
 
    )
}

export default Subject;