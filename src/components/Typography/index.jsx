import React from 'react';
import styleVars from '../../resourses/styles/style.scss'
import stylesTypography from './Typography.module.scss'


const Typography = ({children, titleNum, color= 'primary', textAlign='left', className }) => {

    if(titleNum === 'h1'){
        return (
            <h1
                className={`${stylesTypography.h1} ${className} ${color === 'yellow' && stylesTypography['h1-yellow']} ${textAlign === 'right' && stylesTypography['h1-right']}`}
            >
                {children}
            </h1>
        );
    }
    if(titleNum === 'h2'){

        return (
            <h2
                className={`${stylesTypography.h2} ${className} ${color === 'yellow' && stylesTypography['h2-yellow']} ${textAlign === 'right' && stylesTypography['h1-right']}`}
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