import React from 'react';
import styles from './Link.module.scss'

const Link = ({children, isBtn, href}) => {
    return (
        <a
            href={href}
            className={`${styles.link} ${isBtn && styles['like-btn']}`}
        >{children}</a>
    );
};

export default Link;