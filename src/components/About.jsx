import React from "react";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <figure className="about__media">
          <img
            src="/barber.png"
            alt="Barber sitting in the shop (placeholder)"
            width="560"
            height="420"
            loading="lazy"
          />
        </figure>

        <article className="about__content">
          <h1 className="display">About Bradley Hair Express</h1>
          {/* Business description paragraphs */}
          <p>
            From classic scissor cuts to modern fades, Bradley Hair Express is
            a neighborhood shop focused on craft, consistency, and comfort.
            Every appointment starts with a quick consultation to understand
            your style, hair type, and routine. We tailor each cut and finish
            with clean edges, hot lather around the neckline, and product
            recommendations that actually fit your day. Whether you’re heading
            to work, a night out, or just keeping it sharp, we aim for a crisp,
            confident look that lasts.
          </p>
          <p>
            Our barbers bring years of experience across traditional and
            contemporary techniques, combining precise clipper work with
            careful scissor detailing and beard shaping. We keep the experience
            friendly and on time, with honest guidance and meticulous attention
            to hygiene. Book online, walk in when you can, or reach out with
            any questions, we’re here to make grooming simple and dependable,
            with a relaxed atmosphere and results you’ll feel good about every
            single visit.
          </p>

          {/* Call-to-action link */}
          <div className="actions">
            <a
              className="btn-outline grayish"
              href="#services"
              aria-label="Learn more"
            >
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
