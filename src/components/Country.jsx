import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import jsonData from "./data.json"
const Country = ({dark}) => {
const [countries, serCountries] = useState([])
const [search, setSearch] = useState("")

const fetchCountry = async () =>{
   try {
    serCountries(jsonData)
   } catch (error) {
    console.log("error", error)
   } 
}

useEffect(()=>{
fetchCountry()
},[])
  return (
   
    <div className="container m-auto font-Nunito">
    <div className="flex items-center justify-between py-6">
      <input
        type="text"
        placeholder="search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`bg-${dark ? 'bg-gray-800' : 'white'}  shadow-xl py-2 outline-none rounded-md` }
      />
      <select
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       className={`bg-${dark ? 'bg-gray-800' : 'white'}  ${dark ? 'text-white' : 'text-black'} shadow-xl py-2 rounded-md outline-none` }
    
      >
        <option value="all">filter by region</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="america">America</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5  ">
      {countries
        .filter((count) => {
          return search.toLowerCase() === ""
            ? count
            : count.region.toLowerCase().includes(search);
        })
        .map((place) => (
          <Link
            key={place.alpha3Code}
            to={`/details/${place.alpha3Code}`}
            className={`bg-${dark ? "gray-800" : "white"} ${
              dark ? "text-white" : "text-black"
            } w-full shadow-xl`}
          >
            <img src={place.flag} alt="country img" />
            <div className="px-4">
              <h2 className="font-bold">{place.name}</h2>
              <p>{place.population}</p>
              <p>{place.region}</p>
              <p>{place.capital}</p>
            </div>
          </Link>
  
        ))}
    </div>
  </div>

  )
}

export default Country