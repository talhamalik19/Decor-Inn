import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddProductItem from './AddProductItem'
import logo from '../images/logo.jpg'
import decor from '../images/decor.jpeg'

export default function Home() {
  const navigate = useNavigate();
  const [details, setDetails] = useState(['']);
  const [btn, setBtn] = useState('Change to List View')
  const [flexStyle, setFlexStyle] = useState('d-flex flex-wrap justify-content-center mb-2 mx-4')

  useEffect(() => {
    Axios.get("http://localhost:8080/viewProducts").then((res) => {
      // console.log(res)
      setDetails(res.data);
      navigate('/Home')
    });
  }, []);

  const onUpdateBtn=(id)=>{
    Axios.put(`http://localhost:8080/update/${id}`).then(res=>{
      console.log(res)
    localStorage.setItem('Product', JSON.stringify(res.data))
    navigate('/UpdateForm')
  })
  }

  const onDeleteBtn=(id)=>{
    Axios.delete(`http://localhost:8080/deleteProduct/${id}`).then(res=>{
      alert(res.data.Message)
    })
  }



  return (
    <>
    <div className="chngColor">

      <div className="container-fluid">
      <div className="container">
        <div className="images">
    <img id='logoImage' src={decor} alt="" />
    </div>
    </div>
    <div className="container">

    <Link className="btn btn-light" id='addProduct' to='/Add_Product'>Add Product</Link>
    </div>
        <div id='styleDiv' className={flexStyle}>
          {
          
          details.map((value) => (
            <AddProductItem
            image={`./images/${value.image}`}
              id={value._id}
              name={value.name}
              price={value.price}
              categories={value.categories}
              description={value.description}
              onDelete={()=>{onDeleteBtn(value._id)}}
              onUpdate={()=>{onUpdateBtn(value._id)}}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
