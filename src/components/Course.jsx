import React from 'react'
import './Course.css'
import NavBar from './NavBar'
function Course() {
  return (
    <div>
        <div className="dashboard">
          <NavBar/>
         <div className="container2">
            <div className="header1">
                <h1>Registrar Dashboard</h1>
                <h2 className='username'>Asha Jamal<span>Registrar Office</span></h2>
            </div>
            <hr/>
            <div className="title">
                <div className="grade-title">
                    <h1>Course Eligibility</h1>
                </div>
            </div>
            <div className="options">
                <div className="year-option">
                    <select>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                    </select>
                </div>
                <div className="sem-option">
                    <select>
                        <option>Semester One</option>
                        <option>Semester Two</option>
                    </select>
                </div>
               <div className="grade-option">
                   <select>
                        <option>Undergraduate</option>
                        <option>Post-Graduate</option>
                    </select>
               </div>
               <div className="time-option">
                    <select>
                        <option>Regular</option>
                    </select>
                </div>
                <div className="level-option">
                    <select>
                        <option>Level One</option>
                        <option>Level Two</option>
                        <option>Level Three</option>
                    </select>
                </div>
                <div className="buttons">
                    <div className="filter">
                        <button>Filter<img src="/filter.png" alt="" /></button>
                    </div>
                    <div className="clear">
                        <button>Clear <img src="/clear.png" alt="" /></button>
                    </div>
            </div>
          
            </div>
            </div>
          </div>

    </div>
  )
}

export default Course
