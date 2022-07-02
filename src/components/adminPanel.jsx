import React from 'react';
import axios from 'axios';
const AdminPanel = () => {

    const[products,setProducts] = React.useState([]);

    const GetProductData = () => {
      axios.get("http://localhost:8000/api/user").then((res) =>{
        setProducts(res.data);
  
      }).catch((err)=>{
        console.log(err);
      });
  
    };
    React.useEffect(GetProductData,[]);
    return ( 

        <div className='container mx-auto'>
        <div className='row'>

        <div className="container-fluid bg-trasparent flex my-4 p-3 listcontainer mx-auto">
        <div className='row row-cols-2 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"'>
            {products.map((p)=>(
                <div>
                         
                <div class="col hp ">
        <div class="card h-100 shadow-sm">
          <a href="#">
            <img src="https://images.pexels.com/photos/6835055/pexels-photo-6835055.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" class="card-img-top" alt="product.title"/>
          </a>
  
          <div class="label-top shadow-sm">
            <a class="text-white" href="#">{p.city}</a>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-success">{p.age}</span>
  
              <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">Best Deal</a></span>
            </div>
            <h5 class="card-title">
              <a target="_blank" href="#"> <h4>Town House</h4> 
              </a>
            </h5>
             
            <p>
              3 🛏  | 3 🛀
            </p>
           
  
            <div class="d-grid gap-2 my-4">
  
              <a href="#" class="btn btn-warning bold-btn" id="detbtn">Details </a>
  
            </div>
            <div class="clearfix mb-1">
  
              <span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span>
  
              <span class="float-end">
                <i class="far fa-heart"></i>
  
              </span>
            </div>
          </div>
        </div>
      </div>
      
                </div>
            ))}

        </div>
        </div>
        </div>
        </div>
     );
}
 
export default AdminPanel;