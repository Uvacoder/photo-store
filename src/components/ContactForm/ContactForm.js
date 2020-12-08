import { useReducer, useRef } from 'react';
import Form from '../../components/FormHelpers/index.js';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.us';
import formattedEmail from './formattedEmail.js';
const { Row, Group } = Form;

const formSubmissionApiUrl = (
  'https://cmkh6wam2g.execute-api.us-west-2.amazonaws.com/default/handleContactFormSubmission'
);

const ContactForm = () => {

  const [state, updateState] = useReducer(
    (state, { key, value }) => ({
      ...state,
      [key]: value
    }), {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      location: "",
      eventType: "",
      eventDescription: "",
      eventHasDate: "Yes",
      eventDate: "",
      message: ""
    }
  );

  const phoneInputRef = useRef(null);

  const onChange = e => {
    updateState({ key: e.target.id, value: e.target.value });
  }
  
  const submitEnabled = () => (
    state.firstName !== ""
    // At least 7 numbers for phone number
    && phoneInputRef.current?.element.rawValue?.length >= 7
    && state.email !== ""
  )

  const handleSubmit = e => {
    // don't refresh page
    e.preventDefault();
    // Call API
    fetch(formSubmissionApiUrl, {
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify({
        to: state.emailAddress,
        subject: "Atelier Mistral Inquiry Confirmation",
        body: {
          html: formattedEmail(state, true),
          text: formattedEmail(state, false)
        }
      })
    }).then(response => {
      console.log(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name + Last Name */}
      <Row>
        <Group width="half">
          <label for="firstName">*First Name</label>
          <input type="text" className="form-control" placeholder="First Name"
                 name="fname"
                 id="firstName" onChange={onChange} />
        </Group>
        <Group width="half">
          <label for="lastName">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name"
                 name="lname"
                 id="lastName" value={state.lastName} onChange={onChange} />
        </Group>
      </Row>
      {/* Phone  + E-mail */}
      <Row>
        <Group width="half">
          <label for="phoneNumber">*Phone</label>
          <Cleave ref={phoneInputRef}
                  className="form-control"
                  options={{ phone: true, phoneRegionCode: "US", delimiter: "-" }}
                  name="phone"
                  id="phoneNumber" value={state.phoneNumber} onChange={onChange} />
        </Group>
        <Group width="half">
          <label for="emailAddress">*Email</label>
          <input type="text" className="form-control"
                 name="email"
                 id="emailAddress" value={state.emailAddress} onChange={onChange} />
        </Group>
      </Row>
      {/* Location */}
      <Row>
        <Group width="full">
          <label for="location">Location</label>
          <input type="text" className="form-control" placeholder="e.g. Portland, Oregon"
                 id="location" value={state.location} onChange={onChange} />
        </Group>
      </Row>
      {/* Event Type */}
      <Row>
        <Group width="half">
          <label for="eventType">Event Type</label>
          <select className="form-control"
                  id="eventType" value={state.eventType} onChange={onChange}>
            <option>Engagement</option>
            <option>Wedding</option>
            <option>Maternity</option>
            <option>Family Portraits</option>
            <option>Individual Portraits</option>
            <option>Other</option>
          </select>
        </Group>
        {state.eventType === 'Other' && 
          <Group width="half">
            <label for="eventDescription">Event Description</label>
            <input type="text" className="form-control" placeholder="Describe the type of event"
                  id="eventDescription" value={state.eventDescription} onChange={onChange} />
          </Group>
        }
      </Row>
      {/* Event Date */}
      <Row>
        <Group width="half">
          <label for="eventHasDate">Does The Event Have a Date?</label>
          <select className="form-control"
                  id="eventHasDate" value={state.eventHasDate} onChange={onChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </Group>
        {state.eventHasDate === "Yes" &&
          <Group width="half">
          <label for="eventDate">Event Date</label>
          <input type="date" className="form-control"
                id="eventDate" value={state.eventDate} onChange={onChange} />
          </Group>
        }
      </Row>
      {/* Message */}
      <Row className="form-group">
        <Group width="full">
          <label for="message">Message</label>
          <textarea className="form-control" rows="8"
                    id="message" value={state.message} onChange={onChange}>
          </textarea>
        </Group>
      </Row>
      <Row>
        {submitEnabled() ? (
          <button type="submit" className="btn btn-primary">
            Submit Message
          </button>
        ) : (
          <button type="submit" className="btn btn-primary"
                  disabled aria-disabled="true">
            Submit Message
          </button>
        )}
      </Row>
    </form>
  );
}

export default ContactForm;