import React from "react";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../assets/components/Logo";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container-page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>A job searching app.</p>
          <Link to="/register">
            <button className="btn btn-hero">Login</button>
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
