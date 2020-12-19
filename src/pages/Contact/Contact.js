import { contactInfo } from '../../global';
import ContactForm from '../../components/ContactForm/ContactForm.js'

export default () => {
  return (
    <div>

      {/* TODO: cover photo */}
      <br /><h3 style={{ textAlign: "center" }}>TODO: COVER PHOTO</h3><br />

      <p className="text-center">
        Every family, event and photoshoot is different.
        We customize packages for each and every client.
        <br />
        Reach out to us by email, phone, or with the contact form below.
        We can't wait to hear from you.<br />
        <br />
        {contactInfo.phone}<br />
        {contactInfo.email}
      </p>

      <hr />

      <ContactForm />

    </div>
  );
}
