import "../../index.css";
import { useState } from "react";

export default function Meeting() {
  const [formStatus, setFormStatus] = useState("");

  function Submit(e) {
    e.preventDefault();
    const formEle = e.target;
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxDVH6YFgFjZr6f-s1V2noXpM2aB7Z7lEsE2qjPzi9kDvFzZz7anmCHVO5ie-KpPA0c/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        return res.json().catch(() => {
          return { status: "unknown", message: "Form submitted successfully!" };
        });
      })
      .then((data) => {
        if (data.status === "success") {
          setFormStatus("Form submitted successfully!");
          alert("Form submitted successfully!"); // Pop-up message
        } else {
          setFormStatus(data.message || "Form submitted");
        }
      })
      .catch((error) => {
        console.log(error);
        setFormStatus("Failed to submit the form.");
      });
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Contact Me form</h1>
      <div>
        <form className="form" onSubmit={Submit}>
          <input placeholder="Your Name" name="Name" type="text" required />
          <input placeholder="Your Email" name="Email" type="email" required />
          <input placeholder="Your Message" name="Message" type="text" required />
          <input className="button" type="submit" value="Submit" />
        </form>
        {formStatus && (
          <p style={{ color: formStatus === "Form submitted successfully!" ? "white" : "red" }}>
            {formStatus}
          </p>
        )}
      </div>
    </div>
  );
}
