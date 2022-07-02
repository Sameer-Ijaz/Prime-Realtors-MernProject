import React from 'react';
import Footer from './footer';
import axios from 'axios';

import { Navigate, useNavigate } from 'react-router-dom';

import {Link} from "react-router-dom";
const Login = () => {

  const [email,setEmail] = React.useState();
  const [password,setPassword] = React.useState();
  const navigate = useNavigate();
 
    return ( 
      
     
      <div>

      <div className="container-fluid">

      <div className="row">
      </div>
      </div>
      
      <img id="myimg" src="Images/pix.jpg" alt=""/>
      
      
      <div className="row">
      
      <div className="col-12">
          
      
      
      <h3 id="title2">Admin Login </h3>
      
      </div>
      
      </div>
      
      <div className="container mt-5 p-5 rounded" id="cred-div">
      <div className="row">                  
      <div className="col-12" id="cred1">
      
      
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>
           
            <div className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" placeholder="Enter Your Email" onChange={(e)=>{
                setEmail(e.target.value);
              }} />
              <label className="form-label" for="loginName"></label>
            </div>
      
          
            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" className="form-control" placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value);
              }} />
              <label className="form-label" for="loginPassword"></label>
            </div>
      
         
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
             
                
              </div>
      
             
            </div>
      
          
         <button type="button" className="btn btn-primary btn-block mb-4 " onClick={(e)=>{
            axios.post("http://localhost:8000/api/users/login",{email,password}).then(token=>{
              
              localStorage.setItem("token",token);
              alert("Logged In Successfully");

              navigate('/');
              window.location.reload();
              
              
            }).catch(err=>{
              alert("Invalid Credentials");
              console.log(err);
            })
           }}>Sign in </button>  
          
        
            
            <div className="text-center">
              <p>Not a member? <a href="/register">Register</a></p>
            </div>
          </form>
        </div>
      
      </div>
      
      
      </div>
      
      
           </div>
                       
          </div>
<div className='mt-4'>
          <Footer/>
          </div>

          </div>
      

    );
}
 
export default Login;