import React from "react";
import PropTypes from "prop-types";
import "./Gif.css";

export const Gif = ({ title, id, url }) => {
  return (
    <a href={`# ${id}`} className="Gif">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </a>
  );
};
/* 

  Declaration of PropTypes

*/
Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
