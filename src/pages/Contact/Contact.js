import './Contact.css';
import { contactInfo } from '../../global';
import Form from '../../components/FormHelpers/index.js';
const { Row, Group } = Form;

const Contact = () => {

  const handleSubmit = () => {
    
  }

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

      <form>
        {/* First Name + Last Name */}
        <Row>
          <Group width="half">
            <label for="inputFirstName">First Name</label>
            <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
          </Group>
          <Group width="half">
            <label for="inputLastName">Last Name</label>
            <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
          </Group>
        </Row>
        {/* Location */}
        <Row>
          <Group width="full">
            <label for="inputLocation">Location</label>
            <input type="text" className="form-control" id="inputLocation" placeholder="e.g. Portland, Oregon" />
          </Group>
        </Row>
        {/* Event Type */}
        <Row>
          <Group width="half">
            <label for="selectEventType">Event Type</label>
            <select className="form-control" id="selectEventType">
              <option>Engagement</option>
              <option>Wedding</option>
              <option>Maternity</option>
              <option>Family Portraits</option>
              <option>Individual Portraits</option>
              <option>Other</option>
            </select>
          </Group>
          <Group width="half">
            <label for="inputEventDescription">Event Description</label>
            <input type="text" className="form-control" id="selectEventDescription" placeholder="Describe the type of event" />
          </Group>
        </Row>
        {/* Event Date */}
        <Row>
          <Group width="half">
            <label for="selectEventHasDate">Does The Event Have a Date?</label>
            <select className="form-control" id="selectEventHasDate">
              <option>Yes</option>
              <option>No</option>
            </select>
          </Group>
          <Group width="half">
            <label for="dateEventDate">Event Date</label>
            <input type="date" className="form-control" id="dateEventDate" />
          </Group>
        </Row>
        {/* Message */}
        <Row className="form-group">
          <Group width="full">
            <label for="textMessage">Message</label>
            <textarea className="form-control" id="textMessage" rows="8"></textarea>
          </Group>
        </Row>
       
        <button type="submit" className="btn btn-primary">Submit Message</button>
      </form>
    </div>
    
  );
}

export default Contact;