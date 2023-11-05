import React from "react";

export default function ImageGallery({ image }) {
  const tags = image.tags.split(",");

  return (
    <>
      <section className="mb-5 mt-3" id="gallery">
        <a rel="noreferrer" target="_blank" href={image.largeImageURL}>
          <div className="card">
            <img src={image.webformatURL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">
                <strong className="stg">Photo by:</strong> {image.user}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong className="stg">Views:</strong> {image.views}
              </li>
              <li className="list-group-item">
                <strong className="stg">Downloads:</strong> {image.downloads}
              </li>
              <li className="list-group-item">
                <strong className="stg">Likes:</strong> {image.likes}
              </li>
            </ul>
            <div className="card-body">
              {tags.map((tag, index) => (
                <span
                  className="badge rounded-pill bg-light text-dark mx-1 mb-1"
                  key={index}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
