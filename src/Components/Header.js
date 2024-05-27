import React, { useState }  from "react"
import HeaderLogIn from "./HeaderLogIn"
import HeaderLoggedOut from "./HeaderLogout"

function Header(props) {
  let [isUserLoggedIn,setisUserLoggedIn ]  = useState(false)

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <div className="text-white">
            My Blog App
          </div>
        </h4>

        {isUserLoggedIn?
          <HeaderLoggedOut setisUserLoggedIn={setisUserLoggedIn}></HeaderLoggedOut>:
          <HeaderLogIn setisUserLoggedIn={setisUserLoggedIn}></HeaderLogIn>}
      </div>
    </header>
  )
}

export default Header
