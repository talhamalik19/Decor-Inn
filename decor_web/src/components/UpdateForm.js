import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import decor from '../images/decor.jpeg'

export default function UpdateForm(props) {

    const ProductDetail =JSON.parse(localStorage.getItem('Product'))

  const formData = new FormData()
  const navigate = useNavigate();

  const [prod_name, setName] = useState(ProductDetail.name)
  const [prod_price, setPrice] = useState(ProductDetail.price)
  const [prod_des, setProd_des] = useState(ProductDetail.description)
  const [prod_categories, setCategories] = useState(ProductDetail.categories)
  const [imagename, setImageName] = useState(ProductDetail.image)


  const registerProduct = (id) => {
    formData.append('prod_name', prod_name);
    formData.append('prod_categories', prod_categories)
    formData.append('prod_price', prod_price);
    formData.append('prod_des', prod_des);
    formData.append('prod_image', imagename);

    console.log(imagename);

    Axios.put(`http://localhost:8080/updateform/${id}`, formData).then(res=>{
      alert(res.data.Message);
      localStorage.removeItem('Product')
       navigate('/Home')

    })

  }
  
  return (
    <>
    <div className="container">
    <img id='logoImage' src={decor} alt="" />
    </div>
    <form action="" encType='multipart/form-data'>
    <div className="mb-3">
        <label htmlFor="prod_image" className="form-label">Insert Product Images</label>
        <input type="file" className="form-control" id="prod_image" filename='prod_image' onChange={(e)=>{setImageName(e.target.files[0])}} />
      </div>
      <div className="mb-3">
        <label htmlFor="prod_name" className="form-label">Product Name</label>
        <input type="text" className="form-control" value={prod_name} id="prod_name" placeholder='Product Name' name='prod_name' onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label htmlFor="prod_cat" className="form-label">Product Categories</label>
        <input type="text" className="form-control" value={prod_categories} id="prod_name" placeholder='Product Categories' name='prod_cat' onChange={(e)=>{setCategories(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label htmlFor="prod_price" className="form-label">Product Price</label>
        <input type="text" className="form-control" value={prod_price} id="prod_price" placeholder='Product Price' name='prod_price' onChange={(e)=>{setPrice(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label htmlFor="prod_des" className="form-label">Product Description</label>
        <textarea name="prod_des" className='form-control' id="prod_des" cols="30" rows="5" onChange={(e)=>{setProd_des(e.target.value)}} value={prod_des}></textarea>
      </div>

      <button type='button' onClick={()=>{registerProduct(ProductDetail._id)}} className='btn btn-primary'>Add Product</button>
      </form>
    </>
  )
}
