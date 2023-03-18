import React, { useEffect, useState } from "react";
import Axios from "axios";
import decor from '../images/decor.jpeg'

export default function Contact() {
  return (
    <>
  
    <div className="chngColor" id='contactChngColor'>
    <div className="container">
    <img id='logoImage' src={decor} alt="" />
    </div>
    <div className="contact_container">
      <h2>Conatct US:</h2>
      <h2>Phone Number:</h2>
      <p>0313-0150559</p>
      </div>
      </div>
    </>
  );
}
