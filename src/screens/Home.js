import React from 'react';



const Home = () => {
    return (
        <div class="container">
            <div class="row" id="main">
                <div class="col-md-6 mt-3 p-4">
                    <h1 id="mainheading">Certified Buy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic nihil explicabo beatae omnis quia velit facere modi sint repudiandae nulla consectetur unde maiores voluptatum autem harum consequuntur, impedit iusto.</p>
                    <button type="button" class="btn btn-outline-success">Order Now</button>
                </div>
                <div class="col-md-6">
                    <img src='/Images/fruits.png' alt="" width="740px" />
                </div>
            </div>
        </div>

    );
}

export default Home;