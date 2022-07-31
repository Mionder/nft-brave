import React from 'react';
import styles from './Img.module.scss'

const Image = ({src, size='img-md', alt, className}) => {

    return (
        <div
            className={`${className} ${styles['img-container']} ${styles[size]}`}
        >
            <img src={src} alt={alt}/>
        </div>

    );
};

export default Image;