import logo from './logo.svg';
import './App.css';
import {useState, useContext, Profiler, useEffect} from "react";
import Createstudent from "./Createstudent.js";
import Creatementor from "./Creatementor.js";
import Assignstudent from "./Assignstudent.js";
import Assignmentor from "./Assignmentor.js";
import Listmentor from "./Listmentor.js";
import Mentorlist from "./Mentorlist.js";
function App() {
 
  return (
    <>
    <Createstudent></Createstudent>
    <Creatementor></Creatementor>
    <Assignstudent></Assignstudent>
    <Assignmentor></Assignmentor>
    <Mentorlist></Mentorlist>
</>
  );
}

export default App;
