import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="copyright">
        <div className="copy-left">
          <h2 className="major">Thank you for visiting!</h2>
          <div className="copy-comfy">I hope your stay was nice and comfy!</div>
        </div>

        <div className="copy-right">
          <h2 className="major">What's Next?</h2>
          <div className="socials">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;

// TODO
// incldue immediate emailing section
