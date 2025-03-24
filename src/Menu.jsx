import React from "react"
import "./Menu.scss"
import { Button, Radio, Toggle } from "./Components"
import solarData from "./assets/solarData"

export default function Menu({
  handleViewOption,
  viewOption,
  currPlanet,
  handleButtonClick,
}) {
  return (
    <div className="selectionMenu">
      <h2>CSS Solar System</h2>
      <div className="viewOptions">
        <h3>View Options</h3>
        <Toggle
          id={"speed"}
          onClickFunction={handleViewOption}
          checked={viewOption.speed}
        />
        <Toggle
          id={"size"}
          onClickFunction={handleViewOption}
          checked={viewOption.size}
        />
        <Toggle
          id={"distance"}
          onClickFunction={handleViewOption}
          checked={viewOption.distance}
        />
      </div>
      <div className="planetSpotlight">
        <h3>Planet Spotlight</h3>
        {solarData.map((object) => {
          let classes = ""

          if (currPlanet === object.name) {
            classes = "active"
          }

          return (
            <Button
              key={object.id}
              id={object.name}
              classes={classes}
              onClick={handleButtonClick}
            />
          )
        })}
      </div>
    </div>
  )
}
