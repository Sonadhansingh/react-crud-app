import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from './Zialogo.png';
import background from './bg5.png';


const Dashboard= ()=> {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
 
  // const [editFormData, setEditFormData] = useState({
  //   fullname: "",
  //   age:"",
  //   date: "",
  //   mobile: "",
  //   email: ""
  // });

  const history= useNavigate();

  // const [editid, setEditid] = useState(null);

  // const handleEditFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditFormData(newFormData);
  // };

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedUser = {
  //     id: editid,
  //     fullname: editFormData.fullname,
  //     age: editFormData.age,
  //     date: editFormData.date,
  //     mobile: editFormData.mobile,
  //     email: editFormData.email,
  //   };

  //   const newUsers = [...users];

  //   const index = users.findIndex((user) => user.id === editid);

  //   newUsers[index] = editedUser;

  //   setUsers(newUsers);
  //   setEditid(null);
  // };

  // const handleEditClick = (event, user) => {
  //   event.preventDefault();
  //   setEditid(user.id);

  //   const formValues = {
  //     fullname: user.fullName,
  //     age: user.age,
  //     date: user.date,
  //     mobile: contact.mobile,
  //     email: contact.email,
  //   };

  //   setEditFormData(formValues);
  // };


  // Object.entries(users).forEach((user, i) => {
  //   user.id = i + 1;
  // });

  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  },[]);

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
 
  //Editing the user (Inline editing)

  const handleEdit = (email)=> {
    setEditingUser(email); 
  };
  

  const handleSave = (email) => {

    const userIndex = users.findIndex(user => user.email === email);
    const updatedUser = { ...users[userIndex] }; 

    updatedUser.fullname = document.getElementById(`fullname-${email}`).value;
    updatedUser.age = document.getElementById(`age-${email}`).value;
    updatedUser.date = document.getElementById(`date-${email}`).value;
    updatedUser.mobile = document.getElementById(`mobile-${email}`).value;
    updatedUser.email = document.getElementById(`email-${email}`).value;

    
    if (!isValidEmail(updatedUser.email)) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter a valid email address.',
        showConfirmButton: true,
      });
    }

    if (!isValidMobile(updatedUser.mobile)) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter a valid mobile number.',
        showConfirmButton: true,
      });
    }

    if (!isValidAge(updatedUser.age)) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter a valid age.',
        showConfirmButton: true,
      });
    }

    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;

    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setEditingUser(null); 

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `User has been Updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
    
  };


    // Deleting the user

  const handleDelete = (email) => {
   
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
       if (result.value) {
        // Assuming users and setUsers are defined somewhere
        const newUsers = [...users];
        const index = newUsers.findIndex((user) => user.email === email);
        if (index !== -1) { // Ensure the user is found
          newUsers.splice(index, 1);
          setUsers(newUsers);
          Swal.fire('Deleted!', 'User has been deleted.', 'success');
          localStorage.setItem('users', JSON.stringify(newUsers));
        } else {
          Swal.fire('Error!', 'User not found.', 'error');
        }
        localStorage.setItem('users', JSON.stringify(newUsers));
      }
  });
};


        
        // const usersCopy = user.filter(user => user.id !== id);
        // localStorage.setItem('users_data', JSON.stringify(usersCopy));
        // setUsers(usersCopy);
        
        // const usersCopy = users.filter(user => user.id === id);
        // localStorage.setItem('users_data', JSON.stringify(usersCopy));
        // setUsers(usersCopy); this
        
        // const updatedUsers = DeleteUser(user);
        // setUsers(updatedUsers);

        // Swal.fire({
        //   icon: 'success',
        //   title: 'Deleted!',
        //   text: `${usersCopy.fullname}'s data has been deleted.`,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });this

        // const updatedUsers = DeleteUser(user);
        // setUsers(updatedUsers);
      
        // const usersCopy = user.filter(user => user.id !== id);
        // localStorage.setItem('users_data', JSON.stringify(usersCopy));
        // setUsers(usersCopy);
