import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// My Components
import Header from "./Components/Header"
import HomeGuest from "./Components/HomeGuest"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Terms from "./Components/Terms"
import PublicRoute from './Components/routesFile/PublicRoute';
import { MyContext } from './MyContext';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("")

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ data, setData }}>
        <Header  />
          <PublicRoute />
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App;
