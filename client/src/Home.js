import React from "react"
import { Link } from "react-router-dom"
import ChefLogo from "./components/images/chef.png"
import CookLogo from "./components/images/cook.png"

function Home() {
  return (
    <div className="home">
      <Link to="/search"><img src={CookLogo}></img><h1>Cook</h1></Link>
      <Link to="/search"><img src={ChefLogo}></img><h1>Chef</h1></Link>
    </div>
  )
}

export default Home