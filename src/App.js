
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import RegistrationForm from './Components/RegistrationForm';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Signup from './Components/Signup';


function App(){
  return(
 <BrowserRouter>
      <Routes> 
        <Route exact path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/registrationform' Component={RegistrationForm} />
        <Route path='/dashboard' Component={Dashboard} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
