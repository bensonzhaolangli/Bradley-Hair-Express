import React, { useState } from "react";

export default function Contact() {
  // Form submission status message (empty by default)
  const [status, setStatus] = useState("");

  //Handle form submit: prevent reload, show status, reset form
  function onSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your message has been received.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        {/* Left side: location map image (placeholder) */}
        <figure className="contact__map">
          <img
            src="/location.png"
            alt="Map location placeholder for Bradley Hair Express"
            width="640"
            height="400"
            loading="lazy"
          />
          <figcaption className="sr-only">
            Map showing Bradley Hair Express location
          </figcaption>
        </figure>

        {/* Right side: contact form */}
        <div className="contact__form">
          <h2>Contact Us</h2>

          <form onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <input
                  id="firstName"
                  className="grayish"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="form-field">
                <input
                  id="lastName"
                  className="grayish"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <textarea
                id="message"
                className="grayish"
                placeholder="Let us know what we can help with"
                name="message"
                rows="6"
                required
              />
            </div>

            {/* Submit button is disabled after submission */}
            <button
              type="submit"
              className="btn-solid"
              disabled={status !== ""}
            >
              Contact Bradley Hair Express
            </button>

            {/* Live region for status messages */}
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
