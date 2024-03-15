
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Signup.css';
import logo from './Zialogo.png';
import background from './bg5.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useNavigate();
  

  const handleSignUp = (e) => {
    e.preventDefault();

    if(!email ||!password ||!confirmPassword){
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
  

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Passwords do not match.',
        showConfirmButton: true,
      });
      return;
    }

    // Storing sign-up information in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    Swal.fire({
      icon: 'success',
      title: 'Sign up successful!',
      showConfirmButton: true,
    });

    // Redirect to login page after successful sign-up
    history('/login');
  };

  return (
    <div className="signup-container" style={{ width:'100%', backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    height: "100vh"}}>
      <div className="signup-inner-container2" style={{height:'130px', display:'flex',width:'100%'}}>
      <img className="signup-img" src={logo} alt="logo" style={{width:'80px', height:'80px', borderRadius:'50%',marginLeft:"20px", marginTop:'10px'}} />
      <div className='signup-login' style={{width:"100%",display:'flex', alignItems:'center',justifyContent:'flex-end'}}>
      <p style={{display:'flex', justifyContent:'flex-end', marginRight:'70px',fontSize:'20px', marginBottom:'20px', color:'whitesmoke'}}>
        Already have an account? 
      <a style={{textDecoration:'none', paddingLeft:'10px'}} href="/login">Sign in →</a>
      </p>
      </div>
      </div>
      
      <div className='typewriter' style={{ display:'flex',flexWrap:'wrap', justifyContent:'center', alignItems:'center', paddingTop:'10px',paddingBottom:'30px',margin:'150px', marginTop:'-10px',
     marginBottom:'25px'}}>
            <h1 style={{display:'flex', flexWrap:'wrap', color:'whitesmoke', width:'760px',padding:'0px'}}>Welcome to ZIARA!
            Let’s begin.</h1>
      </div>
     
        <form onSubmit={handleSignUp}>
        <div className="signup-innercontainer">
          <div className="signup-form">
            <label className="col-25 signup-label" htmlFor="email">
              Email address
            </label>
            <input
              className="col-75 signup-input"
              id="email"
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="col-25 signup-label" htmlFor="password">
              Password
            </label>
            <input
              className="col-75 signup-input"
              id="password"
              type="password"
              value={password}
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="col-25 signup-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="col-75 signup-input"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className="row signup-button btn btn-primary"
              style={{ marginTop: '12px', width: '100%' }}
              type="submit"
              value="Sign up"
            />
          </div>
          </div>
        </form>
        
    </div>
  );
};

export default Signup;