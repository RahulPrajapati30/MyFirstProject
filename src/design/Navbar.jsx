import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Navbar = () => {
  return (
    <>
       <div className='main-div'>

         <ul>
            <Link to='/home'>Home</Link><br/>
            <Link to='/shows'>Shows</Link><br/>
            <Link to='/movies'>Movies</Link><br/>
            <Link to='/aboutus'>Aboutus</Link><br/>
            <Link to='/help'>Help</Link>
        </ul>
     </div> 
     <div id='bird-img'></div>
     <div id='input-button'>
      <input/>
      <button>Search</button>
     </div>

    <div className='main'>
      <h2>Login/SignUp</h2>
      <label className='label-one'>Enter Name</label><input  /><br />
      <label className='label-two'>Enter Password</label><input type='password' />
      <button className='login' onClick={() => toast.success("✔ Successfully Submitted!")}>Submit</button>
      <ToastContainer />
      <a href="#">forgott password?</a>
    </div>
    </>
  )
}

export default Navbar