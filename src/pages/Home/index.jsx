import React from "react";
import { Link, useLocation } from "wouter";
import "./styles.css";
import { useState } from "react";

const POPULAR_GIFS = ["Batman", "Goku", "Futbol", "Mario"];

export const Home = () => {
  const [keyword, setKeyword] = useState("");

  const [location, setLocation] = useLocation();

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <div className="main-app">
        <form action="" onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here ..."/>
        </form>

        <ul className="enlaces">
          {POPULAR_GIFS.map((gif) => (
            <li key={gif}>
              <Link to={`/search/${gif}`}> Gifs of {gif}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
