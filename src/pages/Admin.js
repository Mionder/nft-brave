import React from 'react';
import {getBrigades, emptyObjectBrigade, getChevrons, emptyObjectChevron} from "../hooks";
import Image from "../components/Image";
import { Accordion, Box, InputLabel, Modal, TextareaAutosize } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SelectCustom from "../components/SelectCustom";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './AdminStyles.module.scss'
import ChevronPlayer from "../components/ChevronPlayer";

const Admin = () => {
    const [data, setData] = React.useState([emptyObjectBrigade]);
    const [chevronList, setChevronList] = React.useState([emptyObjectChevron]);
    const [order, setOrder] = React.useState(0);
    const [isEditOrder, setIsEditOrder] = React.useState(false);
    const [isEditOrderNft, setIsEditOrderNft] = React.useState(false);
    const [brigade, setBrigade] = React.useState(emptyObjectBrigade);
    const [chevron, setChevron] = React.useState(emptyObjectChevron);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isEditNft, setIsEditNft] = React.useState(false);
    const [selectedBrigade, setSelectedBrigade] = React.useState({});
    const [selectedNft, setSelectedNft] = React.useState({});
    const [isLoginModalShow, setIsLoginModalShow] = React.useState(true);
    const [loginData, setLoginData] = React.useState({login: '', password: ''})
    const [isDelete, setIsDelete] = React.useState({status: false, id: null, isBrigade: null});
    React.useEffect(() => {
        const isAuth = auth();
        dataSetter();
        if (isAuth) {
            setIsLoginModalShow(false);
        }
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
        overflow: 'auto',
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

    const selectNft = async (id) => {
        setIsEditNft(true);
        await fetch(`http://localhost:3000/nft/${id}`)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              setSelectedNft(data)
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
            setIsEditOrder(false);
        })();
    }
    const editOrder = () => {
        const isExist = data.some(item => item.order === selectedBrigade.order);
        if (!isExist) {
            (async () => {
                await fetch(`http://localhost:3000/brigades/${selectedBrigade._id}`, {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ order: selectedBrigade.order })
                });

                dataSetter();
                setIsEditOrder(false);
            })();
        }
    }

    const editNft = () => {
        (async () => {
            await fetch(`http://localhost:3000/nft/${selectedNft._id}`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedNft)
            });

            dataSetter();
            setIsEditNft(false);
            setIsEditOrderNft(false);
        })();
    }


    const editOrderNft = () => {

        const isExist = chevronList.some(item => item.order === selectedNft.order);
        if (!isExist) {
            (async () => {
                await fetch(`http://localhost:3000/nft/${selectedNft._id}`, {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ order: selectedNft.order })
                });

                dataSetter();
                setIsEditOrderNft(false);
            })();
        }
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
            setIsDelete({...isDelete, status: false, isBrigade: null})

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
            dataSetter();
            setIsDelete({...isDelete, status: false, isBrigade: null});
        })()
    }

    const selectEditOrder = (item) => {
        setSelectedBrigade(item)
        setIsEditOrder(true);
    }

    const selectEditOrderNft = (item) => {
        setSelectedNft(item)
        setIsEditOrderNft(true);
    }

    const auth = () => {
        const isAuth = localStorage.getItem('AdminAuth');
        const {login, password} = loginData;
        if ((login === 'admin' && password === 'admin') || isAuth) {
            setIsLoginModalShow(false);
            localStorage.setItem('AdminAuth', true);
            return true;
        }
        return false;
    }



    return (
        <div className="container">
            <h2 className="title-admin">Edit brigades info</h2>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
                {data.sort((item, itemNext) => item.order - itemNext.order).map((item) => {
                    return (
                      <div className="admin-brigade__card" key={item._id} >
                          <div style={{display: 'flex', alignItems: 'center'}}>
                              <Image size={'img-sm'} src={item.img} alt={item.name}/>
                              <p className="admin-title__item">{item.name}</p>
                          </div>
                          <div className="actions-admin">
                              <DeleteIcon fontSize="large" onClick={() => setIsDelete({status: true, id: item._id, isBrigade: true})}/>
                              <EditIcon fontSize="large" onClick={() => selectBrigade(item._id)}/>
                              <ChangeCircleIcon fontSize="large" onClick={() => selectEditOrder(item)} />
                              {/*<EditIcon fontSize="large" onClick={() => selectEditOrder(item)}/>*/}
                          </div>
                          <div className="actions-order">
                              {item.order}
                          </div>
                      </div>
                    )
                })}
            </div>

            <h2 className="title-admin">Edit chevrons info</h2>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
                {chevronList.sort((item, itemNext) => item.order - itemNext.order).map((item) => {
                    return (
                      <div className="admin-brigade__card" key={item['_id']}>
                          {/*<Image size={'img-sm'} src={item.img} alt={item.name} />*/}
                          <ChevronPlayer
                              className={styles.chevron_video}
                              style={{
                                  borderRadius: 12,
                                  overflow: 'hidden',
                                  width: '72px',
                                  justifyContent: 'flex-start',
                                  marginBottom: 10}}
                              size={'video-sm'}
                              url={item.video} />
                          <p className="admin-title__item">{item.name}</p>
                          <div className="actions-admin">
                              <DeleteIcon fontSize="large" onClick={() => setIsDelete({status: true, id: item._id, isBrigade: false})}/>
                              <EditIcon fontSize="large" onClick={() => selectNft(item._id)} />
                              <ChangeCircleIcon fontSize="large" onClick={() => selectEditOrderNft(item)} />
                          </div>
                          <div className="actions-order">
                              {item.order}
                          </div>
                      </div>
                    )
                })}
            </div>


                 <Modal
                   open={isLoginModalShow}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"
                 >
                  <Box sx={style}>
                      <h1>Login</h1>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                      </AccordionSummary>
                      <AccordionDetails className={styles.modal_wrapper}>
                          {selectedBrigade.name}
                          <TextField
                            id="outlined-basic"
                            value={loginData.login}
                            onChange={(e) => setLoginData({...loginData, login: e.target.value})}
                            label="Login"
                            variant="outlined"
                            type="text"
                            className={styles.modal_field}
                          />
                          <TextField
                            id="outlined-basic"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            label="Password"
                            variant="outlined"
                            type="text"
                            className={styles.modal_field}
                          />
                          <button className={styles.modal_button} onClick={auth}>Sign In</button>
                      </AccordionDetails>
                  </Box>
              </Modal>



            <Modal
              open={isEditOrder}
              onClose={() => setIsEditOrder(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.modal}>
                    <h1>Edit</h1>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                        <p>Edit Brigade order</p>
                    </AccordionSummary>
                    <AccordionDetails className={styles.create_wrapper}>
                        {selectedBrigade.name}
                        <TextField
                          id="outlined-basic"
                          value={selectedBrigade.order}
                          onChange={(e) => setSelectedBrigade({...selectedBrigade, order: +e.target.value})}
                          label="Order"
                          variant="outlined"
                          type="number"
                          className={styles.field_full}
                        />
                        <button className={styles.modal_button} onClick={editOrder}>Edit</button>
                    </AccordionDetails>
                </Box>
            </Modal>

            <Modal
              open={isEdit}
              onClose={() => setIsEdit(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.modal}>
                    <h1>Edit</h1>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon/>}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                            <p>Edit Brigade</p>
                        </AccordionSummary>
                        <AccordionDetails className={styles.create_wrapper}>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.name}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, name: e.target.value})}
                              fullWidth
                              margin="normal"
                              required
                              label="Brigade Name"
                              variant="outlined"
                              className={styles.field_full}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.year}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, year: +e.target.value})}
                              margin="normal"
                              type="number"
                              label="Рік формування"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.kindOfTroops}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, kindOfTroops: e.target.value})}
                              margin="normal"
                              label="Вид військ"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.typeOfTroops}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, typeOfTroops: e.target.value})}
                              margin="normal"
                              label="Тип військ"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.awards}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, awards: e.target.value})}
                              margin="normal"
                              label="Нагороди"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.motto}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, motto: e.target.value})}
                              margin="normal"
                              label="Гасло"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.trophies}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, trophies: e.target.value})}
                              margin="normal"
                              label="Трофеї"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.protector}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, protector: e.target.value})}
                              margin="normal"
                              label="Оборонець"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.pet}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, pet: e.target.value})}
                              margin="normal"
                              label="Бойовий улюбленець"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                              id="outlined-basic"
                              value={selectedBrigade.videoLink}
                              onChange={(e) => setSelectedBrigade({...selectedBrigade, videoLink: e.target.value})}
                              margin="normal"
                              label="Посилання на вiдео"
                              variant="outlined"
                              className={styles.field_third}/>
                            <TextField
                                id="outlined-basic"
                                value={selectedBrigade.img}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, img: e.target.value})}
                                margin="normal"
                                label="Фото бригади (base64)"
                                variant="outlined"
                                className={styles.field_third}/>
                            <TextField
                                id="outlined-basic"
                                value={selectedBrigade.order}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, order: +e.target.value})}
                                label="Порядок"
                                variant="outlined"
                                margin="normal"
                                type="number"
                                className={styles.field_third}
                            />
                            <TextField
                                id="outlined-basic"
                                value={selectedBrigade.affiliation}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, affiliation: e.target.value})}
                                margin="normal"
                                label="Приналежність"
                                variant="outlined"
                                className={styles.field_third}/>

                            <InputLabel className={styles.field_full} id="textarea-brigade-description">{`Опис до бригади`}</InputLabel>
                            <TextareaAutosize
                                id="textarea-brigade-description"
                                value={selectedBrigade.description}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, description: e.target.value})}
                                aria-label="опис"
                                minRows={3}
                                className={styles.field_textarea}
                            />
                            <TextField
                                id="outlined-basic"
                                value={selectedBrigade.facebook}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, facebook: e.target.value})}
                                margin="normal"
                                label="Facebook"
                                variant="outlined"
                                className={styles.field_third}/>
                            <TextField
                                id="outlined-basic"
                                value={selectedBrigade.instagram}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, instagram: e.target.value})}
                                margin="normal"
                                label="Instagram"
                                variant="outlined"
                                className={styles.field_third}/>
                            <TextField
                                id="outlined-basic"
                                value={selectedBrigade.youtube}
                                onChange={(e) => setSelectedBrigade({...selectedBrigade, youtube: e.target.value})}
                                margin="normal"
                                label="YouTube"
                                variant="outlined"
                                className={styles.field_third}/>
                            <button className={styles.modal_button} onClick={editBrigadeNft}>Edit</button>
                        </AccordionDetails>
                </Box>
            </Modal>


            <Dialog
              open={isDelete.status}
              onClose={() => setIsDelete({ ...isDelete, status: false })}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Delete Modal
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure, that you want to Delete {isDelete.isBrigade ? 'Brigade' : 'Nft'}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className={styles.modal_button} onClick={() => setIsDelete({...isDelete, status: false})}>Close</Button>
                    <Button className={styles.modal_button} onClick={() => isDelete.isBrigade ? deleteBrigadeNft(isDelete.id) : deleteChevron(isDelete.id)} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>




            <Modal
              open={isEditOrderNft}
              onClose={() => setIsEditOrderNft(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.modal}>
                    <h1>Edit</h1>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                        <p>Edit Nft order</p>
                    </AccordionSummary>
                    <AccordionDetails className={styles.create_wrapper}>
                        {selectedNft.name}
                        <TextField
                          id="outlined-basic"
                          value={selectedNft.order}
                          onChange={(e) => setSelectedNft({...selectedNft, order: +e.target.value})}
                          label="Order"
                          variant="outlined"
                          type="number"
                          className={styles.field_full}
                        />
                        <button className={styles.modal_button} onClick={editOrderNft}>Edit</button>
                    </AccordionDetails>
                </Box>
            </Modal>

            <Modal
              open={isEditNft}
              onClose={() => setIsEditNft(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={styles.modal}>
                    <h1>Edit</h1>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon/>}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                        <p>Edit Nft</p>
                    </AccordionSummary>
                    <AccordionDetails className={styles.create_wrapper}>
                        <TextField
                          id="outlined-basic"
                          value={selectedNft.name}
                          onChange={(e) => setSelectedNft({...selectedNft, name: e.target.value})}
                          fullWidth
                          margin="normal"
                          required
                          label="Brigade Name"
                          variant="outlined"
                          className={styles.field_full}/>

                        <InputLabel className={styles.field_full} id="textarea-chevron-description-edit">{`Description`}</InputLabel>
                        <TextareaAutosize
                            id="textarea-chevron-description-edit"
                            value={selectedNft.description}
                            onChange={(e) => setSelectedNft({...selectedNft, description: e.target.value})}
                            aria-label="опис"
                            minRows={3}
                            className={styles.field_textarea}
                        />
                        <TextField
                          id="outlined-basic"
                          value={selectedNft.price}
                          onChange={(e) => setSelectedNft({...selectedNft, price: e.target.value})}
                          margin="normal"
                          type="number"
                          label="Price"
                          variant="outlined"
                          className={styles.field_third}/>
                        <TextField
                          id="outlined-basic"
                          value={selectedNft.editions}
                          onChange={(e) => setSelectedNft({...selectedNft, editions: e.target.value})}
                          margin="normal"
                          label="Edition"
                          type="number"
                          variant="outlined"
                          className={styles.field_third}/>
                        <TextField
                          id="outlined-basic"
                          value={selectedNft.video}
                          onChange={(e) => setSelectedNft({...selectedNft, video: e.target.value})}
                          margin="normal"
                          label="Посилання на вiдео"
                          variant="outlined"
                          className={styles.field_third}/>

                        <InputLabel className={styles.field_full} id="select-connected-brigade-edit">{`пов'язана бригада`}</InputLabel>
                        <SelectCustom
                            style={{width: '100%'}}
                            labelId='select-connected-brigade-edit'
                            label='пов\`язана бригада'
                            value={selectedNft.brigadeId}
                            onChange={(e) => setSelectedNft({...selectedNft, brigadeId: e.target.value})}
                            data={data}
                            className={styles.field_full}
                        />
                        <button className={styles.modal_button} onClick={editNft}>Edit</button>
                    </AccordionDetails>
                </Box>
            </Modal>





            <Accordion className={styles.create_container}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.create_title}
                >
                    <p>Create new Brigade</p>
                </AccordionSummary>
                <AccordionDetails className={styles.create_wrapper}>
                    <TextField
                        id="outlined-basic"
                        value={brigade.name}
                        onChange={(e) => setBrigade({...brigade, name: e.target.value})}
                        fullWidth
                        margin="normal"
                        required
                        label="Brigade Name"
                        variant="outlined"
                        className={styles.field_full}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.year}
                        onChange={(e) => setBrigade({...brigade, year: +e.target.value})}
                        margin="normal"
                        type="number"
                        label="Рік формування"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.kindOfTroops}
                        onChange={(e) => setBrigade({...brigade, kindOfTroops: e.target.value})}
                        margin="normal"
                        label="Вид військ"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.typeOfTroops}
                        onChange={(e) => setBrigade({...brigade, typeOfTroops: e.target.value})}
                        margin="normal"
                        label="Тип військ"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.awards}
                        onChange={(e) => setBrigade({...brigade, awards: e.target.value})}
                        margin="normal"
                        label="Нагороди"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.motto}
                        onChange={(e) => setBrigade({...brigade, motto: e.target.value})}
                        margin="normal"
                        label="Гасло"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.trophies}
                        onChange={(e) => setBrigade({...brigade, trophies: e.target.value})}
                        margin="normal"
                        label="Трофеї"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.protector}
                        onChange={(e) => setBrigade({...brigade, protector: e.target.value})}
                        margin="normal"
                        label="Оборонець"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.pet}
                        onChange={(e) => setBrigade({...brigade, pet: e.target.value})}
                        margin="normal"
                        label="Бойовий улюбленець"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.videoLink}
                        onChange={(e) => setBrigade({...brigade, videoLink: e.target.value})}
                        margin="normal"
                        label="Посилання на вiдео"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.img}
                        onChange={(e) => setBrigade({...brigade, img: e.target.value})}
                        margin="normal"
                        label="Фото бригади (base64)"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.order}
                        onChange={(e) => setBrigade({...brigade, order: +e.target.value})}
                        label="Порядок"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        className={styles.field_third}
                    />
                    <TextField
                        id="outlined-basic"
                        value={brigade.affiliation}
                        onChange={(e) => setBrigade({...brigade, affiliation: e.target.value})}
                        margin="normal"
                        label="Приналежність"
                        variant="outlined"
                        className={styles.field_third}/>

                    <InputLabel className={styles.field_full} id="textarea-brigade-description">{`Опис до бригади`}</InputLabel>
                    <TextareaAutosize
                        id="textarea-brigade-description"
                        value={brigade.description}
                        onChange={(e) => setBrigade({...brigade, description: e.target.value})}
                        aria-label="опис"
                        minRows={3}
                        className={styles.field_textarea}
                    />
                    <TextField
                        id="outlined-basic"
                        value={brigade.facebook}
                        onChange={(e) => setBrigade({...brigade, facebook: e.target.value})}
                        margin="normal"
                        label="Facebook"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.instagram}
                        onChange={(e) => setBrigade({...brigade, instagram: e.target.value})}
                        margin="normal"
                        label="Instagram"
                        variant="outlined"
                        className={styles.field_third}/>
                    <TextField
                        id="outlined-basic"
                        value={brigade.youtube}
                        onChange={(e) => setBrigade({...brigade, youtube: e.target.value})}
                        margin="normal"
                        label="YouTube"
                        variant="outlined"
                        className={styles.field_third}/>
                    <Button className={styles.button_submit} onClick={createBrigadeNft}>Створити</Button>
                </AccordionDetails>
            </Accordion>

            <Accordion className={styles.create_container}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.create_title}
                >
                    <p>Create new Chevron</p>
                </AccordionSummary>
                <AccordionDetails className={styles.create_wrapper}>
                    <TextField
                        id="outlined-basic"
                        value={chevron.name}
                        onChange={(e) => setChevron({...chevron, name: e.target.value})}
                        label="Назва шеврону"
                        variant="outlined"
                        margin="normal"
                        className={styles.field_full}
                    />
                    <TextField
                        id="outlined-basic"
                        value={chevron.editions}
                        onChange={(e) => setChevron({...chevron, editions: +e.target.value})}
                        label="Видання"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        className={styles.field_third}
                    />
                    <TextField
                        id="outlined-basic"
                        value={chevron.price}
                        onChange={(e) => setChevron({...chevron, price: +e.target.value})}
                        label="Ціна"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        className={styles.field_third}
                    />
                    <TextField
                        id="outlined-basic"
                        value={chevron.video}
                        onChange={(e) => setChevron({...chevron, video: e.target.value})}
                        label="Відео посилання"
                        variant="outlined"
                        margin="normal"
                        className={styles.field_third}
                    />
                    <InputLabel className={styles.field_full} id="textarea-chevron-description">{`Опис до шеврону`}</InputLabel>
                    <TextareaAutosize
                        id="textarea-chevron-description"
                        value={chevron.description}
                        onChange={(e) => setChevron({...chevron, description: e.target.value})}
                        aria-label="опис"
                        minRows={3}
                        className={styles.field_textarea}
                    />

                    <InputLabel className={styles.field_full} id="select-connected-brigade">{`пов'язана бригада`}</InputLabel>
                    <SelectCustom
                        style={{width: '100%'}}
                        labelId='select-connected-brigade'
                        label='пов\`язана бригада'
                        value={chevron.brigadeId}
                        onChange={(e) => setChevron({...chevron, brigadeId: e.target.value})}
                        data={data}
                        className={styles.field_full}
                    />

                    <Button className={styles.button_submit} onClick={createChevron}>Створити</Button>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default Admin;