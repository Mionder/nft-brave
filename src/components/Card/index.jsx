import React from 'react';
import styles from './Card.module.scss'

import Image from "../Image";
import Button from "../Button";

const Card = ({className, src, title, addStyles= false}) => {
    return (
        <div className={`${className} ${styles.card} ${addStyles && styles['card-add']}`}>
            <Image className={styles['card-image']} src={src} alt={title} size='img-lg'/>
            <p className={styles['card-title']}>{title}</p>
            <Button className={styles['card-btn']} isYellow={true}>Buy</Button>
        </div>
    );
};

export default Card;