import React from 'react';
import styles from './Link.module.scss'

const Link = ({children, isBtn, href, className}) => {
    return (
        <a
            href={href}
            className={`${styles.link} ${isBtn && styles['like-btn']} ${className}`}
        >{children}</a>
    );
};

export default Link;