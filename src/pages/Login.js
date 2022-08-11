import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = () => {
  const [myEmail, setEmail] = React.useState('');
  const Register = async () => {
    console.log(1111);
    await fetch(`http://localhost:3000/registration`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({email: myEmail, token: token()})
    })
      .then(async (res) =>{
        console.log(res);
        await addUser();
      })
      .catch((err) => { console.log(err) })
  }
  const addUser = async () => {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({email: myEmail, token: token(), isExpired: false})
    }).then(async (res) => {
      console.log(res);
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
      <TextField
        id="outlined-basic"
        value={myEmail}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        type="text"
        label="Email"
        variant="outlined" />
      <button onClick={() => Register()}>Test</button>
      {/*<Button variant="outlined" onClick={() => Register}>Login</Button>*/}
    </>
  )
}

export default Login;