import logo from './Zialogo.png';
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import background from './bg5.png';

const Home = () => {
    const history= useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      history('/about')
    };

    const handleSubmit1 = (e) => {
      e.preventDefault();
      history('/login');
    };


   return (
    <div className='home' style={{width:'100%', backgroundImage:"url("+ background +")", backgroundSize:'cover', height:'100vh'}}>
      <div className='innerhome'>
        <img src={logo} alt='logo' />
        <h1 className='home-heading1'>Welcome to ZIARA </h1>
          <p>A Database Management System</p>
          <div className='home-button'>
            <button className='btn btn-outline-light' id='home-submit1' type='submit' onClick={handleSubmit}>About </button>
            <button className='btn btn-primary' id='home-submit2' type='submit' onClick={handleSubmit1}>Try now!</button>
         </div> 
      </div>
    </div>
  )
};

export default Home;