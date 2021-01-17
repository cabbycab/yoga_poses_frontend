import "./FormRequest.css";
import { useState } from "react";

function FormRequest(props) {
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
    const response = await fetch("https://localhost:3001/send", {
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
      <header>
        <h1>Contact Us</h1>
        <div className="container">
          <div>
            <form className="form-horizontal" onSubmit={submitEmail}>
              <legend>Send us a Message</legend>
              <div className="form-group">
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
                <div>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={message.message}
                    onChange={handleMessageChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </main>
  );
}

export default FormRequest;
