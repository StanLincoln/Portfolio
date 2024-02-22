import React from "react";

import work from "./../images/h2.png";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
  return (
    <main className="home">
      <div className="home__wrapper">
        <h1 className="home__title">
          Hi, my name is <span>Stanislav</span>
        </h1>
        <p className="home__subtitle">a frontend developer</p>
        <div className="home__text">
          <p>with passion for learning and creating.</p>
        </div>
        <Link className="home__about" to='/about'>More about me <MdArrowForwardIos /></Link>
      </div>
      <div className="home__picture">
        <img src={work} alt="" />
      </div>
    </main>
  );
};

export default Home;
