import React from 'react';
import styles from './AccordionItem.module.scss'
import Image from "../Image";

const AccordionItem = ({item, totalSum}) => {

    return (
        <div className={styles['accordion-container']}>
            <Image src={item.img} alt={item.name} size='img-sm' className={styles['accordion-img']}/>
            <p className={styles['accordion-title']}>{item.name}</p>
            <p className={styles['accordion-signature']}>Total earned:</p>
            <p className={styles['accordion-collected']}>{`$ ${totalSum}`}</p>
        </div>
    );
};

export default AccordionItem;