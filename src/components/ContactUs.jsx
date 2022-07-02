import React from 'react';
import Footer from './footer';
import axios from 'axios';

const Contact = () => {
    
    
    const [name,setName] = React.useState();
    const [email,setEmail] = React.useState();
    const [question,setQuestion] = React.useState()
    
    
    return ( 
        <div>
            <div className='container mx-auto'>
            <h1 id='dreamHome' className='mt-3'>Contact Us</h1>
            <div class="form-group mx-auto">
              <label for=""></label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Name" onChange={(e)=>{
               setName(e.target.value);
           }} />


              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email" onChange={(e)=>{
               setEmail(e.target.value);
           }} />


              <textarea id="subject" name="subject" placeholder="Write something.." onChange={(e)=>{
               setQuestion(e.target.value);
           }} ></textarea>

      
<a name="" id="" class="btn btn-primary" href="#" role="button" onClick={(e)=>{
               axios.post("http://localhost:8000/api/Contacts",{name,email,question}).then(res=>{
                  alert("Query Sent Successfully");

               }).catch(err=>{
                   console.log(err);
               })
           }}>Add Listing</a>
            
            </div>
            </div>

<div className='mx-auto mt-5'>
    <Footer/>
</div>
        </div>
     );
}
 
export default Contact;