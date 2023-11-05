import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ImageGallery from "./Components/ImageGallery";
import ImageSearch from "./Components/ImageSearch";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <ImageSearch searchText={(text) => setTerm(text)} />

        <div className="row">
          {!isLoading && image.length === 0 && (
            <h1 className="d-flex justify-content-center mt-5 stg">
              Image not Found
            </h1>
          )}

          {image.map((images) => (
            <div className="col-lg-4 col-md-6 col-sm-12 g-5" key={images.id}>
              <ImageGallery image={images} />
            </div>
          ))}
        </div>
        <hr />
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
