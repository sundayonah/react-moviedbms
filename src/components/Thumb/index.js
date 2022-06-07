import React from "react";
import { Link } from "react-router-dom";

// styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, klephId, clickable }) => (
  <div>
    {clickable ?  (
      <Link to={`/${klephId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) :  (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
