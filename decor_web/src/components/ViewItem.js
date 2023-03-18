import React, {useEffect, useState} from 'react'

export default function ViewItem() {
    // const [record, setRecord]= useState('')
    var record;
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    const [image, setImage]= useState('')
    const [description, setDescription]= useState('')
    const [category, setcategory]= useState('')
    const[number, setNumber] = useState('')

    useEffect(()=>{
        record=JSON.parse(localStorage.getItem('View'))
        console.log(record)
        setName(record.name)
        setPrice(record.price)
        setImage(record.image)
        setDescription(record.description)
        setcategory(record.categories)
        setNumber(record.user_num)
        console.log(name, description, price)

    }, [])

  return (
    <>
    <div className="Productcontainer">
    <div className="chngColor">
        <h2 className='product'>Product Details</h2>
    <div className="main_div">
        <div className="innerDiv">
            <img className='productImage' src={`./images/${image}`} alt="" />
        </div>
        <div className="body">
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Price: </strong>{price}</p>
            <p><strong>Description</strong>{description}</p>
            <p><strong>Category: </strong>{category}</p>
            <a href={`https://wa.me/${number}?text=Name:${name}, Description:${description}`}><img src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" className='whatsappicon2' alt=""/></a>
            
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
