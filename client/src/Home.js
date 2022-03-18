import React from "react"
import { Link } from "react-router-dom"
import ChefLogo from "./components/images/chef.png"
import CookLogo from "./components/images/cook.png"

function Home() {
  return (
    <div className="home">
      <Link to="/search" ><img src={CookLogo} alt="cook button logo"></img></Link>
      <Link to="/search" ><img src={ChefLogo} alt="chef button logo"></img></Link>
    </div>
  )
}

export default Home