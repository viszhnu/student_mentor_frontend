import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetStudentData } from "./Api";
function Listmentor(){
    let[user, setdata]=useState([]);
    
    useEffect(async ()=>{
      try{
      let x = await GetStudentData();
      setdata(...user, x.data.answer)
    }catch(e){
      console.log(e);
    }
    },[]);
    return(
        <div class="container-fluid">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>FatherName</th>
                    <th>Class</th>
                    <th>MentorName</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>Name</th>
                  <th>Father Name</th>
                    <th>Class</th>
                    <th>MentorName</th>
                  </tr>
                </tfoot>
                <tbody>
                  {user.map((e) => {
                    console.log(e)
                    return (
                      <tr>
                        <td>
                          {e.name}
                        </td>
                        <td>{e.fathername}</td>
                        <td>{e.class}</td>
                        <td>{e.mentor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Listmentor;