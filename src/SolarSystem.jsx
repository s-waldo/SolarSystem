import React, { useEffect, useState } from "react"

export default function SolarSystem({ viewOption }) {
  const [classes, setClasses] = useState("")

  useEffect(()=> {
    let classes = ""
    classes += viewOption.speed ? "speed ": ""
    classes += viewOption.size ? "size ": ""
    classes += viewOption.distance ? "distance ": ""
    setClasses(`${classes}`)
  }, [viewOption])

  return (
    <>
      <div className={`solarSystem ${classes}`}>
        <div id="sun"><div className="up"></div></div>
        <div className="object" id="mercury">
          <div className="planetAnchor">
            <div className="planet"></div>
          </div>
        </div>
        <div className="object" id="venus">
          <div className="planetAnchor">
            <div className="planet"></div>
          </div>
        </div>
        <div className="object" id="earth">
          <div className="planetAnchor">
            <div className="planet"></div>
          </div>
        </div>
        <div className="object" id="mars">
          <div className="planetAnchor">
            <div className="planet"></div>
          </div>
        </div>
        <div className="object" id="jupiter">
          
            <div className="planetAnchor">
              <div className="planet"></div>
            </div>
          
        </div>
        <div className="object" id="saturn">
          <div className="planetAnchor">
            <div className="planet">
              <div className="rings"></div>
              <div className="up"></div>
            </div>
          </div>
        </div>
        <div className="object" id="uranus">
          <div className="planetAnchor">
            <div className="planet"></div>
          </div>
        </div>
        <div className="object" id="neptune">
          <div className="planetAnchor">
            <div className="planet"></div>
          </div>
        </div>
      </div>
    </>
  )
}
