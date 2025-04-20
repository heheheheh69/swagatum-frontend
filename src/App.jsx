import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Mainpage from "./Pages/Mainpage/Mainpage";

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Mainpage/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
