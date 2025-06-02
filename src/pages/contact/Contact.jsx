import { useState } from "react";
import "./assets/styles/contacts.css";
import { validateEmail } from "../../utility/helpers.js";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = (e) => {
    //update the state depending on the input field entry
    const { target } = e;
    if (target.name === "name") {
      setContactName(target.value);
    } else if (target.name === "email") {
      setEmail(target.value);
    } else {
      setMessage(target.value);
    }
  };
  const handleFormSubmit = (e) => {
    //don't refresh the page
    e.preventDefault();
    //enter something in the fields otherwise set the state for the error
    if (!contactName || !message) {
      setErrorMessage("Please enter text for the Name and Message fields.");
      return;
    }
    //enter a valid email address otherwise set the state for the error
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    alert(`Hello ${contactName}`);
    //clear out state after a successful submission
    setContactName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="container">
      <div className="User_Body">
        <div className="title">Contact</div>
        {/*handleFormSubmit callback for form submission*/}
        <form className="Form_Container" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          {/*all inputs set the value to the current state
          and use the inputHanler callback onChange*/}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={contactName}
            onChange={inputHandler}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={inputHandler}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={inputHandler}
          />
          <button type="submit">Submit</button>
          {/*error conditional true display the error message*/}
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
