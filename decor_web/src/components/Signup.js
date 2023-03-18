import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import {Link} from 'react-router-dom';
import Axios from 'axios'
import decor from '../images/decor.jpeg'

export default function Signup(props) {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [con_pass, setCon_Pass]=useState('');
    const [contact, setContact]=useState('');
    const [location, setLocation]=useState('');

    const navigate = useNavigate();

    const onSignUpBtn = ()=>{
        if(!name, !email, !password, !con_pass, !contact, !location){
            alert('Please Enter Details')
        }
        if(password!=con_pass){
            alert('Password do not Match')
        }
        else{
            Axios.post('http://localhost:8080/Signup', {
                name, email, password, con_pass, contact, location
            }).then(res=>{
                if(res.status===201){
                    alert(res.data.Message)
                    navigate('/Login')
                }
                else
                alert(res.data.Message)
            })

        }
    }

    return (
        <>
        <div className="container">
        <div className="chngColor">
    <img id='logoImage' src={decor} alt="" />
    
        <div className="container">

            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" autoComplete='OFF' name= 'name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label"> Email</label>
                <input type="email" className="form-control" id="email" autoComplete='OFF' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' autoComplete='OFF' id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
            </div>

            <div className="mb-3">
                <label htmlFor="con_pass" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='con_pass' autoComplete='OFF' id="con_pass" value={con_pass} onChange={(e)=>{setCon_Pass(e.target.value)}} placeholder="Reenter Password" />
            </div>

            <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact Number</label>
                <input type="text" className="form-control" name='contact' autoComplete='OFF' id="contact" value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder="Enter Contact Number" />
            </div>

            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" name='location' autoComplete='OFF' id="location" value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder="Enter Location" />
            </div>

            <button type='button' className='btn btn-primary' onClick={onSignUpBtn}>{props.btn}</button>
            
            <Link className='linkTag' to='/Login'>Already Have an account?</Link>
            </div>
            </div>
            </div>
        </>
    )
}
