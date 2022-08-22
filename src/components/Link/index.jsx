import React from 'react';
import styles from './Link.module.scss'

const Link = ({children, isBtn = false, href, className, target = '_blank'}) => {
    return (
        <a
            href={href}
            className={`${styles.link} ${isBtn && styles['like-btn']} ${className}`}
            target={target}
        >{children}</a>
    );
};

export default Link;