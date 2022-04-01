import React, { Component } from 'react';
import './Student.css'

class Student extends Component {
    state = { 
        id:this.props.id,
        sname:this.props.sname,
        major:this.props.major
  }
    render() { 
        return ( <div className ='Student'>
            <p>{this.state.id}</p>
            <p>{this.state.sname}</p>
            <p>{this.state.major}</p>
            <p>{this.state.id}</p>
        </div > );
    }
}
 
export default Student;