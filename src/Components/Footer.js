import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About GalleryLens</h3>
            <p>
              Welcome to GalleryLens, your premier destination for exploring and
              showcasing the world's most captivating images. We're passionate
              about photography and art and believe that every image tells a
              unique story.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="listItems">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#aboutus">About Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <address>
              <p>
                <strong>Address:</strong> 123 Main Street, Your City, Your
                Country
              </p>
              <p>
                <strong>Email:</strong> info@gallerylens.com
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
