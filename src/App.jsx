import "./App.scss"
import "./Menu.scss"
import Menu from "./Menu"
import SolarSystem from "./SolarSystem"
import Stars from "./Stars"
import Modal from "./Modal"
import { useState } from "react"

function App() {
  const [viewOption, setViewOption] = useState({
    speed: true,
    size: false,
    distance: false
  })
  const [currPlanet, setCurrPlanet] = useState("Sun")

  const handleViewOption = (e) => {
    setViewOption(prev => ({...prev, [e.target.id]: !prev[e.target.id]}))
  }

  const handleButtonClick = (e) => {
    setCurrPlanet(e.target.id)
  }

  return (
    <>
      <Stars />
      <Menu
        handleViewOption={handleViewOption}
        viewOption={viewOption}
        currPlanet={currPlanet}
        handleButtonClick={handleButtonClick}
      />
      <SolarSystem viewOption={viewOption} />
      <Modal currPlanet={currPlanet} />
    </>
  )
}

export default App
