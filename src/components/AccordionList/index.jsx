import React from 'react';
import AccordionItem from "../AccordionItem";

const AccordionList = ({data}) => {
    return (
        <div>
            {data.map(item => {
                return <AccordionItem key={item['_id']} item={item} totalSum='20000' />
            })}
        </div>
    );
};

export default AccordionList;