import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Mainpage from "./Pages/Mainpage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
