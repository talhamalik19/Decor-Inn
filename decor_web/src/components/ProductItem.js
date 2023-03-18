import React, { useState } from "react";
import '../App.css'

export default function ProductItem(props) {
  return (
    <>
    <div className="row">
      <div className="col-lg-4">
        <div
          className={props.Divname}
          style={{ width: "18rem", cursor: "pointer" }}
          key={props.id}
          onClick={props.viewItem}
        >
          <div className="card-body" >
            <img src={props.image} alt=""  className='card-img-top'/>
            <p className="card-title"><strong>Name:</strong> {props.name}</p>
            <p className="card-text"><strong>Category:</strong> {props.categories}</p>
            <p className="card-text">
              <span> <strong>Price: </strong></span> <span>{props.price}</span>
            </p>
            <p className="card-text"><strong>Description:</strong>{props.description}</p>


          </div>
          </div>
            <a href={props.linkText} value={props.val}><img className='whatsappicon' src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="" /></a>
          
        </div>
      </div>
      
    </>
  );
}
