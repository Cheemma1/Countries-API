import { Moon, Sun } from 'phosphor-react'
import React from 'react'

const DarkLightToggle = ({dark,toggleBtn}) => {
  return (
    <div className="container mx-auto flex items-center justify-between font-Nunito px-4 md:px-0">


    <h2 className={`${dark ? 'text-white' : 'text-black'} shadow-xl pt-5 font-bold`}>  Where in the world</h2>
    
    <button className={`bg-${dark ? 'bg-gray-800' : 'white'}  ${dark ? 'text-white' : 'text-black'} shadow-xl py-2 rounded-md flex items-center justify-center gap-2 px-2`}  onClick={toggleBtn}>  {dark ?  <Sun/> :  <Moon/>}  { dark ? 'light': 'dark'}  mood</button>
        </div>
      
  )
}

export default DarkLightToggle