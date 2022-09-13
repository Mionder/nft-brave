import React from 'react';
import style from './CardList.module.scss'
import Card from "../Card";


const CardList = ({data, btnTitle, className}) => {

    return (
        <div className={`${style['card-list']} ${className}`}>
            {data.map((item,index) => {
                if(index > 2) return

                return (
                    <Card
                        key={Math.random()}

                        contentType='video'
                        className={style['card-list-item']}
                        src={item.video}
                        title={item.name}
                        btnTitle={btnTitle}
                    />
                )
            })}
        </div>
    );
};

export default CardList;