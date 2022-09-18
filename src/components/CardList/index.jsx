import React from 'react';
import style from './CardList.module.scss'
import Card from "../Card";


const CardList = ({data, btnTitle, className, contentType = 'img'}) => {

    return (
        <div className={`${style['card-list']} ${className}`}>
            {data.sort((item, itemNext) => item.order - itemNext.order).map((item,index) => {
                if(index > 2) return

                return (

                    <Card
                        key={Math.random()}
                        contentType={contentType}
                        className={style['card-list-item']}
                        src={contentType === 'img' ? item.img : item.video}
                        title={item.name}
                        btnTitle={btnTitle}
                    />
                )
            })}
        </div>
    );
};

export default CardList;