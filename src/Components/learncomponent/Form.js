import React, { useState } from "react";
import "./style.css";

const countries = [
  'India',
  'Pakistan',
  'Nepal',
  'Mayanmaar',
  'Bhutan',
  'Sri Lanka'
];

const languages = [
  'English',
  'Hindi',
  'Bhojpuri'
];

const genders = [
  'Male',
  'Female',
  'Other'
];

export default function App() {
  const [country, setCountry] = useState(countries);
  const [language, setLanguage] = useState(languages);
  const [gender, setGender] = useState(genders);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    language: [],
    gender: ""
  });

  const handleChange = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value});
  };

  const handleCheckboxChange = (lang) => {
    const updatedLanguages = inputData.language.includes(lang)
      ? inputData.language.filter(item => item !== lang)
      : [...inputData.language, lang];
      
    setInputData({
      ...inputData,
      language: updatedLanguages
    });
  };

  const handleRadioChange = (gen) => {
    setInputData({
      ...inputData,
      gender: gen
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <form onSubmit={handleForm}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} value={inputData.name} />
        </div>
        <br />

        <div>
          <label>Email: </label>
          <input type="text" name="email" onChange={handleChange} value={inputData.email} />
        </div>
        <br />

        <div>
          <label>Password: </label>
          <input type="password" name="password" onChange={handleChange} value={inputData.password} />
        </div>
        <br />

        <div>
          <label>Country: </label>
          <select name="country" value={inputData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            { country.map((cont, index) =>
                <option key={index} value={cont}>{ cont }</option>
            )}
          </select>
        </div>
        <br />

        <div>
          <label>Language: </label>
          { language.map((lang, index) =>
            <div key={index}> 
              <input type="checkbox" name="language" checked={inputData.language.includes(lang)}
              onChange={() => handleCheckboxChange(lang)}/>{ lang }
            </div>
          ) }
        </div>
        <br />

        <div>
          <label>Gender: </label>
          { gender.map((gen, index) =>
            <div key={index}> 
              <input type="radio" name="gender" value={gen} onChange={() => handleRadioChange(gen)} checked={inputData.gender === gen} />{ gen }
            </div>
          ) }
        </div>
        <br />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
