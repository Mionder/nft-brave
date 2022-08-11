import React from "react";
import { SpinnerCircular } from 'spinners-react';
import { useNavigate } from "react-router-dom";

const SuccessRedirect = () => {
  let isToken = false;
  const navigate = useNavigate();


  const checkRedirect = async () => {
     await fetch('http://localhost:3000/users')
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await checkToken(data);
      });
  }

  const checkToken = async (data) => {
    const token = window.location.href.slice(-22);
    // console.log(token, 'tse');
    // console.log("90ar4lr82a7bjug90qd08h".length);
    isToken = data.some(item => item.token === token);
    // console.log(res);
  }

  React.useEffect(() => {
    checkRedirect();
    setTimeout(() => {
      console.log(isToken, 'tok');
      if(isToken) {
        return navigate("/success");
      } else {
        return navigate("/404");
      }
    }, 1200)


  }, [])

  return (
    <>
      <SpinnerCircular />
    </>
  )
}

export default SuccessRedirect;