import React, { useState } from 'react';
import Student from '../../components/student/Student'
import StudentDetails from '../../components/student_details/StudentDetails';
import './Dashboard.css'

const Dashboard = () => {

    const [students, setStudents] = useState(
        [
            { id: 1, name: "Ahmed",major:"Engineer" },
            { id: 2, name: "Nader" ,major:"Doctor"},
            { id: 3, name: "Eslam" ,major:"Banker"},
            { id: 4, name: "Mohamed" ,major:"Engineer"}
        ]
    );
    const studentsList = students.map(s => {
        return <Student
            key={s.id}
            id={s.id}
            name={s.name} 
            major= {s.major}
            clicked= {()=>{
                selectStudentId(s.id);
               
            }}/>
    }
    )

    const [selectedStudentId,selectStudentId] = useState(null);
    const [newName,setNewName] = useState("");
    // const [selectedStudent,selectStudent]=useState(null)

    const changeNameHandler=()=>{
        // students.map(s=>s.id===selectedStudentId?s.name=newName:s.name);
        if(selectedStudentId!=null){
            const updatedList = [...students];
        updatedList[selectedStudentId-1].name = newName;
        setStudents(updatedList)
        }
    }
    const student=<p></p>
    const showOrHideSelectedStudent=()=>{
        if(selectedStudentId!=null){
            // student=<section>
            //     <p> Selected Student Id: {selectedStudentId}</p>
            //     <input type="text" hint="Enter New Name" onChange={(event)=>setNewName(event.target.value)}/>
            //     <button onClick={changeNameHandler}>ChangeName</button>
            // </section>;
            student=<StudentDetails 
            key={selectedStudentId}
            id={selectedStudentId}/>
        }else student= <p>Not Student Selected</p>
    }
    return (
        <div className="Dashboard">
            <section>
                {studentsList.length != 0 ? studentsList : "Nothing To show"}
            </section>
            {showOrHideSelectedStudent}
            <section>
                <p> Selected Student Id: {selectedStudentId}</p>
                <input type="text" hint="Enter New Name" onChange={(event)=>setNewName(event.target.value)}/>
                <button onClick={changeNameHandler}>ChangeName</button>
            </section>;

            <section>
                {student}
            </section>
            
        </div>
    );
}

export default Dashboard;