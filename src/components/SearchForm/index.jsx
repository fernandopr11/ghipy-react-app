import React, { useState } from "react";
import "./styles.css";
import { useLocation } from "wouter";

export const SearchForm = ({ keyword, setKeyword }) => {
  const [location, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search a gif here ..."
        />
      </form>
    </>
  );
};
