import React, { useState } from "react";

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="mt-5">
      <form onSubmit={onSubmit} className="d-flex justify-content-center">
        <input
          className="form-control w-auto"
          type="text"
          placeholder="Enter text..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn mx-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
