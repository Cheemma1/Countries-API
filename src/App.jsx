import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CountryDetails from "./components/CountryDetails"

function App() {

  return (
   <Router>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/details/:alpha3Code" element={<CountryDetails />} />
</Routes>

   </Router>
  )
}

export default App
