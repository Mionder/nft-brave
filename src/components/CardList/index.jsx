import React from 'react';
import style from './CardList.module.scss'

import Card from "../Card";


const CardList = ({data, addStyles = false}) => {

    return (
        <div className={style['card-list']}>
            {data.map((item,index) => {
                if(index > 2) return

                return (
                    <Card key={item['_id']} className={style['card-list-item']} src={item.img} title={item.name} addStyles={addStyles}/>
                )
            })}
        </div>
    );
};

export default CardList;