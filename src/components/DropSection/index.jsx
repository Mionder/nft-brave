import React from 'react';
import styles from './DropSection.module.scss'
import Typography from "../Typography";
import CardList from "../CardList";
import {getBrigades} from "../../hooks";

const DropSection = () => {
    const [data, setData] = React.useState([]);

    const dataSetter = async () => {
        setData(await getBrigades());
    }

    React.useEffect(() => {
        dataSetter();
    }, [])

    return (
        <section className={styles['drop-section']}>
            <div className='container'>
                <div className={styles['drop-section__wrapper']}>
                    <Typography className={styles['drop-section__title']} titleNum='h3' color='primary'> <span>1</span> DROP </Typography>
                    <CardList data={data} className={styles['drop-section__list']}/>
                </div>
            </div>
        </section>
    );
};

export default DropSection;