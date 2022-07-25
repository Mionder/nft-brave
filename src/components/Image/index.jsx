import React from 'react';
import styles from './Img.module.scss'
import stylesDrop from './ImgDrop.module.scss'
import stylesBuy from './ImgBuy.module.scss'
import stylesRank from './ImgRank.module.scss'
import stylesControl from './ImgControl.module.scss'

const Image = ({src, pictureComponent, alt}) => {
    let additionalClass = ''

    if(pictureComponent === 'drop'){
        additionalClass = stylesDrop['img-container']
    }
    if(pictureComponent === 'buy'){
        additionalClass = stylesBuy['img-container']
    }
    if(pictureComponent === 'rank'){
        additionalClass = stylesRank['img-container']
    }
    if(pictureComponent === 'control'){
        additionalClass = stylesControl['img-container']
    }

    return (
        <div
            className={`${styles['img-container']} ${additionalClass}`}
        >
            <img src={src} alt={alt}/>
        </div>

    );
};

export default Image;