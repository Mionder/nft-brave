import React from 'react';
import styles from '../DropSection/DropSection.module.scss'
import Typography from "../Typography";
import CardList from "../CardList";
import RanksConfig from "../../resourses/configs/RanksConfig";

const RanksSection = () => {


  return (
    <section className={styles['ranks-section']}>
      <div className='container'>
        <div className={styles['ranks-section__wrapper']}>
          <div className={styles['ranks-section__title__container']}>
            <Typography titleNum='h3' className={styles['ranks-section__title']} color='primary'> <span>Level up</span> your ranks </Typography>
            <p className={styles['ranks-section__subtitle']}>
              Collect more chevrons and increase your battle rank
            </p>
          </div>
          <CardList data={RanksConfig} className={styles['drop-section__list']} btnTitle='Upgrade'/>
        </div>
      </div>
    </section>
  );
};

export default RanksSection;