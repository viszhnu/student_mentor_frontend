import { useState, useContext, Profiler, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {PostStudentData} from "./Api.js";
function Createstudent() {
  let [studentname, setstudentname] = useState("");
  let [studentfathername, setfathername] = useState("");
  let [studentage, setage] = useState(0);
  let [stdclass, setstdclass] = useState(0);
  let studentdetails={
     name:studentname, fathername:studentfathername, age:studentage, class:stdclass, assign:false, mentor:"nil"
  }
  return (
    <>
      <div id="booking" class="section">
        <div class="section-center">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-md-push-5">
                <div class="booking-cta">
                  <h1>Create Student</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi facere, soluta magnam consectetur molestias itaque ad
                    sint fugit architecto incidunt iste culpa perspiciatis
                    possimus voluptates aliquid consequuntur cumque quasi.
                    Perspiciatis.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-md-pull-7">
                <div class="booking-form">
                  <form onSubmit={async (e) => {
                      e.preventDefault();
                      await PostStudentData(studentdetails);
                      setfathername("");
                      setstudentname("");
                      setstdclass(0);
                      setage(0);
                  }}>
                    <div class="form-group">
                      <span class="form-label">Enter Student Name</span>
                      <input
                        class="form-control"
                        type="text"
                        size="3"
                        value={studentname}
                        required
                        id="rname"
                        onChange={(e) => {
                          setstudentname(e.target.value);
                        }}
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <span class="form-label">Enter Father's Name</span>
                          <input
                            class="form-control"
                            type="text"
                            value={studentfathername}
                            required
                            onChange={(e) => {
                              setfathername(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <span class="form-label">EnterClass</span>
                          <input
                            class="form-control"
                            type="number"
                            value={stdclass}
                            required
                            onChange={(e) => {
                              setstdclass(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <span class="form-label">Enter Age</span>
                          <input
                            class="form-control"
                            type="number"
                            value={studentage}
                            required
                            onChange={(e) => {
                              setage(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-btn">
                      <button class="submit-btn">create</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createstudent;
