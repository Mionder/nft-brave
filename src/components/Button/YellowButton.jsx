import React from 'react';
import styles from './YellowButton.module.scss'

const YellowButton = ({children, btnStyles}) => {
    return (
        <button className={`${btnStyles} ${styles.btn}`}>
            {children}
        </button>
    );
};

export default YellowButton;