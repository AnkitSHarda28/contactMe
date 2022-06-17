import React, { useState } from "react";
import "../app.css";
import { db } from "../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Ankit ☎️</h1>

      <label className="Name">Name</label>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="Email">Email</label>
      <input
        placeholder="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="Message">Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : "rgb(0, 0, 196)" }}
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
