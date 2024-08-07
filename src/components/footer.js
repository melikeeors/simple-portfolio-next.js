'use client';
import React from 'react';
import { useForm } from "react-hook-form";
import { IoLogoDiscord } from "react-icons/io5";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="footer" id="contact">
      <h1>Lets work together</h1>

      <div className="footer__contact">
        <div className="footer__container">
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com This is a template Figma file,
            turned into code using Anima.
            Learn more at AnimaApp.com
          </p>
          <div className="footer__social">
            <IoLogoDiscord className="footer__icon" />
            <BiLogoFacebookSquare className="footer__icon" />
            <FaDribbble className="footer__icon" />
            <FaInstagram className="footer__icon" />
            <FaBehance className="footer__icon" />
          </div>
        </div>

        <form className="footer__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="footer__form-input-container">
            <input
              className="footer__form-input"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters long"
                },
                pattern: {
                  value: /^(?!.*[qwxWQX])[a-zA-ZğüşöçİĞÜŞÖÇ]{2,}(?: [a-zA-ZğüşöçİĞÜŞÖÇ]{2,})?$/,
                  message: "Enter only two words and do not include special characters"
                }
              })}
            />
            <p className="footer__form-validation">{errors.name?.message}</p>
          </div>

          <div className="footer__form-input-container">
            <input
              className="footer__form-input"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Please enter a valid email address"
                }
              })}
            />
            <p className="footer__form-validation">{errors.email?.message}</p>
          </div>

          <div className="footer-submit">
            <button
              className={`footer__form-button ${isSubmitSuccessful ? 'submitted' : ''}`}
              type="submit"
            >
              Submit
            </button>
            <p className={`footer__form-confirmation ${isSubmitSuccessful ? 'submitted' : ''}`}>
              Thank you. We’ll get back to you soon.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
