import React from 'react';
import styles from './Button.module.scss'
import stylesBlack from './BlackButton.module.scss'
import stylesYellow from './YellowButton.module.scss'

const Button = ({children, isYellow=true, className, onClick}) => {

    return (
        <button
            className={`${className} ${ isYellow ? stylesYellow.btn : stylesBlack.btn } ${styles.btn}`}
            onClick={onClick}
        >{children}</button>

    );
};

export default Button;