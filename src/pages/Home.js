import React from "react";
import "../css/home.css";
import {Link} from "react-router-dom"

function Home() {
  return (
    <section className="home-container">
      <div className="image-wrapper">
        <img
          src="https://cdn.printnetwork.com/production/assets/5966561450122033bd4456f8/imageLocker/blog-description/blog/sales_banners.jpg"
          alt=""
          className="home-image"
        />
      </div>
      <div className="overlay-text">
        <Link to="/pl"><button className="btn btn-secondary">Shop Now</button></Link>
      </div>
    </section>
  );
}

export { Home };
