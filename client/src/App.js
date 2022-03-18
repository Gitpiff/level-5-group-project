import './App.css';
import Nav from "./components/Nav"
import Home from "./Home"
import Search from "./Search"
import { Routes, Route } from "react-router-dom"
import Error from "./components/Error"


function App() {
  return (
    <>
      <Nav />
      <div className='background-image'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={(<><Error /><Home /></>)} />
        </Routes>
      </div>
    </>
  )
}

export default App
