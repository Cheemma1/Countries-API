import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import jsonData from "./data.json";

import { ArrowLeft, Moon, Sun } from "phosphor-react";

const CountryDetails = () => {
  const [toggle, setToggle] = useState(false);

  const LightBtn = () => {
    setToggle((last) => !last);
  };
  // getting the countries code/id from the data
  const { alpha3Code } = useParams();

  // Find the country details based on the alpha3code
  const country = jsonData.find((place) => place.alpha3Code === alpha3Code);

  if (!country) {
    return <p>Details not found</p>;
  }
  console.log(country?.name);
  return (
    <div className={`bg-${toggle ? "gray-800" : "white"}  font-Nunito lg:h-screen`}>
      <div className="container m-auto px-4 md:px-0 ">
        <div className=" flex items-center justify-between md:flex-row p-6">
          <h2
            className={`${
              toggle ? "text-white" : "text-black"
            } shadow-xl pt-5 font-bold`}
          >
            
            Where in the world
          </h2>

          <button
            className={`bg-${toggle ? "bg-gray-800" : "white"}  ${
              toggle ? "text-white" : "text-black"
            } shadow-xl py-2 rounded-md flex items-center justify-center gap-2 px-2`}
            onClick={LightBtn}
          >
            
            {toggle ? <Sun /> : <Moon />} {toggle ? "light" : "dark"} mood
          </button>
        </div>

        <button
          className={`bg-${toggle ? "bg-gray-800" : "white"}  ${
            toggle ? "text-white" : "text-black"
          } shadow-xl py-2 ml-4 md:ml-0 rounded-md flex items-center justify-center gap-2 px-2 `}
        >
          <Link to={"/"} className="flex items-center justify-center gap-2">
        
            <ArrowLeft />
            Back
          </Link>
        </button>

    
        <div className={` ${toggle ? 'text-white' : 'text-black'} grid  lg:grid-cols-2 py-4 px-4 lg:px-0 gap-5`}>
          <img src={country.flag} alt="country flag" className="w-full lg:w-fit" />
          <div>
            <h2 className="font-bold text-3xl py-3">{country.name}</h2>
            <div className="flex flex-col lg:items-center justify-between  lg:flex-row lg:gap-20">
              <div className="flex flex-col gap-4 pb-4">
                <p className="font-bold">
                
                  Native Name:
                  <span className="font-thin">{country.nativeName}</span>
                </p>
                <p className="font-bold">
                
                  Population:
                  <span className="font-thin">{country.population}</span>
                </p>
                <p className="font-bold">
                
                  Subregion:
                  <span className="font-thin">{country.subregion}</span>
                </p>
                <p className="font-bold">
                  Capital: <span className="font-thin">{country.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Top Level Domain:{" "}
                  <span className="font-thin">{country.topLevelDomain}</span>
                </p>
                <div className="flex gap-1">
                  <p className="font-bold">Currencies:</p>
                  {country?.currencies?.map((n) => (
                    <span>{n.code}</span>
                  ))}
                </div>
                <div className="flex gap-1">
                <p className="font-bold"> Languages:</p>
                {country?.languages?.map((l) => (
                  <span>{l?.name}</span>
                ))}</div>
              </div>
            </div>
            <p className="font-bold pt-5 lg:pt-0">
                  Borders: <span className="font-thin">{country?.borders?.join(" ")}</span>
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
