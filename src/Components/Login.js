import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css'
import logo from './Zialogo.png'
import background from './bg5.png';

const Login = () => {

  // // Admin data
  // const adminEmail = 'sona@gmail.com';
  // const adminPassword = 'sona@123';

  // Email and password is checked using this admin data.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // For error checking.
  // const [errors, setErrors] = useState({});

  // For navigating from one page to another.
  const history = useNavigate();

  // Handling login if we click submit.

  const handleLogin = e => {
    e.preventDefault();

    // Retrieve email and password from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    //  // Basic validation
    //  const errors = {};
    //  if (adminEmail === 'email' && !/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = '* Invalid email address';
    // }

    // setErrors(errors);
    // if (Object.keys(errors).length > 0) {
    //   return;
    //  }

    if(!email ||!password){
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }
  
   
    if (email === storedEmail && password === storedPassword) {
      Swal.fire({
        timer: 1000,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          // setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });

          // Redirect to registration form if he login is successful.
          
          history('/dashboard');
        },
      });
    } else {
      Swal.fire({
        timer: 1000,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className='login-container'style={{backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    height: "100vh"}}>
      <img className='login-img ' src={logo} alt='logo' />
        <h1 className='login-heading' >Sign in to ZIARA</h1>
      
      <div className="login-innercontainer">
      <form  onSubmit={handleLogin}>
        <div className='login-form'>
        <label className='login-label' htmlFor="email">Email address</label>
        <input className='login-input'
          id="email"
          type="email"
          name="email"
          value={email}
          autoComplete='off'
          onChange={e => setEmail(e.target.value)}
        />

      {/* {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}       */}

        <label className='login-label' htmlFor="password">Password</label>
        <input className='login-input'
          id="password"
          type="password"
          value={password}
          name="password"
          autoComplete='off'
          onChange={e => setPassword(e.target.value)}
        />

        <input className='signin-button btn btn-primary' style={{ marginTop: '12px', width:'100%' }} type="submit" value="Sign in" />
        </div>
      </form>
      </div>
      <div className='inner-container2'>
        <p style={{color:'whitesmoke'}}>New to ZIARA?</p> <a href='\Signup'>Create an account</a>
      </div>
    </div>
  
  );
};

export default Login;