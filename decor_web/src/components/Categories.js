import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

export default function Categories() {
  const navigate=useNavigate()
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);

  const paraClick = (value) => {
    // localStorage.clear()
    Axios.post(`http://localhost:8080/categoriesFilter/${value}`).then(res=>{
      setProducts(res.data)
      localStorage.setItem('Filter', JSON.stringify(res.data))
      navigate('/CategoriesFilter')
      
    })
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/categories").then((res) => {
      setCategories(res.data);
    });
  }, [categories]
  );

  return (
    <>
      {categories.map((value, key) => (
        <p
          key={value._id}
          id="category"
          onClick={() => {
            paraClick(value.categories);
          }}
        >
          {value.categories}
        </p>
      ))}
    </>
  );
}
