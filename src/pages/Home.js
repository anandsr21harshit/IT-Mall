import React from "react";
import "../css/home.css";
import {Link} from "react-router-dom"

function Home() {
  return (
    <section className="home-container">
      <div className="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="home-image"
        />
      </div>
      <div className="overlay-text">
        <h1 className="overlay-text__title">All your IT Products at one Place</h1>
        <Link to="/pl"><button className="btn btn-secondary">Shop Now</button></Link>
      </div>
    </section>
  );
}

export { Home };
