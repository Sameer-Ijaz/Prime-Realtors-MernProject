
import React from 'react';
import axios from 'axios';





const Navigation = () => {


  return (
    <div>

      <div class="container">
        <div class="row" id="headermenu">
          <div class="col-md-3">
            <a href='/'> <h3 id="logo" class="mt-1">Prime Realtors</h3></a>
          </div>
          <div class="col-md-6">
            <nav class="navbar navbar-expand-md">
              <ul class="navbar-nav">
                <a class="nav-link ml-3" href="/">Home</a>
                <a class="nav-link  ml-3" href="/listings">Listings</a>
                <a class="nav-link  ml-3" href="/contactus">Contact Us</a>
              </ul>
            </nav>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;