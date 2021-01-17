import "./ContactPage.css";
import { useState } from "react";

function ContactPage(props) {
  const [emailState, setEmailState] = useState({
    email: "",
  });
  const [message, setMessage] = useState({
    message: "",
  });

  function handleEmailChange(e) {
    setEmailState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleMessageChange(e) {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ emailState, message });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ emailState, message }),
    })
      .then((res) => res.json())
      .then(alert("message sent"));
  };

  return (
    <main>
      <h1>Contact Us</h1>
      <div>
        <br />
        <div className="form">
          <form onSubmit={submitEmail}>
            <legend>
              Please let us know if you have questions about any pose.
            </legend>
            <div>
              <br />
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleEmailChange}
                  value={emailState.email}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={message.message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
            </div>
            <div className="button-div">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
