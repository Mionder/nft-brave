import React from "react";
import Link from "../Link";
import { TextField, Modal } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "../Button";
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1100,
  height: 'auto',
  bgcolor: '#000000',
  boxShadow: 24,
  padding: '48px 140px 48px 84px',
  border: '1px solid #FFFFFF',
  borderRadius: 20,
};

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '2px solid #CFFB03',
    overflow: 'hidden',
    borderRadius: 34,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 400,
  },
}));

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [myEmail, setEmail] = React.useState('');

  const addUser = async () => {
    const localToken = token();
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({email: myEmail, token: localToken, isExpired: false})
    }).then(async (res) => {

      await fetch(`http://localhost:3000/registration`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify({email: myEmail, token: localToken})
      })
        .then(async (res) =>{
          console.log(res);
          await addUser();
        })
        .catch((err) => { console.log(err) })
    }).catch((err) => { console.log(err) })
  }

  const rand = () => {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  const token = () => {
    return rand() + rand(); // to make it longer
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <img src=" data:image/png;base64,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" alt="logo" />
            </div>
            <div className="navigation">
              <Link href="https://opensea.io/">OpenSea</Link>
              <Link href="mailto:test@test.com">Contact us</Link>
              <Button className="header-btn" isYellow={false} onClick={() => setIsOpen(true)}>Sign in</Button>
            </div>
          </div>
        </div>
      </header>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{position: 'relative'}}>
            <Typography id="modal-modal-title" color="#FFFFFF" fontSize="36px" variant="h6" component="h1">
              SIGN IN
            </Typography>
            <Typography color="#FFFFFF" fontSize="24px" maxWidth="730px" id="modal-modal-description" sx={{ mt: 2 }}>
              Enter your email to receive the magic link to access your account!
              If you don’t have an account we’ll create it for you automatically.
            </Typography>
            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '30px'}}>
              <RedditTextField
                id="reddit-input"
                variant="filled"
                value={myEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="card-btn" onClick={() => addUser()}>Sign in</Button>
            </Box>
            <CloseIcon onClick={() => setIsOpen(false)} fontSize="large" sx={{ color: '#FFF' }} style={{position: 'absolute', cursor: 'pointer', top: '16px', right: '36px'}} />
          </Box>
        </Modal>
    </>
  )
}

export default Header;