import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="copyright">
        <div className="copy-left">
          <h2 className="major">Thank you for visiting</h2>
          <div className="copy-comfy">I hope your stay was nice and comfy!</div>
        </div>

        <div className="copy-right">
          <h2 className="major">What's Next?</h2>
          <span>Let's connect!</span>
          <div className="socials">
            <a href="mailto:jennifercheung1234@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/jennifer-cheung1/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/jeniichee">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/jeniichee/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// TODO
// incldue immediate emailing section
