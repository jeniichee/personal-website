import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <footer className="copyright">
        <h2 className="major">Thank you for visiting!</h2>
        <div className="footer">
          <a href="mailto:jennifercheung1234@gmail.com">
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
      </footer>
    </section>
  );
};

export default Contact;

// TODO
// incldue immediate emailing section
