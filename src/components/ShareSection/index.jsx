import React from 'react';
import styles from './ShareSection.module.scss'
import imgBg from '../../resourses/mocks/img-share-bg.png'
import Typography from "../Typography";
import Button from "../Button";

const ShareSection = () => {
    return (
        <section className={styles['share-section']}>
            <div className="container">
                <div className={styles['share-section-wrapper']}>

                    <div className={styles['share-section-img-bg']}>
                        <img src={imgBg} alt="img-share"/>
                    </div>

                    <div className={ styles['share-section-title-container']}>
                        <Typography titleNum='h2' className={styles['share-section-title']}>
                            Let's help young and brave Ukraine
                        </Typography>
                        <Typography titleNum='h2' className={styles['share-section-title']} color='yellow' textAlign='right'>
                            to defeat world evil together
                        </Typography>
                    </div>


                    <Button className={styles['share-section-btn']} isYellow={false}>Share the project</Button>
                </div>
            </div>
        </section>
    );
};

export default ShareSection;