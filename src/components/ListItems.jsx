import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore'

const ListItems = () => {

  const [products, setProducts] = React.useState([]);

  const navigate = useNavigate();
  const [data, setData] = React.useState(null)


  React.useEffect(() => {
    let unsub;
    const fetchCards = async () => {
      unsub = onSnapshot(collection(db, 'add'), snapshot => {
        const filteredData = snapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        setData(filteredData);

      })
    }
    fetchCards();
    return unsub;

  }, [])

  console.log(data)
  const isLoggedin = () => {
    return localStorage.getItem("token") ? true : false;

  };

  return (

    <div className='container mx-auto'>
      <div className='row'>

        <div className="container-fluid bg-trasparent flex my-4 p-3 listcontainer mx-auto" >
          <div className='row row-cols-2 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"'>
            {data?.map((p) => (
              <div>

                <div class="col hp ">
                  <div class="card h-100 shadow-sm">
                    <a href="#">
                      <img src={p.image} class="card-img-top" alt="product.title" />
                    </a>

                    <div class="label-top shadow-sm">
                      <a class="text-white" href="#">{p.title}</a>
                    </div>
                    <div class="card-body">
                      <div class="clearfix mb-3">
                        <span class="float-start badge rounded-pill bg-success">{p.price}</span>

                        <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">Best Deal</a></span>
                      </div>
                      <h5 class="card-title">
                        <a target="_blank" href="#"> <h4>{p.location}</h4>
                        </a>
                      </h5>





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

export default ListItems;

