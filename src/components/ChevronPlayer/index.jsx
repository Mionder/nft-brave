import React, {useRef, useState} from 'react';
import ReactPlayer from "react-player";
import styles from './index.module.scss';
import login from "../../pages/Login";

const ChevronPlayer = ({url, className, size}) => {
    const playerRef = useRef(null)

    // const playableHandler = () => {
    //     playerRef.current.seekTo(0)
    //
    // }

    const progressVideo = () => {
        const duration = playerRef.current.getDuration() * 1000;
        console.log(1);
        setTimeout(() => {
            playerRef.current.seekTo(0);
            progressVideo();
        }, duration - 1000)
    }

    return (
        <ReactPlayer
            ref={playerRef}

            className={`${className} ${styles.player} ${styles[size]}`}
            url={url}
            playing={true}
            muted
            //loop
            onProgress={(state) => console.log(state)}
            controls={false}
            // onEnded = {playableHandler}
            onStart={progressVideo}
            // onSeek={(seconds) => playableHandler}
        />
    );
};

export default ChevronPlayer;