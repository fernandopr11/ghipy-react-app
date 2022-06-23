import { useState, useEffect } from "react";
import getData from "../helpers/getData";

const useGifs = ({ keyword } = { keyword: localStorage.getItem('lastKeyword') }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //Get keyword from localStorage
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";

    getData({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Save Keyword to localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { loading, gifs };
};

export default useGifs;
