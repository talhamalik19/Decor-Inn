import react, {useState, useEffect} from 'react'
import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import Add_Product from './components/Add_Product.js';
import About from './components/About.js'
import Contact from './components/Contact.js'
import Button from './components/Button';
import Navbar from './components/Navbar'
import UpdateForm from './components/UpdateForm'
import CategoriesFilter from './components/CategoriesFilter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './components/ProductList';
import ViewItem from './components/ViewItem';



function App() {
  const [showComponent, setShowComponent] = useState(false)
  useEffect(()=>{
    setInterval(()=>{
      setShowComponent(true)
    }, 2000)
  }, [])
  return (
    <>
    
    <Router>
      <Routes>
      <Route path='/' element={<Button title='CHINA MART'/>}></Route>
      
        <Route path='/Login' element={<Login btn='Login'/>}> </Route>
        <Route path='/Signup' element={<Signup btn='Signup'/>}> </Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Add_Product' element={<Add_Product/>}></Route>
        <Route path='/Dashboard' element={<><Navbar/> <ProductList/></>}> </Route>
        <Route path='/About' element={<><Navbar/><About/></>}></Route>
        <Route path='/Contact' element={<><Navbar/><hr className='seprator'/><Contact/></>}></Route>
        <Route path='UpdateForm' element={<UpdateForm/>}></Route>
        <Route path='/CategoriesFilter' element={<><Navbar/><CategoriesFilter/></>}></Route>
        <Route path='/ViewItem' element={<><Navbar/><hr className='seprator'/><ViewItem/></>}></Route>

      </Routes>
    
    </Router>
    </>

  );
}

export default App;
