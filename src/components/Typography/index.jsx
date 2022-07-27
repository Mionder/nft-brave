import React from 'react';
import styleVars from '../../resourses/styles/style.scss'
import stylesTypography from './Typography.module.scss'


const Typography = ({children, titleNum, color= 'primary' }) => {

    if(titleNum === 'h1'){
        return (
            <h1
                className={`${stylesTypography.h1}`}
            >
                {children}
            </h1>
        );
    }
    if(titleNum === 'h2'){

        return (
            <h2
                className={`${stylesTypography.h2}`}
            >
                {children}
            </h2>
        );
    }

    if(titleNum === 'h3'){

        return (
            <h3
                className={`${stylesTypography.h3} ${color === 'secondary' && stylesTypography['h3-secondary']}`}
            >
                {children}
            </h3>
        );
    }
    if(titleNum === 'h4'){

        return(
            <h4
                className={`${stylesTypography.h4}`}
            >
                {children}
            </h4>
        )
    }
};

export default Typography;