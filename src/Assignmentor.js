import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {GetMentorData, GetStudentData, PutStudentById} from "./Api.js";

function Assignmentor(props){
	var check=true;
	let[studentlist, setstudentlist]=useState([]);
	let[mentorlist, setmentorlist]=useState([]);
	let[studentid, setstudentid]=useState("");
	let[mentorname, setmentorname]=useState("");
    useEffect(async ()=>{
		try{
        let x = await GetStudentData();
		setstudentlist(...studentlist,x.data.answer);
		 console.log(x.data.answer);
		let y = await GetMentorData();
		setmentorlist(...mentorlist, y.data.answer);
		// if(x.data.answer.length!==0)
		// setstudentid(x.data.answer[0]._id);
		if(y.data.answer.length!==0)
		setmentorname(y.data.answer[0].name);
		let stud=x.data.answer.find((i)=>{
			console.log(i, i.assign)
			if(i.assign===false){
			return i;}
		 });
		 if(stud!==undefined)
		 setstudentid(stud._id);
		 console.log(studentid)
	}catch(e){
		console.log(e, "error in studentassign")
	}
    },[]);
    return(
		<>
		<div id="booking" class="section">
		  <div class="section-center">
			  <div class="container">
				  <div class="row">
					  <div class="col-md-7 col-md-push-5">
						  <div class="booking-cta">
							  <h1>Assign Mentor To a Student</h1>
							  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
								  ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
								  Perspiciatis.
							  </p>
						  </div>
					  </div>
					  <div class="col-md-4 col-md-pull-7">
						  <div class="booking-form">
							  <form onSubmit ={async (e)=>{
								  e.preventDefault();
								  console.log(studentid);
								  try{
								  await PutStudentById(studentid, {assign:true, mentor:mentorname});
								  }catch(e){
									  console.log(e);
								  }
								  }}>
								  <div class="form-group">
									  <span class="form-label">Select Student</span>
											  <select class="form-control" onChange={ (e)=>{
												  console.log(e.target.value);
											 setstudentid(e.target.value);
										  }
									  }>
											  {
												  studentlist.map((i, j)=>{
													  if(!i.assign)
													  return 	<option value={i._id}>{i.name+"("+i.class+")"}</option>
												  })
											  }
											  </select>
											  <span class="select-arrow"></span>
								  </div>
								  <div class="form-group">
									  <span class="form-label">Select Mentor</span>
											  <select class="form-control" onChange={ (e)=>{
												  setmentorname(e.target.value);
  
											   }
									  }>
											  {
												  mentorlist.map((i,j)=>{
													  //console.log(i);
													  return 	<option value={i.name}>{i.name}</option>
												  })
											  }
											  </select>
											  <span class="select-arrow"></span>
								  </div>
							  
								  <div class="form-btn">
									  <button class="submit-btn">book</button>
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
export default Assignmentor;