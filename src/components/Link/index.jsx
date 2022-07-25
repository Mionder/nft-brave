import React from 'react';
import styles from './Link.module.scss'
import stylesBtn from './LinkLikeBtn.module.scss'

const Link = ({children, isLikeBtn, href}) => {
    return (
        <a
            href={href}
            className={`${styles.link} ${isLikeBtn ? stylesBtn['like-btn'] : ''}`}
        >{children}</a>
    );
};

export default Link;