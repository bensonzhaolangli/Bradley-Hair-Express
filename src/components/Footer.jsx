import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <small>© {year} Bradley Hair Express. All Rights Reserved</small>
      </div>
    </footer>
  );
}