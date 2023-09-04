import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return <section>
      <h1>Sorry, page not found </h1>
      <button type="button">
      <Link to="/">Back to Home page</Link>
      </button>
    </section>
}

export default NotFound