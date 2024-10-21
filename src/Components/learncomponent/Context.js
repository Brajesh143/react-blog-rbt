MyContext:
----------
import React, {createContext} from "react"

export const MyContext = createContext()

App.js:
----------
import React, {useState} from "react";
import "./style.css";
import { MyContext } from "./MyContext"
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent"

export default function App() {
  const [value, setValue] = useState()
  return (
    <MyContext.Provider value={{ value, setValue }}>
      <FirstComponent />
      <SecondComponent />
    </MyContext.Provider>
  );
}


FirstComponent:
---------------
import React, {useState, useContext} from "react";
import { MyContext } from "./MyContext"

export default function FirstComponent() {
  const { value, setValue } = useContext(MyContext)

  const handleSubmit = () => {
    setValue("This is my context value")
  }

  return (
    <>
      <h1>This is my first component</h1>
      <h2>{ value } </h2>
      <button onClick={handleSubmit}>SUBMIT</button>
    </>
  );
}


SecondComponent:
----------------
import React, { useState, useContext } from 'react';
import { MyContext } from './MyContext';

export default function FirstComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <>
      <h1>This is my second component</h1>
      <h2>{value} </h2>
    </>
  );
}
