import React from 'react';

const Footer = () => {
    return ( 

        <div id='footer'>
        <div className='container-fluid p-4 mx-auto '>
           
            <div className='row'>
            <div className='col-md-3'>
                <h4>Why Us?</h4>
            <ul className='mx-auto'>
            <li>Providing Services Since 1950s</li>
         <li>Reliable Network</li>
          <li>Fair Deals</li>
           <li>Zero Complaints</li>
            </ul>
            </div>
            <div className='col-md-3 mx-auto'>
            <ul>
                <h4>Registered With</h4>
      <li>Pakistan Dealer Association</li>
      <li>Punjab Dealer Association</li>
      <li>Sindh Dealer Association</li>
      <li>KPK Dealer Association</li>
  </ul>
            </div>

            <div className='col-md-3 mx-auto'>
            <ul>
                <h4>Location</h4>
                <p>Bahria Town B-Block, Lahore Pakistan Postal Code 51310</p>
  </ul>
            </div>
            <div className='col-md-3 mx-auto' >
            <h1 id='prime' >Prime Realtors</h1>
            <p>Copyright &copy; 2022 Sameer Qasim</p>
            </div>

            </div>

        </div>
       
        </div>
     );
}
 
export default Footer;