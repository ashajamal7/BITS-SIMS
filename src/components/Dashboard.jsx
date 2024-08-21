import React from 'react'
import './Dashboard.css'
import NavBar from './NavBar'
function Dashboard() {
  return (
    <div className="dashboard">
         <NavBar/>
         <div className="container2">
          <div className="header1">
            <h1>Registrar Dashboard</h1>
            <h2 className='username'>Asha Jamal<span>Registrar Office</span></h2>
          </div>
          <hr/>
          <div className="title">
            <p>Financial Report for 2023</p>
          </div>
          <div className="users">
            <div className="active userbox">
              <p>Active Users</p>
              <div className="total">
              <h1>235</h1>
              <h2>Total Users</h2>
              </div>
             </div>
             <div className="undergraduate userbox">
              <p>Undergraduate</p>
              <div className="total">
              <h1>180</h1>
              <h2>Total Users</h2>
              </div>
             </div>
             <div className="graduate userbox">
              <p>Post Graduate</p>
              <div className="total">
              <h1>55</h1>
              <h2>Total Users</h2>
              </div>
             </div>
          </div>
          <div className="installment">
            <div className="ins-type">
              <p>Full Installment<br/>Complete</p>
              <div className="total">
                <h1>105</h1>
                <h2>Total Users</h2>
              </div>
            </div>
            <div className="ins-type">
              <p>First Installment<br/>Complete</p>
              <div className="total">
                <h1>95</h1>
                <h2>Total Users</h2>
              </div>
            </div>
            <div className="ins-type">
              <p>Incomplete<br/>Payement</p>
              <div className="total">
                <h1>35</h1>
                <h2>Total Users</h2>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="actions">
              <h1>Recent Action</h1>
              <p className='update'>Uploaded student grades for 2023 semester 1<span>Thu,28,2023</span></p>
              <p className='update'>Uploaded student gardes for 2022 semester 2<span>Thu,25,2023</span></p>
              <p className='update'>Edited student grade for UGR/SWE/0001/21<span>Thu,23,2023</span></p>
              <p className='update'>Added student grade for UGR/SWE/0001/21<span>Thu,23,2023</span></p>
              <p className='update'>Deleted student grade for UGR/SWE/0001/21<span>Thu,22,2023</span></p>
            </div>
              <div className="image">
                <img src="/img1.jpg" alt="" />
             </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default Dashboard
