import React from "react";
import PropTypes from "prop-types";
import "./Gif.css";
import { Link } from "wouter";

export const Gif = ({ title, id, url }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        <img src={url} alt={title} loading="lazy" />
      </Link>
    </div>
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
