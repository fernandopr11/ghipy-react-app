import React from "react";
import { Link } from "wouter";
import "./styles.css";

const POPULAR_GIFS = ["Batman", "Goku", "Futbol", "Mario"];

export const Home = () => {
  return (
    <>
      <div className="main-app">
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
