
function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Work Together</h2>
        <span>
          Have an AI/ML project in mind? Let's connect.
        </span>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <h3>Phone Number 1</h3>
          <p>03279565849</p>

          <a href="tel:+923279565849" className="contact-btn">
            Call Now
          </a>

          <a
            href="https://wa.me/923279565849"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>Phone Number 2</h3>
          <p>03101928574</p>

          <a href="tel:+923101928574" className="contact-btn">
            Call Now
          </a>

          <a
            href="https://wa.me/923101928574"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>Email Address</h3>
          <p>miankhalilu@gmail.com</p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=miankhalilu%40gmail.com"
target="_blank"
rel="noopener noreferrer"
            className="contact-btn"
          >
            Send Email
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
