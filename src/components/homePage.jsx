import React from 'react';
import Footer from './footer';
import Properties from './Properties';


const Home= () => {
    return ( 
       <div>
           <div className="row" id="main">
              <img id="myimg"  src="Images/miami-beach.jpg" alt=""></img>
            
            </div>

            <div className="container mt-5 p-5 rounded" id="saladdiv">
            <div className="row">
            <div className="col-12" id="ch2">

                <h2 id='dreamHome'>Find Your Dream Home With Us</h2>
            
          
                
            </div>

          </div>

            <div className="row">


<div className='container'>






<a href="/listings"><button type="button" className="btn btn-success " id="buybtn" ><b>BUY</b></button></a>
</div>

</div>
                            
</div>

<Properties/>

<div>

<div id="mycustomcontainer1">
                   <div class="container">
                       <div class="row">
                           <div class="col-md-12">  
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>Why Choose Us</h1>
                                    <p>We Offer Perfect Real Estate Solutions</p>
                                   <div class="card-deck rounded cardt ">
                                       <div class="card">
                                           <img class="card-img-top mx-auto" src="/Images/home.png"  alt="" />
                                           <div class="card-body container">
                                               <h4 class="card-title">Find Your Home</h4>
                                               <p class="card-text">We provide best possible services at best response time to promise our potential buyers a promising exposure to property. Dreams do not wait for eternity so make one a Reality. </p>
                                               
                                           </div>   
                                       </div>
                                       <div class="card " >
                                           <img class="card-img-top rounded mx-auto" src="/Images/gear.png" alt=""/>
                                           <div class="card-body container">
                                               <h4 class="card-title">24/7 Support</h4>
                                               <p class="card-text">We provide best possible support service with 24/7 response time to promise our potential buyers a promising exposure to property.</p>
                                              
                                           </div>
                                       </div>
                                       <div class="card ">
                                        <img class="card-img-top rounded mx-auto " src="/Images/handshake.png" alt=""/>
                                        <div class="card-body container">
                                            <h4 class="card-title">Trusted By Millions</h4>
                                            <p class="card-text ">Millions of people have trusted Prime Realtors to get their first property. Become one of them!</p>
                                            
                                        </div>
                                    </div>
                           </div>
                       </div>
                   </div>
               </div>
                       </div>
                   </div>
               </div>
</div>
 <Footer/>
       </div>
     );
}
 
export default Home ;