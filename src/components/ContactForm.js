import React, { useState, useReducer, useRef } from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.us';
import { contactInfo } from '../global';
import { formatContactEmail } from '../logic/formatContactEmail';
import { Form } from '.';
const { Row, Group } = { Form };

const formSubmissionApiUrl = 'https://cmkh6wam2g.execute-api.us-west-2.amazonaws.com/v1';

const ContactForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const submitSuccess = () => {
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("submitSuccess");
    }, 1000);
  }
  const submitFailed = () => {
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("submitFail");
    }, 1000);
  }

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

  const handleSubmit = e => {
    // don't refresh page
    e.preventDefault();
    // Update submit button
    setIsSubmitting(true);
    // Call API
    fetch(formSubmissionApiUrl, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({
        to: state.emailAddress,
        subject: "Atelier Mistral Inquiry Confirmation",
        body: {
          html: formatContactEmail(state, true),
          text: formatContactEmail(state, false)
        }
      })
    })
    .then(response => {
      if (response.status !== 200) {
        submitFailed();
      } else {
        response.json().then(data => {
          console.log(data);
          if (data.email.success === true) {
            submitSuccess();
          } else {
            submitFailed();
          }
        });
      }
    });
  }

  const submitEnabled = () => (
    isSubmitting === false
    && state.firstName !== ""
    // At least 7 numbers for phone number
    && phoneInputRef.current?.element.rawValue?.length >= 7
    && state.email !== ""
  )

  const SubmitButton = () => {
    var props = {
      type: "submit",
      className: "btn btn-primary",
    }
    if (!submitEnabled()) {
      props.disabled = true;
      props.ariaDisabled = true;
    }
    return isSubmitting ? (
      <button {...props}>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...
      </button>
    ) : (
      <button {...props}>
        Send us your Message!
      </button>
    );
  }

  // Submit Success
  if (submitStatus === "submitSuccess") {
    return (
      <React.Fragment>
        <br/><br/><br/>
        <p className="text-center">
          TODO: "Form submitted" message.<br/>
          Thank you!<br/>
          We will contact you.<br/>
        </p>
      </React.Fragment>
    )
  // Submit Failed
  } else if (submitStatus === "submitFail") {
    return (
      <React.Fragment>
        <br/><br/><br/>
        <p className="text-center">
        <img
          src="https://www.clipartmax.com/png/small/138-1383500_oops-something-went-wrong-oops-something-went-wrong.png"
          alt="Oops Something Went Wrong - Oops Something Went Wrong@clipartmax.com"
        /><br />
          TODO: "Form submission failed" message.<br/>
          Something went wrong...<br/>
          Feel free to reach out directly:<br/>
          <br />
          {contactInfo.phone}<br />
          {contactInfo.email}<br />
        </p>
      </React.Fragment>
    )
  // Unsubmitted Form
  } else {
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
          <SubmitButton />
        </Row>
        <div style={{height: "48px"}} />
      </form>
    );
  }
}

export default ContactForm;