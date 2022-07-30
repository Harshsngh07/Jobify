import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <img src={img} alt="not found" />
      <h3>Oops, page not found !!</h3>
      <Link to="/">Back Home</Link>
    </Wrapper>
  );
}

export default Error;
