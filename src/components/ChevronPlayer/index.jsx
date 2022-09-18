import React, {useRef, useState} from 'react';
import ReactPlayer from "react-player";
import styles from './index.module.scss';
import login from "../../pages/Login";

const ChevronPlayer = ({url, className, size, style={}}) => {

    const playerRef = useRef(null)
    const container = useRef(null)
    const observer = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [isPause, setIsPause] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)

    const getWindowSize = () => {
        const {innerWidth, innerHeight} = window;
        return innerWidth;
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    React.useEffect(() => {

        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    React.useEffect(()=>{

        if (windowSize <= 768){
            setIsPlaying(false)
        }
    }, [windowSize])

    React.useEffect(()=>{
        if(windowSize <= 768){
            let callback = function(entries, observer) {
                if(!entries[0].isIntersecting){
                    setIsPlaying(false)
                    setIsPause(true)
                    return
                }
                setIsPlaying(true)
                setTimeout(()=> setIsPause(false), 500)
            }
            observer.current = new IntersectionObserver(callback)
            observer.current.observe(container.current)
        }

    }, [])

    // const playableHandler = () => {
    //     playerRef.current.seekTo(0)
    //
    // }
    const onBufferEndHandler = () => {

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
        <div ref={container} style={style} className={styles.container}>
            {(isLoading || isPause) &&
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
                playing={isPlaying}
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