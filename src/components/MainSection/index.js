import React from "react";
import Typography from "../Typography";
import ReactPlayer from "react-player";
import Video from "../../resourses/mocks/Open_army_main_final.mp4";
import { Box, Modal } from "@mui/material";

const MainSection = () => {
  const [isPlay, setIsPlay] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handlePlay = () => {
    setIsPlay(true);
    setIsOpen(true);
  }
  const handlePause = () => {
    setIsPlay(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    bgcolor: '#000000',
    boxShadow: 24,
    padding: '48px 140px 48px 84px',
    borderRadius: 20,
    border: '2px solid #FFF',
  };
  return (
    <section className="main-section">
      <div className="container">
        <div style={{marginLeft: '12%'}}>
          <Typography titleNum="h1">Help<span>Become a part of the Ukrainian Army at a safe distance from bullets</span></Typography>
        </div>
        <Typography className="title-left_mobile" titleNum="h1" textAlign="right">
          Ukrainians
        </Typography>

        <div className="concated-titles">
          <Typography titleNum="h1" color="yellow">
            in the fight
            <div onClick={() => handlePlay()} className="video-main">
              <svg width="60" height="60" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="43" cy="43" r="42" stroke="white" strokeWidth="2"/>
                <path d="M63.6035 43.448L33.3692 60.9038L33.3692 25.9922L63.6035 43.448Z" fill="white"/>
              </svg>
            </div>
          </Typography>
          <Typography titleNum="h1" textAlign="right" color="yellow" children="for freedom" />
        </div>
        <div className="mobile-titles">
          <Typography titleNum="h1" color="yellow" textAlign="right">
            in the fight for freedom
          </Typography>
        </div>


        <div onClick={() => handlePlay()} className="video-main video-main_mobile">
          <svg width="60" height="60" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="43" cy="43" r="42" stroke="white" strokeWidth="2"/>
            <path d="M63.6035 43.448L33.3692 60.9038L33.3692 25.9922L63.6035 43.448Z" fill="white"/>
          </svg>
        </div>

        <p className="participation">With the participation of</p>
        <div className="participation-wrapper">
          <div className="items">
            <img src=" data:image/png;base64,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" className="ministry-of-defence" alt="Ministry of Defence" />
            <p>Ministry of Defence
              of Ukraine</p>
          </div>
          <div className="items">
            <img src=" data:image/png;base64,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" alt="Ministry of Digital Information" />
          </div>
        </div>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ReactPlayer
              // url="https://www.youtube.com/embed/MfO4FOSCX-k?rel=0&showinfo=0"
              url={Video}
              onPlay={() => handlePlay()}
              onPause={() => handlePause()}
              playing={isPlay}
              light={true}
              controls
              width='90%'
              height='100%'
              style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}
              playIcon={
                <svg width="60" height="60" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="43" cy="43" r="42" stroke="white" strokeWidth="2"/>
                  <path d="M63.6035 43.448L33.3692 60.9038L33.3692 25.9922L63.6035 43.448Z" fill="white"/>
                </svg>
              }
            />
          </Box>
        </Modal>
      </div>
    </section>
  )
}

export default MainSection;