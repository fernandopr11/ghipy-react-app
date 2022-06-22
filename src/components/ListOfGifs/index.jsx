import React, { useEffect, useState } from "react";
import { Gif } from "../Gif";

import "./styles.css";

export const ListsOfGifs = ({ gifs }) => {
  return (
    <div className="list-gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
};
