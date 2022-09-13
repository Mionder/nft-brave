import React from 'react';
import styles from './Card.module.scss'

import Image from "../Image";
import Button from "../Button";
import ReactPlayer from "react-player";
import ChevronPlayer from "../ChevronPlayer";

const Card = ({className, src, title, contentType = 'img', btnTitle = 'Buy'}) => {
    return (
        <div className={`${className} ${styles.card}`}>
            {contentType === 'img' &&
                <Image className={styles['card-image']} src={src} alt={title} size='img-lg'/>
            }
            {contentType === 'video' &&
                <ChevronPlayer
                    url={src}
                    size='video-lg'

                />
            }

            <p className={styles['card-title']}>{title}</p>
            <Button className={styles['card-btn']} isYellow={true}>{btnTitle}</Button>
        </div>
    );
};

export default Card;