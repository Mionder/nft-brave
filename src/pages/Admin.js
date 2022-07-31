import React from 'react';
import getBrigades from "../hooks";
import Image from "../components/Image";
import { Accordion } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';

const Admin = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    dataSetter();
  }, [])

  const dataSetter = async () => {
    setData(await getBrigades());
  }

  return (
    <>
      <h1>Title</h1>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <Image size={'img-sm'} src={item.img} alt={item.name} />
            <p>{item.name}</p>
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
          <TextField id="outlined-basic" fullWidth margin="normal" required label="Brigade Name" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" type="number" label="Рік формування" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Належність" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Вид військ" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Тип військ" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Нагороди" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Гасло" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Трофеї" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Оборонець" variant="outlined" />
          <TextField id="outlined-basic" margin="normal" label="Бойовий улюбленець" variant="outlined" />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Admin;