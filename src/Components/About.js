import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';


const About = () => {

    const history= useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();
        history('/login');
    }
  return (
   <div className='about-container' style={{width:'100%', backgroundColor:'black', backgroundSize:'cover', height:'100vh' }}>
    <div className="card" style={{borderRadius:'0% 0% 50% 50%', backgroundColor:'None'}}>
      <div className='about-innercontainer' style={{display:'flex',flexDirection:'column',
      justifyContent:"center", alignItems:'center', padding:'200px', height:'70vh', border:'1px solid black',borderRadius:'0% 0% 50% 50%', backgroundSize:'cover'}}>
        <h2 style={{fontSize:'40px',paddingBottom:'30px', color:'whitesmoke'}}>About ZIARA</h2>
        <p className='heading' style={{fontSize:'20px', textAlign:'center',color:'whitesmoke'}}>ZIARA is a database management website facilitates seamless user authentication, allowing secure sign-up, sign-in, and account management. Users navigate through an intuitive dashboard to access databases and tables, with functionalities for creation, viewing, editing, and deletion. CRUD operations empower users to manage data within tables efficiently. </p>
        <p style={{fontSize:'25px', textAlign:'center',paddingTop:'20px',paddingBottom:'20px', color:'whitesmoke'}}>ZIARA provides a user-friendly interface. </p>
        <div className='about-button'>
            <button className='btn btn-primary' type='button' style={{fontSize:'20px'}} onClick={handleSubmit}>Try now!</button>
        </div>   
        </div>  
      </div> 
   </div>
  
  )
}

export default About