
import Home from '../pages/Home'
import Service from '../pages/Service'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctor/Doctors'
import DoctorDetails from '../pages/Doctor/DoctorDetails'
import Contact from '../pages/Contact'

import {Routes,Route} from 'react-router-dom'

const Routers = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctor/:id" element={<DoctorDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/service" element={<Service/>} />
    </Routes>
    
 )   


};

export default Routers