import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ProductItem from "./ProductItem";
import "../App.css";
import decor from '../images/decor.jpeg'
import Decorfull from '../images/Decorfull.png'

export default function ProductList() {
  const [details, setDetails] = useState([""]);
  const [products, setProducts] = useState([""]);
  const [btn, setBtn] = useState("Change to List View");
  const [flexStyle, setFlexStyle] = useState(
    "d-flex flex-wrap justify-content-center mb-2 mx-4"
  );

    const navigate=useNavigate();
  useEffect(() => {
    function fullRecord() {
      Axios.get("http://localhost:8080/viewProducts").then((res) => {
        setDetails(res.data);
        localStorage.setItem("Products", JSON.stringify(res.data));
        setProducts(JSON.parse(localStorage.getItem("Products")));
      });
    }
    fullRecord();
  }, []);

  const viewItem=(value)=>{
    localStorage.setItem('View', JSON.stringify(value))
    navigate('/ViewItem')
  }

  return (
    <>
    <div className="chngColor">

      <div className="container-fluid">
      <div className="container">
        <div className="images">
    <img id='logoImage' src={decor} alt="" />
    <img className='flower' src={Decorfull} alt="" />
    </div>
    </div>
    {/* <div className="container" id='flower-image'>
      <h2>Decor Inn</h2>
    </div> */}
          <h2 className="product" id='product'>Products</h2>
        <div id="styleDiv" className={flexStyle}>
          {products.map((value) => (
            <>
              <ProductItem
                Divname="card"
                viewItem={()=>{viewItem(value)}}
                chngDisplay='chngDisplay'
                image={`./images/${value.image}`}
                id={value._id}
                name={value.name}
                price={value.price}
                categories={value.categories}
                description={value.description}
                val={value}
                linkText={`https://wa.me/${value.user_num}?text=Name:${value.name}, Description:${value.description}`}
              />
            </>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
