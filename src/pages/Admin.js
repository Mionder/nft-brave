import React from 'react';
import {getBrigades, emptyObjectBrigade, getChevrons, emptyObjectChevron} from "../hooks";
import Image from "../components/Image";
import {Accordion, InputLabel, MenuItem, Select, TextareaAutosize} from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import CardList from "../components/CardList";
import Typography from "../components/Typography";
import AccordionList from "../components/AccordionList";
import configAdminCards from '../resourses/configs/configAdminCards.js'
import {Link} from "react-router-dom";
import Card from "../components/Card";
import style from "../components/CardList/CardList.module.scss";
import styleCardAdmin from '../components/Card/Card.module.scss'
import RanksConfig from '../resourses/configs/RanksConfig'
import SelectCustom from "../components/SelectCustom";

const Admin = () => {
    const [data, setData] = React.useState([emptyObjectBrigade]);
    const [chevronList, setChevronList] = React.useState([emptyObjectChevron]);
    const [order, setOrder] = React.useState(0);
    const [brigade, setBrigade] = React.useState(emptyObjectBrigade);
    const [chevron, setChevron] = React.useState(emptyObjectChevron);
    React.useEffect(() => {
        dataSetter();
    }, [])

    const dataSetter = async () => {
        setChevronList(await getChevrons())
        setData(await getBrigades());

    }
    const createBrigadeNft = () => {
        (async () => {
            await fetch('http://localhost:3000/brigades', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(brigade)
            });

            dataSetter();
        })();
    }
    const deleteBrigadeNft = (id) => {
        (async () => {
            await fetch(`http://localhost:3000/brigades/${id}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            dataSetter();

        })();
    }

    const createChevron = () => {
        (async () => {
            await fetch('http://localhost:3000/nft', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chevron)
            })
            dataSetter();
        })()
    }
    const deleteChevron = (id) => {
        (async () => {
            await fetch(`http://localhost:3000/nft/${id}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            dataSetter()
        })()
    }



    return (
        <>


            <div style={{marginBottom: 80}}>
                <Typography titleNum='h3' color='primary'> ranks </Typography>
                <CardList data={RanksConfig} btnTitle='Upgrade'/>
            </div>

            {/*<div style={{marginBottom: 80}} className={style['card-list']}>*/}

            {/*    {configAdminCards.map(item => {*/}
            {/*        return (*/}
            {/*            <Link key={item['_id']} to={'/'}>*/}
            {/*                <Card key={item['_id']}*/}
            {/*                      className={`${style['card-list-item']} ${styleCardAdmin['card-admin']}`}*/}
            {/*                      src={item.img} title={item.name}/>*/}
            {/*            </Link>*/}
            {/*        )*/}
            {/*    })}*/}

            {/*</div>*/}


            {data.map((item) => {
                return (
                    <div key={item._id} style={{display: 'flex', alignItems: 'center', background: '#fff'}}>
                        <Image size={'img-sm'} src={item.img} alt={item.name}/>
                        <p>{item.name}</p>
                        <DeleteIcon onClick={() => deleteBrigadeNft(item._id)}/>
                        <TextField
                            id="outlined-basic"
                            value={item.order}
                            onChange={(e) => setOrder(+e.target.value)}
                            label="Order"
                            variant="outlined"
                            type="number"
                        />
                    </div>
                )
            })}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p>Create new Brigade</p>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="outlined-basic"
                        value={brigade.name}
                        onChange={(e) => setBrigade({...brigade, name: e.target.value})}
                        fullWidth
                        margin="normal"
                        required
                        label="Brigade Name"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.year}
                        onChange={(e) => setBrigade({...brigade, year: +e.target.value})}
                        margin="normal"
                        type="number"
                        label="Рік формування"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.kindOfTroops}
                        onChange={(e) => setBrigade({...brigade, kindOfTroops: e.target.value})}
                        margin="normal"
                        label="Вид військ"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.typeOfTroops}
                        onChange={(e) => setBrigade({...brigade, typeOfTroops: e.target.value})}
                        margin="normal"
                        label="Тип військ"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.awards}
                        onChange={(e) => setBrigade({...brigade, awards: e.target.value})}
                        margin="normal"
                        label="Нагороди"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.motto}
                        onChange={(e) => setBrigade({...brigade, motto: e.target.value})}
                        margin="normal"
                        label="Гасло"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.trophies}
                        onChange={(e) => setBrigade({...brigade, trophies: e.target.value})}
                        margin="normal"
                        label="Трофеї"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.protector}
                        onChange={(e) => setBrigade({...brigade, protector: e.target.value})}
                        margin="normal"
                        label="Оборонець"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.pet}
                        onChange={(e) => setBrigade({...brigade, pet: e.target.value})}
                        margin="normal"
                        label="Бойовий улюбленець"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.videoLink}
                        onChange={(e) => setBrigade({...brigade, videoLink: e.target.value})}
                        margin="normal"
                        label="Посилання на вiдео"
                        variant="outlined"/>
                    <button onClick={createBrigadeNft}>Створити</button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <p>Create new Chevron</p>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="outlined-basic"
                        value={chevron.name}
                        onChange={(e) => setChevron({...chevron, name: e.target.value})}
                        label="Назва шеврону"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        id="outlined-basic"
                        value={chevron.editions}
                        onChange={(e) => setChevron({...chevron, editions: +e.target.value})}
                        label="Видання"
                        variant="outlined"
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        id="outlined-basic"
                        value={chevron.price}
                        onChange={(e) => setChevron({...chevron, price: +e.target.value})}
                        label="Ціна"
                        variant="outlined"
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        id="outlined-basic"
                        value={chevron.video}
                        onChange={(e) => setChevron({...chevron, video: e.target.value})}
                        label="Відео посилання"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextareaAutosize
                        id="outlined-basic"
                        value={chevron.description}
                        onChange={(e) => setChevron({...chevron, description: e.target.value})}
                        aria-label="опис"
                        minRows={3}
                    />

                    <InputLabel id="select-connected-brigade">{`пов'язана бригада`}</InputLabel>
                    <SelectCustom
                        style={{width: 300}}
                        labelId='select-connected-brigade'
                        label='повязана бригада'
                        value={chevron.brigadeId}
                        onChange={(e) => setChevron({...chevron, brigadeId: e.target.value})}
                        data={data}
                    />

                    <button onClick={createChevron}>Створити</button>
                </AccordionDetails>
            </Accordion>


            {chevronList.map((item) => {
                return (
                    <div key={item._id} style={{display: 'flex', alignItems: 'center', background: '#fff'}}>
                        {/*<Image size={'img-sm'} src={item.img} alt={item.name} />*/}
                        <p>{item.name}</p>
                        <DeleteIcon onClick={() => deleteChevron(item._id)}/>
                    </div>
                )
            })}

        </>
    )
}

export default Admin;