import axios from "axios";

export function PostStudentData(data){
    return axios.post(`https://studentmentorbackend.herokuapp.com/student`, data)
}
export function GetStudentData(){
    return axios.get(`https://studentmentorbackend.herokuapp.com/students`);
}

export function PostMentorData(data){
    return axios.post(`https://studentmentorbackend.herokuapp.com/mentor`, data)
}
export function GetMentorData(){
    return axios.get(`https://studentmentorbackend.herokuapp.com/mentors`);
}

export function PutStudentById(id, data){
    return axios.put(`https://studentmentorbackend.herokuapp.com/student/${id}`, data)
}
export function GetStudentById(){
    return axios.get(`https://studentmentorbackend.herokuapp.com/students/:id`);
}
