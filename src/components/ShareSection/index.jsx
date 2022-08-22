import React, {useState} from 'react';
import styles from './ShareSection.module.scss'
import imgBg from '../../resourses/mocks/img-share-bg.png'
import Typography from "../Typography";
import Button from "../Button";
import {Alert} from "@mui/material";

const ShareSection = () => {
    const [alertVisible, setAlertVisible] = useState(false)

    const ShareBtnHandler = () => {
        navigator.clipboard.writeText("Maksim Mykal top 1 Grimstroke in the world");

        setAlertVisible(true)
        setTimeout(()=>{
            setAlertVisible(false)
        }, 2000)
    }


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

                    <Alert className={`${styles['share-alert']} ${alertVisible && styles['share-alert__visible']}`} severity='info'>Link was copied in your clipboard</Alert>
                    <Button onClick={ShareBtnHandler} className={styles['share-section-btn']} isYellow={false}>Share the project</Button>
                </div>
            </div>
        </section>
    );
};

export default ShareSection;