import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="error-404">
      <div className="container">
        <div className="wrapper-error">
          <h4>Oops, something was broken</h4>
          <Link to="/">Go to homepage</Link>
        </div>
      </div>

    </section>
  )
}

export default Error404;