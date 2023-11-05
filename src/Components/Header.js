import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <header className="header text-center py-4 my-4">
      <img src={logo} className="img-fluid textImage my-5" alt="true" />
      <h1>Welcome to GalleryLens</h1>
      <p>Your Premier Destination for Captivating Images</p>
    </header>
  );
}
