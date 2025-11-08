import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './components/singup/Signup';
import Signin from './components/singup/Signin';
import Todo from './components/todo/Todo';
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          
        </Routes>
        </BrowserRouter>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
