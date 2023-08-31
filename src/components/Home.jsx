import React, { useState } from 'react'
import Country from './Country'
import DarkLightToggle from './DarkLightToggle'

const Home = () => {
    const [dark, setDark] =useState(false)

    const toggleBtn=() =>{
setDark((prevMood) => !prevMood)
console.log("ok")
    }
  return (
    <div className={`bg-${dark ? "gray-800" : "white"}` }> 
    <DarkLightToggle dark={dark} setDark={setDark} toggleBtn={toggleBtn} />
    <Country dark={dark}/>
  </div>
  )
}

export default Home