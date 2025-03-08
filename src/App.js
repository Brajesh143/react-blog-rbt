import './App.css';
import { BrowserRouter } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import PublicRoute from './Components/routesFile/PublicRoute';
import { MyContext } from './MyContext';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('user'));

    if (localData?.isAuth === true) {
      setData({
        isAuth: localData.isAuth,
        fname: localData.fname,
        lname: localData.lname,
        username: localData.username,
        token: localStorage.getItem('token'),
        cartCount: localData.cartCount,
      })
    }
  }, [])

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
