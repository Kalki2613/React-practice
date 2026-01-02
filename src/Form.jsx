import { useState } from "react";
export default function Form(){
    // let [fullName,setFullName]=useState("");
    // let [userName,setUserName]=useState("");
  
    let [formData,setFormData]=useState({
        fullName:"",
        userName:""
    }); 

    // let handleFullName=(event)=>{
    //     setFullName(event.target.value);
    // };

    // let handleUserName=(event)=>{
    //     setUserName(event.target.value);
    // };

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
           return {...currData, [event.target.name]:event.target.value};
        });
    };

    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            userName:""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label> &nbsp;
            <input type="text" placeholder="Enter full Name" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
            <br></br><br></br>
            <label htmlFor="userName">User Name:</label> &nbsp;
            <input type="text" placeholder="Enter user Name" name="userName" id="userName" value={formData.userName} onChange={handleInputChange}/>
            <br></br><br></br>
            <label htmlFor="email">Enter Email:</label> &nbsp;
            <input type="email" placeholder="Enter Email" name="email" id="email"/>
            <br></br><br></br>
            <button type="submit">Submit</button>
        </form>
    );
}