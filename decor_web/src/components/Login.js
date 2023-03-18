import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import {Link} from 'react-router-dom';
import Axios from 'axios'
import decor from '../images/decor.jpeg'

export default function Login(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onBtnClick = ()=>{
        if(!email || !password){
            alert('Username or Password Not entered')
        }
        Axios.post('http://localhost:8080/Login', {
            email,password
        }).then(res=>{
            if(res.status===201){
                alert(res.data.Message)
                navigate('/Home')
            }
            else
            alert(res.data.Message)
        })
    }
    return (
        <>
        <div className="container">
        <div className="chngColor">
    <img id='logoImage' src={decor} alt="" />
    
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="main" className="form-label">Email address</label>
                    <input type="email" className="form-control" autoComplete='OFF' value={email} id="mail" placeholder='Enter Email' name='email' onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" autoComplete='OFF' value={password} id="pass" placeholder='Enter Password' name='password' onChange={(e)=>{setPassword(e.target.value)}} />
                </div>

                <button type='button' className='btn btn-primary' onClick={onBtnClick}>{props.btn}</button>
                <Link className='linkTag' to='/Signup'>Signup</Link>

            </div>
            </div>
            </div>
        </>
    )
}
