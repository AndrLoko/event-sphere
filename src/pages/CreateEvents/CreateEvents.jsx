import React, { useState } from 'react'
import './CreateEvents.scss'


export default function CreateEvents() {

  const [click, setClick] = useState('')
  const [inputTitle, setInputTitle] = useState(""); 
  const [inputDate, setInputDate] = useState(""); 
  const [inputPrice, setInputPrice] = useState("")
  const [inputDescr, setInputDescr] = useState("")


  function handleInputChange(event) {
    setInputTitle(event.target.value); 
  }

  function handleInputDate(event) {
    setInputDate(event.target.value)

  }

  function handleInputPrice(event) {
    setInputPrice(event.target.value)
  }

  function handleInputDescr(event) {
    setInputDescr(event.target.value)
  }

  function handleClick() {
    setClick(inputTitle);  
    setClick(inputDate)
    setClick(inputPrice)
    setClick(inputDescr)
    console.log(inputTitle);
    console.log(inputDate)
    console.log(inputPrice)
    console.log(inputDescr)
  }


  return (
    <div className="input__wrapper">
      <input type="text" value={inputTitle} onChange={handleInputChange}/>
      <input type="date" value={inputDate} onChange={handleInputDate} />
      <input type="number" value={inputPrice} onChange={handleInputPrice}/> 
      <input type="text" value={inputDescr} onChange={handleInputDescr}/>
      <button onClick={handleClick}>Создать событие</button>
    </div>
  )
}
