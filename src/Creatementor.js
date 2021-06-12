import { useState, useContext, Profiler, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PostMentorData } from "./Api";
function Creatementor() {
  let [mentorname, setmentorname] = useState("");
  let [mentorsubject, setsubject] = useState("");
  let [mentorage, setage] = useState(0);
  let mentordetails ={
    name:mentorname, subject:mentorsubject, age:mentorage
  }
  return (
    <>
    <div id="booking" class="section">
      <div class="section-center">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-md-push-5">
              <div class="booking-cta">
                <h1>Create Mentor</h1>
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
                      await PostMentorData(mentordetails);
                      setmentorname("");
                      setsubject("");
                      setage(0);
                }}>
                  <div class="form-group">
                    <span class="form-label">Enter Mentor Name</span>
                    <input
                      class="form-control"
                      type="text"
                      size="3"
                      value={mentorname}
                      required
                      id="rname"
                      onChange={(e) => {
                        setmentorname(e.target.value);
                      }}
                    />
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <span class="form-label">Enter Subject</span>
                        <input
                          class="form-control"
                          type="text"
                          value={mentorsubject}
                          required
                          onChange={(e) => {
                            setsubject(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <span class="form-label">Enter Age</span>
                        <input
                          class="form-control"
                          type="number"
                          value={mentorage}
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

export default Creatementor;
