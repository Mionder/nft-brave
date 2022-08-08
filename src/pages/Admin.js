import React from 'react';
import { getBrigades, emptyObjectBrigade } from "../hooks";
import Image from "../components/Image";
import { Accordion } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import CardList from "../components/CardList";
import Typography from "../components/Typography";
import AccordionList from "../components/AccordionList";

const Admin = () => {
  const [data, setData] = React.useState([]);
  const [brigade, setBrigade] = React.useState(emptyObjectBrigade);
  React.useEffect(() => {
    dataSetter();
  }, [])

  const dataSetter = async () => {
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

  return (
    <>
      <h1>Title</h1>

      <div style={{background: '#000'}}>
        <AccordionList data={data} totalSum='20000'/>
      </div>


      <div style={{marginBottom: 80}}>
        <Typography titleNum='h3' color='primary'> <span>1</span> DROP </Typography>
        <CardList data={data}/>
      </div>


      {data.map((item) => {
        return (
          <div key={item._id} style={{ display: 'flex', alignItems: 'center' }}>
            <Image size={'img-sm'} src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <DeleteIcon onClick={() => deleteBrigadeNft(item._id)} />
          </div>
        )
      })}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Create new NFT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            id="outlined-basic"
            value={brigade.name}
            onChange={(e) => setBrigade({ ...brigade, name: e.target.value })}
            fullWidth
            margin="normal"
            required
            label="Brigade Name"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.year}
            onChange={(e) => setBrigade({ ...brigade, year: +e.target.value })}
            margin="normal"
            type="number"
            label="Рік формування"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.kindOfTroops}
            onChange={(e) => setBrigade({ ...brigade, kindOfTroops: e.target.value })}
            margin="normal"
            label="Вид військ"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.typeOfTroops}
            onChange={(e) => setBrigade({ ...brigade, typeOfTroops: e.target.value })}
            margin="normal"
            label="Тип військ"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.awards}
            onChange={(e) => setBrigade({ ...brigade, awards: e.target.value })}
            margin="normal"
            label="Нагороди"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.motto}
            onChange={(e) => setBrigade({ ...brigade, motto: e.target.value })}
            margin="normal"
            label="Гасло"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.trophies}
            onChange={(e) => setBrigade({ ...brigade, trophies: e.target.value })}
            margin="normal"
            label="Трофеї"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.protector}
            onChange={(e) => setBrigade({ ...brigade, protector: e.target.value })}
            margin="normal"
            label="Оборонець"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.pet}
            onChange={(e) => setBrigade({ ...brigade, pet: e.target.value })}
            margin="normal"
            label="Бойовий улюбленець"
            variant="outlined" />
          <TextField
            id="outlined-basic"
            value={brigade.videoLink}
            onChange={(e) => setBrigade({ ...brigade, videoLink: e.target.value })}
            margin="normal"
            label="Посилання на вiдео"
            variant="outlined" />
          <button onClick={createBrigadeNft}>Створити</button>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Admin;