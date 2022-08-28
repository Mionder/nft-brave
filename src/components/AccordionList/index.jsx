import React, {useState} from 'react';
import styles from "./AccordionList.module.scss";
import Image from "../Image";
import {Accordion, AccordionDetails, Typography} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactPlayer from "react-player";
import Link from "../Link";

const AccordionList = ({data, totalSum, className}) => {
    const [expanded, setExpanded] = useState('accordion-0')
    const [playVideo, setPlayVideo] = useState({})

    const playingHandler = (isPlay)=> {
        setPlayVideo(isPlay)
    }

    const accordionCollapseHandler = (panel) => (event, newExpanded) => {
        //console.log(expanded)
        playingHandler({[panel]: false})
        setExpanded(newExpanded ? panel : false)


    };

    const onPlayHandler = (panel)=> {
        playingHandler({[panel]: true})
    }

    return (
        <div className={styles['accordion-container']}>
            {data.map((item, index) => {
                return (
                    <Accordion expanded={expanded === `accordion-${index}`} disableGutters={true} key={item['_id']} className={`${styles['accordion-item']} ${className}`} onChange={accordionCollapseHandler(`accordion-${index}`)}>
                        <AccordionSummary
                            className={styles['accordion-header']}
                            expandIcon={<MoreVertIcon className={styles['accordion-icon-more'] + ' ' + (expanded === `accordion-${index}` && styles['accordion-icon-more__collapsed'])}/>}
                            aria-controls={`accordion-content-${index}`}
                            id={`accordion-header-${index}`}
                        >
                            <div className={styles['accordion-header-content']}>
                                <div className={styles['accordion-summary_group']}>
                                    <Image src={item.img} alt={item.name} size='img-sm' className={styles['accordion-img']}/>
                                    <span className={styles['accordion-title']}>{item.name}</span>
                                </div>
                                <div className={styles['accordion-summary_group-details']}>
                                    <span className={styles['accordion-signature']}>Total earned:</span>
                                    <span className={styles['accordion-collected']}>{`$ ${totalSum}`}</span>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles['accordion-detail-content']}>
                                <div className={styles['accordion-detail-video']}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/embed/MfO4FOSCX-k?rel=0&showinfo=0"
                                        onPlay={() => onPlayHandler(`accordion-${index}`)}
                                        playing={playVideo[`accordion-${index}`]}
                                        light={true}
                                        width='100%'
                                        height='100%'
                                        playIcon={
                                            <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="43" cy="43" r="42" stroke="white" strokeWidth="2"/>
                                                <path d="M63.6035 43.448L33.3692 60.9038L33.3692 25.9922L63.6035 43.448Z" fill="white"/>
                                            </svg>
                                        }
                                    />

                                </div>

                                <div className={styles['accordion-detail-info']}>
                                    <div className={styles['accordion-detail-table']}>

                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Рік формування: </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.year}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Належність: </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.year}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Вид військ:  </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.kindOfTroops}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Тип військ: </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.typeOfTroops}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Нагороди:</p>
                                            <p className={styles['accordion-detail-table__value']}>{item.awards}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Гасло:  </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.motto}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Трофеї: </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.trophies}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Оборонець: </p>
                                            <p className={styles['accordion-detail-table__value']}>{item.protector}</p>
                                        </div>
                                        <div className={styles['accordion-detail-table__item']}>
                                            <p className={styles['accordion-detail-table__description']}>Бойовий улюбленець:</p>
                                            <p className={styles['accordion-detail-table__value']}>{item.pet}</p>
                                        </div>

                                    </div>
                                    <p className={styles['accordion-detail-text']}>
                                        {item.description}
                                    </p>
                                    <div className={styles['accordion-detail-socials']}>
                                        <Link href='#' className={styles['accordion-detail-socials__item']}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.5239 6.58269C30.4106 7.07602 29.2146 7.40935 27.9573 7.56002C29.2546 6.78374 30.2252 5.56198 30.6879 4.12269C29.4691 4.84667 28.1351 5.35628 26.7439 5.62935C25.8084 4.63051 24.5693 3.96846 23.219 3.74599C21.8687 3.52352 20.4827 3.75308 19.2763 4.39902C18.0698 5.04497 17.1103 6.07117 16.5468 7.31829C15.9833 8.56542 15.8473 9.96369 16.1599 11.296C13.6902 11.172 11.2741 10.5301 9.0685 9.41189C6.8629 8.2937 4.91706 6.72424 3.35727 4.80535C2.82393 5.72535 2.51727 6.79202 2.51727 7.92802C2.51667 8.95068 2.76851 9.95768 3.25044 10.8597C3.73237 11.7617 4.42948 12.5307 5.27993 13.0987C4.29364 13.0673 3.3291 12.8008 2.4666 12.3214V12.4014C2.4665 13.8357 2.96264 15.2259 3.87084 16.336C4.77905 17.4462 6.04336 18.2079 7.44927 18.492C6.53431 18.7396 5.57505 18.7761 4.64393 18.5987C5.0406 19.8328 5.81326 20.9121 6.85376 21.6853C7.89425 22.4585 9.15049 22.8869 10.4466 22.9107C8.24638 24.6379 5.52912 25.5748 2.73193 25.5707C2.23644 25.5708 1.74137 25.5419 1.24927 25.484C4.08857 27.3096 7.39372 28.2785 10.7693 28.2747C22.1959 28.2747 28.4426 18.8107 28.4426 10.6027C28.4426 10.336 28.4359 10.0667 28.4239 9.80002C29.639 8.92132 30.6878 7.83322 31.5213 6.58669L31.5239 6.58269Z" fill="white"/>
                                            </svg>
                                        </Link>
                                        <Link href='#' className={styles['accordion-detail-socials__item']}>
                                            <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.3334 3.67606C31.1522 3.0297 30.7993 2.44452 30.3121 1.98273C29.8111 1.50673 29.1972 1.16624 28.5281 0.993394C26.0241 0.333394 15.9921 0.333394 15.9921 0.333394C11.8099 0.285811 7.62866 0.495093 3.47209 0.96006C2.80301 1.14568 2.19017 1.49378 1.68809 1.97339C1.19476 2.44806 0.837424 3.03339 0.650757 3.67473C0.202348 6.09039 -0.0155202 8.54319 9.04891e-05 11.0001C-0.0159095 13.4547 0.201424 15.9067 0.650757 18.3254C0.833424 18.9641 1.18942 19.5467 1.68409 20.0174C2.17876 20.4881 2.79476 20.8281 3.47209 21.0081C6.00942 21.6667 15.9921 21.6667 15.9921 21.6667C20.1796 21.7144 24.3662 21.5051 28.5281 21.0401C29.1972 20.8672 29.8111 20.5267 30.3121 20.0507C30.7991 19.589 31.1516 19.0038 31.3321 18.3574C31.7922 15.9427 32.0159 13.4888 32.0001 11.0307C32.0347 8.5622 31.8113 6.09681 31.3334 3.67473V3.67606ZM12.8028 15.5654V6.43606L21.1494 11.0014L12.8028 15.5654Z" fill="white"/>
                                            </svg>
                                        </Link>
                                        <Link href='#' className={styles['accordion-detail-socials__item']}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.9999 8.83435C10.7062 8.83435 8.83428 10.7062 8.83428 13C8.83428 15.2937 10.7062 17.1656 12.9999 17.1656C15.2937 17.1656 17.1655 15.2937 17.1655 13C17.1655 10.7062 15.2937 8.83435 12.9999 8.83435ZM25.4937 13C25.4937 11.275 25.5093 9.5656 25.4124 7.84373C25.3155 5.84373 24.8593 4.06873 23.3968 2.60623C21.9312 1.1406 20.1593 0.687477 18.1593 0.590602C16.4343 0.493727 14.7249 0.509352 13.003 0.509352C11.278 0.509352 9.56865 0.493727 7.84678 0.590602C5.84678 0.687477 4.07178 1.14373 2.60928 2.60623C1.14365 4.07185 0.690529 5.84373 0.593654 7.84373C0.496779 9.56873 0.512404 11.2781 0.512404 13C0.512404 14.7219 0.496779 16.4344 0.593654 18.1562C0.690529 20.1562 1.14678 21.9312 2.60928 23.3937C4.0749 24.8594 5.84678 25.3125 7.84678 25.4094C9.57178 25.5062 11.2812 25.4906 13.003 25.4906C14.728 25.4906 16.4374 25.5062 18.1593 25.4094C20.1593 25.3125 21.9343 24.8562 23.3968 23.3937C24.8624 21.9281 25.3155 20.1562 25.4124 18.1562C25.5124 16.4344 25.4937 14.725 25.4937 13ZM12.9999 19.4094C9.45303 19.4094 6.59053 16.5469 6.59053 13C6.59053 9.4531 9.45303 6.5906 12.9999 6.5906C16.5468 6.5906 19.4093 9.4531 19.4093 13C19.4093 16.5469 16.5468 19.4094 12.9999 19.4094ZM19.6718 7.82498C18.8437 7.82498 18.1749 7.15623 18.1749 6.3281C18.1749 5.49998 18.8437 4.83123 19.6718 4.83123C20.4999 4.83123 21.1687 5.49998 21.1687 6.3281C21.1689 6.52474 21.1304 6.7195 21.0552 6.90122C20.9801 7.08294 20.8698 7.24806 20.7308 7.3871C20.5917 7.52615 20.4266 7.6364 20.2449 7.71154C20.0632 7.78667 19.8684 7.82522 19.6718 7.82498Z" fill="white"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>

                    </Accordion>
                )
            })}
        </div>
    );
};

export default AccordionList;