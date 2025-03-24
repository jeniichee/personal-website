import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <footer className="copyright">
        <div className="footer">
          <a href="mailto:cheung.jenn@northeastern.edu">
            <img src="assets/images/email.png" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/jennifer-cheung1/">
            <img src="assets/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/jeniichee">
            <img src="assets/images/github.png" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/jeniichee/">
            <img src="assets/images/instagram.png" alt="Instagram" />
          </a>
        </div>
        Coded by Jennifer Cheung 🌸 2024 🌸
      </footer>
    </section>
  );
}

export default Contact;

// TODO
// incldue immediate emailing section
