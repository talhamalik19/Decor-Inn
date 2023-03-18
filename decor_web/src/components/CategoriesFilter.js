import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import decor from '../images/decor.jpeg'

export default function CategoriesFilter() {
    const [categories, setCategories]=useState([]);
    const [flexStyle, setFlexStyle] = useState(
        "d-flex flex-wrap justify-content-center mb-2 mx-4"
      );
      const [btn, setBtn] = useState("Change to List View");

    useEffect(()=>{

        setCategories(JSON.parse(localStorage.getItem("Filter")))
    }, [])

  return (
    
     <>

<div className="chngColor">
      <div className="container-fluid">
      <div className="container">
    <img id='logoImage' src={decor} alt="" />
    </div>
        <div id="styleDiv" className={flexStyle}>
          {categories.map((value) => (
            <>
              <ProductItem
                Divname="card"
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
    
  )
}
