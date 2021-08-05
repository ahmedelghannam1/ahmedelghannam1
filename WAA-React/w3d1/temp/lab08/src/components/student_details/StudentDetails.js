import React from 'react';
import './StudentDetails.css'

const StudentDetails=(props)=>{
    <div className="Student" onClick={props.clicked}>
            <h5>Student</h5>
            <p>id: {props.id}</p>
            <p>name: {props.name}</p>
            <p>major: {props.major}</p>
        </div>

}

export default StudentDetails;