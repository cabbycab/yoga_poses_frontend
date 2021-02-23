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
    console.log({ emailState, message }); // eslint-disable-next-line
    const response = await fetch(
      "https://yogaposesbackend.herokuapp.com/send",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ emailState, message }),
      }
    )
      .then((res) => res.json())
      .then(
        alert(
          "Your message has been sent. We will get back to you within 24 hours."
        )
      );
  };

  return (
    <main>
      <div className="background">
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
      </div>
    </main>
  );
}

export default ContactPage;
