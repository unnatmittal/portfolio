import React from "react";
import "./style.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="c-box">
        <h2>Get in Touch</h2>
        <form>
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
          <button type="submit" class="submit-btn btn">
            submit here
          </button>
        </form>
      </div>
    </div>
  );
};
