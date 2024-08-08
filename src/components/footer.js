'use client';
import React, { useState, useEffect } from 'react';
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
    formState: { errors, isSubmitSuccessful, dirtyFields },
    watch,
    trigger,
  } = useForm();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setIsButtonDisabled(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // Input alanlarını izle
  const nameValue = watch("name");
  const emailValue = watch("email");

  // Doğrulamaya göre enable ya da disable buton
  useEffect(() => {
    const checkValidity = async () => {
      // Her iki alanın da geçerliliğini kontrol et
      const nameIsValid = await trigger("name");
      const emailIsValid = await trigger("email");

      // Eğer herhangi bir alan geçerli değilse butonu devre dışı bırak
      setIsButtonDisabled(!(nameIsValid && emailIsValid));
    };

    // Sayfa yüklendiğinde direkt disable olmasını engelle
    if (dirtyFields.name || dirtyFields.email) {
      checkValidity();
    }
  }, [nameValue, emailValue, trigger, dirtyFields]);

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
              className={`footer__form-input ${errors.name ? 'input-error' : ''}`}
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
            <p className="footer__form-validation">
              {dirtyFields.name && errors.name?.message}
            </p>
          </div>

          <div className="footer__form-input-container">
            <input
              className={`footer__form-input ${errors.email ? 'input-error' : ''}`}
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
            <p className="footer__form-validation">
              {dirtyFields.email && errors.email?.message}
            </p>
          </div>

          <div className="footer-submit">
            <button
              className={`footer__form-button ${isSubmitSuccessful ? 'submitted' : ''}`}
              type="submit"
              disabled={isButtonDisabled}
            >
              {loading ? (
                <div className="footer__loading-spinner"></div> 
              ) : (
                <span>{isSubmitSuccessful ? 'Sent' : 'Submit'}</span> 
              )}
            </button>
            <p className={`footer__form-confirmation ${(isSubmitSuccessful && !loading) ? 'submitted' : ''}`}>
              Thank you. We’ll get back to you soon.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
