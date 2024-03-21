import React  from "react"
import HeaderLogIn from "./HeaderLogIn"

function Header(props) {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <div className="text-white">
            My Blog App
          </div>
        </h4>

        <HeaderLogIn />
      </div>
    </header>
  )
}

export default Header
