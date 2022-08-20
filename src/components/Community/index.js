import React from "react";
import Typography from "../Typography";
import Button from "../Button";

const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <div className="community-wrapper">
          <Typography titleNum="h3" color="secondary"><span>Immerse</span> yourself</Typography>
          <Typography titleNum="h3" color="secondary">in the army life</Typography>
          <p className="community-text">All participants get access to a closed Telegram channel with the news directly from the fighters</p>
          <Button isYellow={false}><a href="https://t.me/+WKoM8jkqoBszZjEy">Join community</a></Button>
        </div>
      </div>
    </section>
  )
}

export default Community;