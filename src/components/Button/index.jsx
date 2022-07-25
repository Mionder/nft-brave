import React from 'react';
import YellowButton from "./YellowButton";
import BlackButton from "./BlackButton";
import styles from './CustomButton.module.scss'

const CustomButton = ({children, isYellow}) => {
    if(isYellow){
        return <YellowButton btnStyles={styles.btn}>{children}</YellowButton>
    }

    return (
        <BlackButton btnStyles={styles.btn}>{children}</BlackButton>
    );
};

export default CustomButton;