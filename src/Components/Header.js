import React, { useContext, useEffect, useState }  from "react"
import HeaderLogIn from "./HeaderLogIn"
import HeaderLoggedOut from "./HeaderLogout"
import { MyContext } from "../MyContext"

function Header(props) {
  let [isUserLoggedIn,setisUserLoggedIn ]  = useState(false)

  const {data, setData} = useContext(MyContext)

  useEffect(() => {
    setLocalDataToContext()
  }, [])

  const setLocalDataToContext = () => {
    const localUserData = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    setData({
      isAuth: token ? true : false,
      fname: localUserData ? localUserData.fname : '',
      lname: localUserData ? localUserData.lname : '',
      username: localUserData ? localUserData.username : '',
      token: token ? token : ''
    })
  }

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <div className="text-white">
            My Blog App
          </div>
        </h4>

        {data.isAuth ?
          <HeaderLoggedOut setisUserLoggedIn={setisUserLoggedIn}></HeaderLoggedOut>:
          <HeaderLogIn setisUserLoggedIn={setisUserLoggedIn}></HeaderLogIn>}
      </div>
    </header>
  )
}

export default Header
