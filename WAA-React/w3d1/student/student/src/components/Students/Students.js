import React, { Component } from 'react';
import Student from '../Student/Student';
import './students.css';

class Students extends Component {
    state = { 
        studentList:[
            {
                id:1,
                name:"Ahmed",
                major:"Engineer"
            },
            {
                id:2,
                name:"Nader",
                major:"Doctor"
            },
            {
                id:1,
                name:"Eslam",
                major:"Banker"
            },


        ]  
    }
    render() { 
        return ( 
                <div className="students">
                    {
                        this.state.studentList.map(student=>
                        <Student    
                            key={student.id} 
                            id={student.id} 
                            sname={student.name} 
                            major={student.major} />)
                    }
                </div>
                 );
    }
}
 
export default Students;