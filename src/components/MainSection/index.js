import React from "react";
import Typography from "../Typography";

const MainSection = () => {
  return (
    <section>
      <div className="container">
        <Typography titleNum="h1">Help<span>Become a part of the Ukrainian Army at a safe distance from bullets</span></Typography>
        <Typography titleNum="h1" textAlign="right" children="Ukrainians" />
        <Typography titleNum="h1" color="yellow" children="in the fight" />
        <Typography titleNum="h1" textAlign="right" color="yellow" children="for freedom" />
      </div>
    </section>
  )
}

export default MainSection;