import { Button } from "antd";
import { useState } from "react";
import React, { Dispatch, SetStateAction } from "react";
type IGenre = {
  genre: string;

  addedGenres: string[];
  setAddedGenres: Dispatch<SetStateAction<string[]>>;
  totalSelectedGenre: number;
  setTotalSelectedGenre: Dispatch<SetStateAction<number>>;
};
export default function EachGenre({
  genre,
  totalSelectedGenre,
  setTotalSelectedGenre,
  addedGenres,
  setAddedGenres,
}: IGenre) {
  const [select, setSelect] = useState<boolean>(true);
  console.log("select in outside:", select);
  const selectGenre = (event: any) => {
    console.log(event.target);

    setSelect(!select);
    // const genre = event.target.value;
    console.log("select:", select);
    console.log("genre:", genre);
    if (select) {
      event.target.style.backgroundColor = "#FFA724";
      setTotalSelectedGenre(totalSelectedGenre + 1);
      addedGenres.push(genre);
      setAddedGenres(addedGenres);
    } else {
      // delete the item from the list
      //   1.get the index of the item in the list
      // 2.delete the item
      const index = addedGenres.indexOf(genre);
      event.target.style.backgroundColor = "transparent";
      setTotalSelectedGenre(totalSelectedGenre - 1);
      addedGenres.splice(index, 1);
      setAddedGenres(addedGenres);
    }
    console.log(addedGenres);
  };
  return (
    <span
      style={{
        margin: "5px",
        border: "1px solid white",
        padding: "5px",
        borderRadius: "30%",
        color: "white",
      }}
      onClick={(e) => selectGenre(e)}
    >
      {genre}
    </span>
  );
}
