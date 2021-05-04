import React from "react";
import "./style.css";
import emailjs from "emailjs-com";

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_4eur2bc",
        e.target,
        "user_IARF1HoI4URfbef6imByh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      <div className="c-box">
        <h2>Get in Touch</h2>
        <form onSubmit={sendEmail}>
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              class="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              class="form-control"
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">
            submit here
          </button>
        </form>
      </div>
    </div>
  );
};
