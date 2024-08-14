import React from "react";

import "./InputFields.css";

export default function Form() {
  return (
    <>
      <div className="form">
      <img src="/img.png" alt="" className="people" />

        <div className="form-container">
          <div className="sims">
            <img src="/logo.png" alt="sims" />
            <p>
              BITS {" "}
              <span>
                STUDENT INFORMATION <br />
                MANAGEMENT
              </span>{" "}
              SYSTEM
            </p>
          </div>
          <div className="container">
            <div className="email">
              <input type="text" placeholder="Email" />
              <img src="/email.svg" alt="" />
            </div>
            <div className="password">
              <input type="text" placeholder="Password" />
              <img src="/lock.svg" alt="" />
            </div>
            <div className="btn-container">
              <button className="btns" id="login">Login</button>
              <button className="btns" id="help">Help & Support</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
