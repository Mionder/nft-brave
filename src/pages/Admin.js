import React from 'react';
import {getBrigades, emptyObjectBrigade, getChevrons, emptyObjectChevron} from "../hooks";
import Image from "../components/Image";
import { Accordion, Box, InputLabel, MenuItem, Modal, Select, TextareaAutosize } from "@mui/material";
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
import EditIcon from '@mui/icons-material/Edit';
import RanksConfig from '../resourses/configs/RanksConfig'
import SelectCustom from "../components/SelectCustom";
import ReactPlayer from "react-player";
import Video from "../resourses/mocks/Open_army_main_final.mp4";

const Admin = () => {
    const [data, setData] = React.useState([emptyObjectBrigade]);
    const [chevronList, setChevronList] = React.useState([emptyObjectChevron]);
    const [order, setOrder] = React.useState(0);
    const [brigade, setBrigade] = React.useState(emptyObjectBrigade);
    const [chevron, setChevron] = React.useState(emptyObjectChevron);
    const [isEdit, setIsEdit] = React.useState(false);
    const [selectedBrigade, setSelectedBrigade] = React.useState({});
    React.useEffect(() => {
        dataSetter();
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        bgcolor: '#fff',
        boxShadow: 24,
        padding: '48px 140px 48px 84px',
        borderRadius: 20,
        border: '2px solid #000',
    };

    const dataSetter = async () => {
        setChevronList(await getChevrons())
        setData(await getBrigades());
    }

    const selectBrigade = async (id) => {
        setIsEdit(true);
        await fetch(`http://localhost:3000/brigades/${id}`)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              setSelectedBrigade(data)
          });
    }

    const editBrigadeNft = () => {
        (async () => {
            await fetch(`http://localhost:3000/brigades/${selectedBrigade._id}`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedBrigade)
            });

            dataSetter();
            setIsEdit(false);
        })();
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
                body: JSON.stringify({ ...brigade, order: data.length + 1 })
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

            {data.map((item) => {
                return (
                    <div key={item._id} style={{display: 'flex', alignItems: 'center', background: '#fff'}}>
                        <Image size={'img-sm'} src={item.img} alt={item.name}/>
                        <p>{item.name}</p>
                        <DeleteIcon onClick={() => deleteBrigadeNft(item._id)}/>
                        <EditIcon onClick={() => selectBrigade(item._id)}/>
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

            <Modal
              open={isEdit}
              onClose={() => setIsEdit(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Edit</h1>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon/>}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                            <p>Edit Brigade</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.name}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, name: e.target.value})}
                              fullWidth
                              margin="normal"
                              required
                              label="Brigade Name"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.year}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, year: +e.target.value})}
                              margin="normal"
                              type="number"
                              label="Рік формування"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.kindOfTroops}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, kindOfTroops: e.target.value})}
                              margin="normal"
                              label="Вид військ"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.typeOfTroops}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, typeOfTroops: e.target.value})}
                              margin="normal"
                              label="Тип військ"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.awards}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, awards: e.target.value})}
                              margin="normal"
                              label="Нагороди"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.motto}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, motto: e.target.value})}
                              margin="normal"
                              label="Гасло"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.trophies}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, trophies: e.target.value})}
                              margin="normal"
                              label="Трофеї"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.protector}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, protector: e.target.value})}
                              margin="normal"
                              label="Оборонець"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.pet}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, pet: e.target.value})}
                              margin="normal"
                              label="Бойовий улюбленець"
                              variant="outlined"/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.videoLink}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, videoLink: e.target.value})}
                              margin="normal"
                              label="Посилання на вiдео"
                              variant="outlined"/>
                            <button onClick={editBrigadeNft}>Edit</button>
                        </AccordionDetails>
                </Box>
            </Modal>

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