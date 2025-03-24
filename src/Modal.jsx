import React, { useEffect, useState } from "react"
import "./Modal.scss"
import "./assets/solarData"
import solarData from "./assets/solarData"

export default function Modal({currPlanet}) {
  const [planetData, setPlanetData] = useState({
    id: 0,
    name: "",
    radiusInEarths: 109.2,
    yearInEarthYears: 0,
    dayInEarthDays: 27,
    knownMoons: 0,
    distanceFromSunInAU: 0,
    summary: ""
  })

  useEffect(()=> {
    setPlanetData(prev => solarData.filter((val) => val.name === currPlanet)[0] || prev)

  }, [currPlanet])

  return (
    <div className="modalBox">
      <h2 className="modalTitle">{planetData.name}</h2>
      <table>
        <tbody>
          <tr>
            <th>Radius</th>
            <td>{planetData.radiusInEarths} Earths</td>
          </tr>
          <tr>
            <th>Distance From Sun</th>
            <td>{planetData.distanceFromSunInAU} AU</td>
          </tr>
          <tr>
            <th>Year in Years</th>
            <td>{planetData.yearInEarthYears} Earth Years</td>
          </tr>
          <tr>
            <th>Day in Days</th>
            <td>{planetData.dayInEarthDays} Earth Days</td>
          </tr>
          <tr>
            <th>Known Moons</th>
            <td>{planetData.knownMoons}</td>
          </tr>
        </tbody>
      </table>
      <p className="modalSubtitle">{planetData.summary}</p>
    </div>
  )
}
