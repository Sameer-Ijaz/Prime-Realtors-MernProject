
import React from 'react';
import Footer from './footer';
import axios from 'axios';
const Register = () => {


  const[name,setName] = React.useState();
  const[email,setEmail] = React.useState();
  const[password,setPassword] = React.useState();


    return (  

      <div>

      <div className="container-fluid">

      <div className="row">
      </div>
      </div>
      
      <img id="myimg" src="Images/pix.jpg" alt=""/>
      
      
      <div className="row">
      
      <div className="col-12">
          
      
      <h2 id="title1" className='mt-3'>Finding Your Dream Property?</h2>
      <h3 id="title2"> Sign Up To Continue</h3>
      
      </div>
      
      </div>
      
      <div className="container mt-5 p-5 rounded" id="cred-div">
      <div className="row">
                           
      <div className="col-12" id="cred1">
      
          
          
   
     
      
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>
           
      
          
            <div className="form-outline mb-4">
              <input type="name" id="loginName" className="form-control" placeholder="Enter Your Name" onChange={(e)=>{
                setName(e.target.value);
              }} />
              <label className="form-label" for="loginName"></label>
            </div> 
            <div className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" placeholder="Email or Phone Number" onChange={(e)=>{
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
              axios.post("http://localhost:8000/api/users/register",{name,email,password}).then(res=>{
                console.log("Signed Up")
              }).catch(err=>{
                console.log(err);
              })
            }} >Sign Up</button>
      
            
          
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
 
export default Register;