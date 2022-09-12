import React, {useRef, useState} from 'react';
import ReactPlayer from "react-player";
import styles from './index.module.scss';
import login from "../../pages/Login";

const ChevronPlayer = ({url, className, size}) => {
    const [playableMob, setPlayableMob] = useState(false)
    const p = useRef()

    const playableHandler = () => {
        p.current.seekTo(0)

    }

    return (
        <ReactPlayer
            ref={p}

            className={`${className} ${styles.player} ${styles[size]}`}
            url={url}
            playing={true}
            muted
            //loop
            controls={false}
            onEnded = {playableHandler}
            // onSeek={(seconds) => playableHandler}
        />
    );
};

export default ChevronPlayer;