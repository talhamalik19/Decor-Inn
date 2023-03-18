import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/user.png";
import decor from "../images/decor.jpeg";
import "../App.css";

export default function Button(props) {
  const navigate = useNavigate();

  return (
    <>
        <div className="heigh">
          <div className="container">
            <div id="logoimage">
              <img id="logoImage" src={decor} alt="" />
            </div>
          </div>
          <div className="decorImage">
      <div className="image">

          {/* <h1 className='main_title'>{props.title}</h1> */}
          <div className="shopNow">
            <button
              type="button"
              className="btn btn-light"
              id="btnShow"
              onClick={() => {
                navigate("/Dashboard");
              }}
            >
              Shop Now
            </button>
          </div>
          <img
            src={image}
            className="admin_icon"
            onClick={() => {
              document.getElementById("manage").style.visibility = "visible";
            }}
          />
          <button
            type="button"
            className="btnManage"
            id="manage"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Manage Inventory
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
