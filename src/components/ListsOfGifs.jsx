import React, { useEffect, useState } from "react";
import { Gif } from "./Gif";
import getData from "../helpers/getData";

export const ListsOfGifs = ({ params }) => {
  const { keyword } = params;

  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(() => {
    setGifs((actualGifs) => ({ loading: true, results: gifs.results }));
    getData({ keyword: keyword }).then((gifs) => {
      setGifs({ loading: false, results: gifs });
    });
  }, [keyword]);

  if (gifs.loading) return <i>Loading</i>;

  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
};
