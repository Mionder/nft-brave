import React from 'react';
import styles from './CustomButton.module.scss'

const CustomButton = ({height, children}) => {
    return (
        <button className={
            `${styles.btn} ${height > 400 ? styles['btn-black'] : styles['btn-yellow']}`
        }>
            {children}
        </button>
    );
};

export default CustomButton;