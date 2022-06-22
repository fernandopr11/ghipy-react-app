import React, { useState, useEffect } from "react";
import getData from "../../helpers/getData";
import { Spinner } from "../../components/Spiner";
import { ListsOfGifs } from "../../components/ListOfGifs";

export const SearchResults = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return <>{loading ? <Spinner /> : <ListsOfGifs gifs={gifs} />}</>;
};
