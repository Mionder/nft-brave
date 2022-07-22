import React from 'react';
import styles from './Link.module.scss'

const Link = ({likeBtn=false, href, children}) => {
    return (
        <a href={href} className={`${styles.link} ${likeBtn ? styles['link-like-btn'] : ''}`}>
            {children}
        </a>
    );
};

export default Link;