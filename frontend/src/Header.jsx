import React from "react";
import "./Header.css";
import logo from "./logo-placeholder.jpg";

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Demo Logo" className="app-logo" />
      <h1>Demo Webapp</h1>
    </header>
  );
}
