import React, { useEffect, useState } from "react";
import { Gif } from "../Gif";
import { Spinner } from "../Spiner";
import getData from "../../helpers/getData";
import "./styles.css";

export const ListsOfGifs = ({ params }) => {
  const { keyword } = params;

  const [gifs, setGifs] = useState({ loading: false, results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setGifs((actualGifs) => ({ loading: true, results: gifs.results }));
    getData({ keyword: keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs });
    });
  }, [keyword]);

  if (gifs.loading) return <Spinner/>;

  return (
    <div className="list-gifs">
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
};
