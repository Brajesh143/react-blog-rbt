import React, { useState } from "react";
import "./style.css";

export default function App() {
  const languages = [
    'English',
    'Hindi',
    'Bhojpuri'
  ]

  const [listDatas, setListdatas] = useState(languages);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item]
    });
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h2>Checkbox</h2>
      { listDatas.map(lang => 
        <div>
        <input type="checkbox" checked={!!checkedItems[lang]} onChange={() => handleCheckboxChange(lang)} />{lang}<span>{ !!checkedItems[lang] ? <button>Delete</button> : '' }</span>
        </div>
      )}
    </div>
  );
}
