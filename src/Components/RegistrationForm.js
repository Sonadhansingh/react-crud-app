import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import './RegistrationForm.css';
import background from './bg5.png';
// import logo from './Zialogo.png';


const RegistrationForm = () => {

  // Creating users with useState empty array

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullname:'',
    age: '',
    date:'',
    mobile: '',
    email: ''
  });

  // For error checking
  const [errors, setErrors] = useState({});


  // For navigating from one page to another.
    const history= useNavigate();

  //Getting data stored in the local storage using useEffect.

    useEffect(() => {
        const storedUsers= localStorage.getItem('users');
        if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
        }
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
  

    //Validation rules
    let error = {};
    if (name === 'fullname' && value.trim() === '') {
      error.fullname = '* Fullname is required.';
    }
    if (name === 'age' && !/^\d{1,2}$/.test(value) ) {
      error.age = '* Invalid age';
    }
    if (name === 'mobile' && !/^\d{10}$/.test(value)) {
      error.mobile = '* Invalid mobile number';
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error.email = '* Invalid email address';
    }

    setErrors(error);
  };

    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    const isValidMobile = (mobile) => {
      const mobilePattern = /^\d{10}$/; 
      return mobilePattern.test(mobile);
    };

    const isValidAge = (age) => {
      const agePattern = /^\d{2}$/;
      return agePattern.test(age);
    };


    // What event should happen if we submit the form.

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = users.length + 1;
        const newUser = {
            id,
            fullname: formData.fullname,
            age: formData.age,
            date: formData.date,
            mobile: formData.mobile,
            email: formData.email
        };
    
    if (!formData.fullname || !formData.age || !formData.date || !formData.mobile || !formData.email) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true,
        });
    }

    if (!isValidEmail(formData.email)) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter a valid email address.',
        showConfirmButton: true,
      });
    }

    if (!isValidMobile(formData.mobile)) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter a valid mobile number.',
        showConfirmButton: true,
      });
    }

    if (!isValidAge(formData.age)) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter a valid age.',
        showConfirmButton: true,
      });
    }
      

    setUsers([...users, newUser]);

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));

    setFormData({
      fullname: '',
      age:'',
      date:'',
      mobile: '',
      email: ''
    });

    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${formData.fullname}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });

    history('/dashboard');
   
    };

    const handleSubmit1 =(e) =>{
        e.preventDefault();
        history('/dashboard');
    }


  return (
  <>
    {/* <img src={logo} alt='logo' style={{width:'100px', height:'100px'}} /> */}
    <div className='regform' style={{backgroundImage:"url("+ background + ")", backgroundSize:"cover" }}>
       
      <div className='add-container'>
        <h1>New User</h1>
        <div className='body'>
            <form className='form' onSubmit={handleSubmit}>
        
        <label htmlFor="fullname">Fullname</label>
            < input className='box'
            id="fullname"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange} />

          {errors.fullname && <span style={{ color: 'red' }}>{errors.fullname}</span>}  

        <label htmlFor="age">Age</label>
            < input className='box'
            id="age"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange} />

          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}

        <label htmlFor="date">Date of Birth</label>
            < input className='box'
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange} />

        <label htmlFor="salary">Mobile no</label>
            < input className='box'
            id="mobile"
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange} />

          {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}

        <label htmlFor="email">Email</label>
            < input className='box'
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange} />

          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        <div className='button' style={{ marginTop: '30px'}}>
        
          < input className='btn btn-primary' type="submit" value="Register"/>
          < input className="btn btn-outline-light"
            style={{ marginLeft: '15px' }}
            type="button"
            value="Cancel"
            onClick={handleSubmit1}/>
        </div>
      
            </form>
        </div>
    </div>
</div>
</>
  );
};

export default RegistrationForm