import React, {useRef, useState} from 'react';
import ReactPlayer from "react-player";
import styles from './index.module.scss';
import login from "../../pages/Login";

const ChevronPlayer = ({url, className, size}) => {
    const playerRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    // const playableHandler = () => {
    //     playerRef.current.seekTo(0)
    //
    // }
    const onBufferEndHandler = () => {
        console.log('finish')
        setTimeout(() => {
            setIsLoading(false)
        }, 3500)
    }

    const progressVideo = () => {
        const duration = playerRef.current.getDuration() * 1000
        setTimeout(() => {
            playerRef.current.seekTo(0);
            progressVideo();
        }, duration - 1000)
    }

    return (
        <div className={styles.container}>
            {isLoading &&
                <div className={styles.loader}>
                    <div className={styles.loader__ellipsis}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
            <ReactPlayer
                ref={playerRef}
                width='100%'
                // height='unset'
                className={`${className} ${styles.player} ${styles[size]}`}
                url={url}
                playing={true}
                muted
                //loop
                // onProgress={(state) => console.log(state)}
                controls={false}
                // onEnded = {playableHandler}
                onStart={progressVideo}
                // onSeek={(seconds) => playableHandler}
                onBufferEnd={onBufferEndHandler}
            />
        </div>

    );
};

export default ChevronPlayer;