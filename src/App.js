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
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<Home></Home>}></Route>
      <Route path='/checkout'element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } > </Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
