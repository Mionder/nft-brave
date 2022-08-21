import React from "react";
import ReactPlayer from "react-player";
import Video from "../../resourses/mocks/conect-video.mp4";
import Typography from "../Typography";

const CollectSection = () => {
  return (
    <section className="collect">
      <div className="container">
        <div className="collect-wrapper">
          <Typography className="collect-top-title" titleNum="h2">Collect nft chevrons</Typography>
          <ReactPlayer
            url={Video}
            playing={true}
            style={{display: "flex", justifyContent: "center", margin: "auto", boxShadow:'0px 0px 72px 8px #0f0f0f, 0px 0px 38px 23px #0f0f0f inset'}}
            muted
            loop
            width='900px'
            height='887px'
          />
          <Typography className="collect-bottom-title" titleNum="h2" textAlign="right">of Ukrainian combat units</Typography>
          <p className="collect-text">All the money will be used for ammunition for specific brigades and battalions</p>
        </div>
      </div>
    </section>
  )
}
export default CollectSection;