import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
const AdminPanelUpdate = () => {


    const [name,setName] = React.useState();
    const [city,setLocation] = React.useState();
    const [price,setPrice] = React.useState();
    const [bath,setBath] = React.useState();
    const [bed,setbed] = React.useState();
    const navigate = useNavigate();
    const {id} = useParams();
  
 
  


    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                
           Property Name <input type="text" name="propertyname" id="" onChange={(e)=>{
               setName(e.target.value);
           }}/>
           Property Location <input type="text" name="propertylocation" id="" onChange={(e)=>{
               setLocation(e.target.value);
           }} />
           Price Of Property <input type="text" name="propertylocation" id="" onChange={(e)=>{
               setPrice(e.target.value);
           }} />
           Number Of Baths <input type="text" name="propertylocation" id="" onChange={(e)=>{
               setBath(e.target.value);
           }} />
           Number Of Beds <input type="text" name="propertylocation" id="" onChange={(e)=>{
               setbed(e.target.value)
           }} />
           
           <button name="" id="" class="btn btn-primary"  role="button" onClick={(e)=>{
               axios.put("http://localhost:8000/api/listing/"+id,{name,city,price,bath,bed}).then(res=>{
                alert("Updated Successfully");
                navigate("/listings");

               }).catch(err=>{
                console.log("Invalid data"+err);
               })
           }}>Add Listing</button>
           </div>
           </div>

        </div>
     );
}
 
export default AdminPanelUpdate;