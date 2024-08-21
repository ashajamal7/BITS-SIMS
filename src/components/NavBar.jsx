import React from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom';


function NavBar() {
   

  return (
    <div className="container1">
      <div className="header">
        <img src="/img2.png" alt="" />
        <h1 className="registar">
          BITS-SIS
          <br />
          <span>@registar</span>
        </h1>
      </div>
      <hr />
      <div className="calendar">
        <p>Calender Management</p>
      </div>
      <div className="box">
      <Link to='/academic'  className='navbutts'><button
          className="academic"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}

        >
          Academic Time Line <img src="/calendar.png" alt="" />
        </button></Link>
      </div>
      <div className="records">
        <p>Student Record</p>
      </div>
      <div className="info">
        <div className="box">
        <Link to='/grades'  className='navbutts'><button
            className="student"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            Student Grades <img src="/grade.png" alt="" />
          </button></Link>
        </div>
        <div className="box">
        <Link to='/course' className='navbutts'> <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          Course Eligibility<img src="course.png" alt="" />
          </button></Link> 
        </div>
        <div className="records">
          <p>Student Promotion</p>
        </div>
        <div className="box">
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            Student Financial Records <img src="/promotion.png" alt="" />
          </button>
        </div>
        <div className="box">
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            Credit Hour Rate <img src="/dollar.png" alt="" />
          </button>
        </div>
        <div className="box">
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            Payment Information <img src="/dollar2.png" alt="" />
          </button>
        </div>
        <div className="logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
