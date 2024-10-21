MyContext:
-----------
import React, { createContext } from 'react';

export const MyContext = createContext();

MyProvider:
------------
import React, { useState } from 'react';
import { MyContext } from './MyContext';

export default function MyProvider({ children }) {
  const [listData, setListData] = useState([]);

  return <MyContext.Provider value={[ listData, setListData ]}>{children}</MyContext.Provider>;
}

Index:
--------
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import MyProvider from "./MyProvider"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>
);


App:
-----
import React, { useContext, useEffect } from 'react';
import './style.css';
import { MyContext } from './MyContext';
import First from "./First"

export default function App() {
  const [listData, setListData] = useContext(MyContext);

  const countries = [
    'India',
    'Pakistan',
    'Myanmaar',
    'Bangladesh',
    'Bhuttan',
    'China',
  ];

  useEffect(() => {
    setListData(countries);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <First />
    </div>
  );
}

First:
--------
import React, { useContext } from "react"
import { MyContext } from "./MyContext"

export default function First() {
  const [listData, setListData] = useContext(MyContext);

  return (
    <>
      <h2>Country List</h2>
      { listData.map(data => 
        <li>{ data }</li>
      )}
    </>
  )
}

