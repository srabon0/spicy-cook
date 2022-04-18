import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequreAuth/RequreAuth';
import Checkout from './Components/Checkout/Checkout';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import { createContext, useState } from 'react';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';

export const ServiceContext = createContext();

function App() {
  const [services,setServices] = useState([]);
  return (
    <ServiceContext.Provider value={[services,setServices]}>
      <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path='/checkout'element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } > </Route>
       <Route path='/services/:serviceId' 
       element={<ServiceDetails></ServiceDetails>} >

       </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      
    </Routes>
    <Footer></Footer>
    </div>
    </ServiceContext.Provider>
  );
}

export default App;
