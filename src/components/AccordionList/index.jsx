import React, {useState} from 'react';
import AccordionItem from "../AccordionItem";
import styles from "./AccordionList.module.scss";
import Image from "../Image";
import {Accordion, AccordionDetails, Typography} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
//import iconMore from 'src/resourses/mocks/label-accordion-more.svg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AccordionList = ({data, totalSum}) => {
    const [expanded, setExpanded] = useState('accordion-0')

    const accordionCollapseHandler = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={styles['accordion-container']}>
            {data.map((item, index) => {
                return (
                    <Accordion expanded={expanded === `accordion-${index}`} disableGutters={true} key={item['_id']} className={styles['accordion-item']} onChange={accordionCollapseHandler(`accordion-${index}`)}>
                        <AccordionSummary
                            className={styles['accordion-header']}
                            expandIcon={<MoreVertIcon className={styles['accordion-icon-more'] + ' ' + (expanded === `accordion-${index}` && styles['accordion-icon-more__collapsed'])}/>}
                            aria-controls={`accordion-content-${index}`}
                            id={`accordion-header-${index}`}
                        >
                            <Typography className={styles['accordion-header-content']}>
                                <Image src={item.img} alt={item.name} size='img-sm' className={styles['accordion-img']}/>
                                <p className={styles['accordion-title']}>{item.name}</p>
                                <p className={styles['accordion-signature']}>Total earned:</p>
                                <p className={styles['accordion-collected']}>{`$ ${totalSum}`}</p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p>hui</p>
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                )
            })}
        </div>
    );
};

export default AccordionList;