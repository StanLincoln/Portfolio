import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import programmer from "./../images/p2.jpg";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("Send email");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const emailSubmit = (data) => {
    emailjs
      .sendForm('service_0td3ajs', 'template_drrfq8q', form.current, {
        publicKey: 'PGtU6UVngGlwAhV7N',
      })
    setSubmitted(true);
    setButtonText("Successful");
    setTimeout(() => {
      setButtonText("Send email");
    }, 2000);
    reset();
  };

  return (
    <div className="contacts">
      <section>
        <div className="contacts__container">
          <div className="contacts__row">
            <div className="contacts__picture">
              <img src={programmer} alt="Programmer" />
            </div>
            <div className="contacts__description">
              <h2>Contacts</h2>
              <p>Get in touch with me via social media or email.</p>
              <div className="contacts__media">
                <Link style={{ color: "#189ACD" }} to="/">
                  <FaTwitter className="contacts__icon" /> Twitter
                </Link>
                <Link style={{ color: "#0982c0" }} to="/">
                  <FaLinkedinIn className="contacts__icon" /> LinkedIn
                </Link>
                <Link
                  style={{ color: "#43609c" }}
                  to="https://www.facebook.com/profile.php?id=100005211101971"
                  target="_blank"
                >
                  <FaFacebookF className="contacts__icon" /> Facebook
                </Link>
                <Link
                  style={{ color: "#ef0074" }}
                  to="https://www.instagram.com/stvs.izbvsh/"
                  target="_blank"
                >
                  <FaInstagram className="contacts__icon" /> Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contacts__container">
          <div className="contacts__email">
            <h4>Send me an email</h4>
            <form ref={form} onSubmit={handleSubmit(emailSubmit)}>
              <div className="form">
                <div className="form__label">
                  <div className="form__name">
                    <label htmlFor="name" name='name'>Name</label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", {
                        required: "Please, enter your name!",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters long!",
                        },
                        maxLength: {
                          value: 12,
                          message: "Name cannot exceed 12 characters!",
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message:
                            "Please enter a first name using only Latin characters!",
                        },
                      })}
                    />
                  </div>
                  <div className="form__email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Please, enter your email!",
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                          message: "Invalid email!",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="form__message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Please, enter your message!",
                      pattern: {
                        value: /^[a-zA-Z0-9\s,.!?'-]+$/,
                        message:
                          "Please, enter an address using only Latin characters and numbers!",
                      },
                    })}
                  ></textarea>
                </div>
              </div>
              <div className="form__btn">
                <button type="submit">{buttonText}</button>
              </div>
              {errors.name && (
                <p className="form__error">{errors.name.message}</p>
              )}
              {errors.email && (
                <p className="form__error">{errors.email.message}</p>
              )}
              {errors.message && (
                <p className="form__error">{errors.message.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
