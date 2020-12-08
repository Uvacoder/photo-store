import { contactInfo } from '../../global';
import ContactForm from '../../components/ContactForm/ContactForm.js'

const Contact = () => {
  return (
    <div className="contact-page">

      <h3>TODO: COVER PHOTO</h3>

      <p>
        Every family, event and photoshoot is different.
        We customize packages for each and every client.
        Reach out to us by email, phone, or with the contact form below.
        We can't wait to hear from you.<br />
        <br />
        {contactInfo.phone}<br />
        {contactInfo.email}
      </p>

      <ContactForm />

    </div>
  );
}

export default Contact;