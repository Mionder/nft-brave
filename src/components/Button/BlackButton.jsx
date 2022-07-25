import React from 'react';
import styles from './BlackButton.module.scss'

const BlackButton = ({children, btnStyles}) => {
    return (
        <button className={`${btnStyles} ${styles.btn}`}>
            {children}
        </button>
    );
};

export default BlackButton;