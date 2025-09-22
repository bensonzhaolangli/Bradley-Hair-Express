import React, { useState } from "react";

export default function Header() {
  // State to track whether the mobile nav is open
  const [open, setOpen] = useState(false);

  // Toggle hamburger menu open/close
  const toggle = () => setOpen((o) => !o);

  // Close the menu (used when logo or link is clicked)
  const close = () => setOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header__inner">
        <a href="#" className="brand" onClick={close}>
          <img
            src="/logo.png"
            width="160"
            height="40"
            alt="Bradley Hair Express logo"
            loading="eager"
          />
          <span className="brand__sr">Bradley Hair Express</span>
        </a>

        <button
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul onClick={close}>
            <li><a href="#about">About Us</a></li>
            <li><a href="#about">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">Booking</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}