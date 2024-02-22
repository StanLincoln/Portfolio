import React from "react";

import steps from "./../images/p3.jpg";
import me from "./../images/p4.jpg";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <section>
        <div className="about__container">
          <div className="about__content">
            <div className="about__title1">
              <h2>About me</h2>
            </div>
            <div className="about__paragraph">
              <p className="about__title">
                Welcome to my portfolio! My name is Stanislav, <br></br> and I
                am a junior frontend developer based in Gummersbach, Germany.
              </p>
              <p className="about__text">
                I'm passionate about creating engaging and user-friendly web
                experiences.
              </p>
            </div>
          </div>
          <div className="about__picture">
            <img src={steps} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="about__description">
          <h4>My Journey</h4>
          <div className="about__me">
              <p>
                I embarked on my IT journey through intensive programming courses
                and self-directed learning. This path has equipped me with a solid
                foundation in web development, and I am committed to continuous
                learning and improvement.
              </p>
              <p>
                What sets me apart my dedication to mastering a diverse set of
                technologies and my practical experience in creating web solutions
                contribute to my effectiveness as a frontend developer. I am
                enthusiastic about staying current with industry trends and
                embracing new challenges.
              </p>
              <p>
                I have hands-on experience in building web pages and applications,
                which I have implemented in my{" "}
                <Link style={{ fontWeight: 700 }} to="/projects">
                  projects
                </Link>
                . I am proficient in the following technologies:
              </p>
             <div className="about__list">
                <ul>
                  <li>Languages: <span>HTML, CSS, JavaScript</span></li>
                  <li>CSS Preprocessor: <span>Sass</span></li>
                  <li>Libraries/Frameworks: <span>React, Redux, Redux Toolkit</span></li>
                  <li>Version Control: <span>Git, GitHub</span></li>
                  <li>Databases: <span>MySQL, MongoDB</span></li>
                </ul>
          <img className="picture" src={me} alt="" />
             </div>
            <p className="about__contact">
              I'm always eager to connect with like-minded individuals and
              collaborate on exciting projects. Whether you have a project in
              mind or just want to discuss web development, feel free to{" "}
              <Link style={{ fontWeight: 700 }} to="/contacts">
                contact
              </Link>{" "}
              me!
            </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default About;
