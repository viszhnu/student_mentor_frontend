import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Listmentor from "./Listmentor";


function Mentorlist(props){
	var check=true;
	let[user, setdata]=useState([]);
	let[username, setusername]=useState("");
    let[useramenities, setuseramenities]=useState("");
	let[hname, sethname]=useState("");
    let[price, setprice]=useState("");
	let[person, setperson]=useState(0);
    let usedata={
        name:username, amenities:useramenities,hallname:hname, hallprice: price, maxperson:person
    }
    useEffect(async ()=>{
    //   let x= await GetUserData();
    //   setdata(...user,x.data)
	//   sethname(x.data[0].name)
	//   setuseramenities(x.data[0].amenities);
	//   setprice(x.data[0].hallprice);
	//   setperson(x.data[0].persons);
    },[]);
    return(
		<>
		<div id="booking" class="section">
		  <div class="section-center">
			<div class="container">
			  <div class="row">
				<div class="col-md-7 col-md-push-5">
				  <div class="booking-cta">
					<h1>Student List with Mentor</h1>
					<p>
					  Lorem ipsum dolor sit amet consectetur adipisicing elit.
					  Animi facere, soluta magnam consectetur molestias itaque ad
					  sint fugit architecto incidunt iste culpa perspiciatis
					  possimus voluptates aliquid consequuntur cumque quasi.
					  Perspiciatis.
					</p>
				  </div>
				</div>
				<div class="col-md-5 col-md-pull-7">
			      <Listmentor></Listmentor>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </>
    );
}
export default Mentorlist;