//       }
//     });
//  };

      const handleSubmit =(e) =>{
        e.preventDefault();
        history('/registrationform');

      }


  return (
    <div className='dashboard-container' style={{width:'100%', backgroundImage:"url(" + background +")" , backgroundSize:"cover", height:"100vh"}}>
    <div className="container" style={{maxWidth:'100%',}}>
      
    {/*Dashboard*/}

      <div className='header1' style={{display:'inline-flex', alignItems:'flex-end', marginTop:'30px'}}>
            <img src={logo} alt='logo' height={80} width={80} style={{marginLeft:'20px', borderRadius:'50%'}}/>
                <h1 style={{paddingLeft:'10px', marginBottom:'20px', color:'whitesmoke'}}> DASHBOARD </h1>
            </div>

    {/* Create new registration */}

      <div style={{ marginTop: '10px', marginBottom: '30px', display: 'flex',
            flexDirection: 'row-reverse',
            paddingRight: '130px'}}>

            <button className='btn btn-primary' onClick={handleSubmit}>Create new</button>
            </div>

    {/* Dashboard table */}
    <div className='table-responsive dashboard-table' style={{paddingLeft:'30px', paddingRight:'30px', background:'transparent', color:'whitesmoke'}} >
      <table className="table">
        <thead style={{fontSize:'22px'}}>
          <tr > 
            <th style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>No.</th>
            <th style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>FullName </th>
            <th style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>Age</th>
            <th style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>Date of Birth</th>
            <th style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>Mobile no</th>
            <th style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>Email</th>
            <th colSpan={2} className="text-center" style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'2px solid #fff'}}>
              Actions
            </th>
          </tr>
        </thead>
        
        <tbody style={{fontSize:'20px', color:'black',padding: '20px'}}>
          {users.length > 0 ? (
            users.map((user,i) => (
              <tr key={user.email}>
                <td style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>{i + 1}</td>



                <td style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>{editingUser === user.email ? (
                    <input type='text' id={`fullname-${user.email}`} defaultValue={user.fullname}/>
                  ) : (user.fullname) } </td>

                <td style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}> {editingUser === user.email ? (
                    <input type="text" id={`age-${user.email}`} defaultValue={user.age} />
                  ) : (user.age) } </td>

                <td style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>  {editingUser === user.email ? (
                    <input type="text" id={`date-${user.email}`} defaultValue={user.date} />
                  ) : (user.date) } </td>

                <td style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>{editingUser === user.email ? (
                    <input type="text" id={`mobile-${user.email}`} defaultValue={user.mobile} />
                  ) : (user.mobile ) } </td>

                <td style={{paddingTop:'20px',paddingBottom:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>{editingUser === user.email ? (
                    <input type="text" id={`email-${user.email}`} defaultValue={user.email} />
                  ) : (user.email) } </td>

      
                <td className="text-right" style={{marginRight:'0px',padding:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>
                {editingUser === user.email ? (
                    <>
                      <button className='btn btn-outline-success' onClick={() => handleSave(user.email)}>Save</button>
                      {/* <button className='btn btn-outline-dark' onClick={handleCancelEdit}>Cancel</button> */}
                    </>
                  ) : (
                    <button className='btn btn-outline-primary'
                    onClick={() => handleEdit(user.email)} >Edit</button>
                  )}
                </td>

                <td className="text-left" style={{marginRight:'0px',padding:'20px', background:'transparent', color:'whitesmoke', borderBottom:'1px solid #0d6efd'}}>
                  <button className='btn btn-outline-danger'
                    onClick={() => handleDelete(user.email)}
                   
                  >
                    Delete
                  </button>
                </td>
               </tr>
            )) 
          ) : (
            <tr>
              <td colSpan={7} style = {{ background:'none', color: 'whitesmoke',
              textAlign: 'center',
              borderBottom: 'none',
              paddingTop: '22px'}} >No Records found.</td>
            </tr>
          )}
        
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};


export default Dashboard;