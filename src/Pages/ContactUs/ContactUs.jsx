import React, { useState } from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent");
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-section">
        <div className="contact-content">
          <div className="content-left">
            <h1>Have Any Questions?</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              excepturi velit officia labore voluptates! Consequatur,
              blanditiis.
            </p>
            <div className="content-left-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div>
                  <h3>Email Us</h3>
                  <p className="desc">colville@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div>
                  <h3>Call Us</h3>
                  <p className="desc">+256701371124</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faAddressBook} className="icon" />
                <div>
                  <h3>Find Us</h3>
                  <p className="desc">P.O Box Kampala</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-right">
            <h1>Message Us</h1>
            <div>
              <form action="" onSubmit={handleSubmit}>
                <div className="client-name">
                  <input
                    type="text"
                    name="fName"
                    value={inputs.fName || ""}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="lName"
                    value={inputs.lName || ""}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  className="input"
                  required
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="subject"
                  value={inputs.subject || ""}
                  onChange={handleChange}
                  className="input"
                  required
                  placeholder="Subject"
                />
                <textarea
                  value={inputs.message}
                  name="message"
                  onChange={handleChange}
                  cols="10"
                  rows="5"
                  required
                  placeholder="Write something..."
                  className="input"
                />

                <input type="submit" className="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <h1>Our Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10565.882821553496!2d-117.90130924622461!3d48.54337443431476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1738420676137!5m2!1sen!2sug"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
