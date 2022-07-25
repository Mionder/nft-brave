import React from 'react';
import stylesTypography from './Typography.module.scss'
import stylesH2Collect from './H2Collect.module.scss'
import stylesH2Immerse from './H2Immerse.module.scss'
import stylesH3Card from './H3Card.module.scss'
import stylesTitleYellow from './TitleYellow.module.scss'


const Typography = ({children, titleNum, isYellow=false, h2Spec='', isH3Card=false}) => {
    if(titleNum === 'h1'){
        return (
            <h1
                className={`${stylesTypography.h1} ${isYellow ? stylesTitleYellow['title-yellow'] : ''}`}
            >
                {children}
            </h1>
        );
    }
    if(titleNum === 'h2'){
        let specH2Name = ''

        if(h2Spec === 'collect') {
            specH2Name = stylesH2Collect['h2-spec']
        }
        if(h2Spec === 'immerse') {
            specH2Name = stylesH2Immerse['h2-spec']
        }

        return (
            <h2
                className={`${stylesTypography.h2} ${specH2Name}`}
            >
                {children}
            </h2>
        );
    }
    if(titleNum === 'h3'){
        return (
            <h3
                className={`${stylesTypography.h3} ${isH3Card ? stylesH3Card['h3-card'] : ''}`}
            >
                {children}
            </h3>
        );
    }
};

export default Typography;