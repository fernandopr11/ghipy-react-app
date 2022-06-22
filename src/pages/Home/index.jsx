import React from "react";
import { Link} from "wouter";
import "./styles.css";
import { useState } from "react";
import { SearchForm } from "../../components/SearchForm";

const POPULAR_GIFS = ["Batman", "Goku", "Futbol", "Mario"];

export const Home = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <div className="main-app">
       <SearchForm keyword={keyword} setKeyword={setKeyword} />
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
