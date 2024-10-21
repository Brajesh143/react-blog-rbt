import React, { useState } from "react";
import "./style.css";

const languages = [
  'Hindi',
  'English',
  'Bhojpuri',
  'Punjabi',
  'Tamil',
  'Telegu'
]

const genders = [
  'Male',
  'Female',
  'Other'
]

export default function App() {
  const [langDatas, setLangDatas] = useState(languages)
  const [genderData, setGenderData] = useState(genders)
  const [inputData, setInputData] = useState({
    language: [],
    gender: ""
  })

  const handleChecked = (item) => {
    const updatedLang = inputData.language.includes(item) ? inputData.language.filter((lang) => lang !== item) : [...inputData.language, item]
    setInputData({...inputData, language: updatedLang})
  }


  const handleForm = (e) => {
    e.preventDefault()
    console.log(inputData)
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <form onSubmit={handleForm}>
        <label>Language</label>
        { langDatas.map(lang => 
          <div>
            <input type="checkbox" name="language" onChange={() => {handleChecked(lang)}} checked={inputData.language.includes(lang)} />{ lang }
          </div>
        )}
      <br />

      <label>Gender</label>
        { genderData.map(gen => 
          <div>
            <input type="radio" name="gender" value={inputData.gender} checked={inputData.gender === gen} onChange={() => setInputData({...inputData, gender: gen})} />{ gen }
          </div>
        )}
      <br />

      <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
