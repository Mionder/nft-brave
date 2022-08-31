import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="error-404">
      <div className="container">
        <div className="wrapper-error">
          <h4>Successfully done</h4>
          <Link to="/">Go to homepage</Link>
        </div>
      </div>
    </section>
  )
}

export default Success;