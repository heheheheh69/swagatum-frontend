import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Mainpage from "./Pages/Mainpage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Productpage from "./Pages/Products/Product";
import NewProduct from "./Components/NewProducts/NewProduct";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/products" element={<NewProduct/>}></Route>
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
