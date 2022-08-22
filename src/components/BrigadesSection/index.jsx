import React from 'react';
import styles from './BrigadesSection.module.scss'
import AccordionList from "../AccordionList";
import Typography from "../Typography";

const BrigadesSection = ({data}) => {
    return (
        <section className={styles['brigades-section']}>
            <div className='container'>
                <div className={styles['brigades-section__wrapper']}>
                    <div className={styles['brigades-section__title__container']}>
                        <Typography titleNum='h3' className={styles['brigades-section__title']} color='primary'> <span>Control</span> how and what money is spent on </Typography>
                        <p className={styles['brigades-section__subtitle']}>
                            Get reports on how purchased ammunition helps Ukrainians liberate their sovereignty and lands
                        </p>
                    </div>

                    <AccordionList data={data} className={styles['brigades-section__accordion']} totalSum='20000'/>
                </div>
            </div>
        </section>
    );
};

export default BrigadesSection;