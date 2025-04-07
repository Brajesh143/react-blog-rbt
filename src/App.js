import './App.css';
import { BrowserRouter } from "react-router-dom"
import PublicRoute from './Components/routesFile/PublicRoute';
import { MyContext } from './MyContext';
import { useEffect, useState } from 'react';
import Header from './Components/common/Header';
import Footer from './Components/common/Footer';
import { sendRequest } from './utils/service';

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('user'));

    if (localData?.isAuth === true) {
      masterApiCall();
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

  const masterApiCall = async() => {
    const masterResponse = await sendRequest('get', 'cart/master-endpoint');
    if (masterResponse.status === 200) {
        let item = JSON.parse(localStorage.getItem('user'));
        item['cartCount'] = masterResponse.data.totalItems;
        localStorage.setItem('user', JSON.stringify(item));
    }
    return true;
  }

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
