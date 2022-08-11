import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      Oops, something was broken
      <Link to="/">Go to homepage</Link>
    </>
  )
}

export default Error404;