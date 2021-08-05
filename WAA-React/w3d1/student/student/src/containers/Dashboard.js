import React, { Component } from 'react';
import Students from '../components/Students/Students';
import './dashboard.css'
class DashBoard extends Component {
    state = {  }
    render() { 
        return ( <div className="dashboard">
            <Students/>
            <section>
                <input type='text' name='newName'/>
                <button te value='Change Name'/>
            </section> 
        </div> );
    }
}
 
export default DashBoard;