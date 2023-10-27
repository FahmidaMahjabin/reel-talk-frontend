import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, Col } from "antd";

const { Meta } = Card;
type IMovie = {
  movie: string;

  addedmovies: string[];

  totalSelectedmovie: number;
  setTotalSelectedmovie: Dispatch<SetStateAction<number>>;
};
export default function EachMovie({
  movie,
  addedmovies,
  totalSelectedmovie,
  setTotalSelectedmovie,
}: IMovie) {
  const [select, setSelect] = useState<boolean>(true);
  const selectMovie = (event: any) => {
    console.log(event.target);

    setSelect(!select);
    // const movie = event.target.value;
    console.log("select:", select);
    console.log("movie:", movie);
    if (select) {
      event.target.style.backgroundColor = "#FFA724";
      setTotalSelectedmovie(totalSelectedmovie + 1);
      addedmovies.push(movie);
    } else {
      // delete the item from the list
      //   1.get the index of the item in the list
      // 2.delete the item
      const index = addedmovies.indexOf(movie);
      event.target.style.backgroundColor = "transparent";
      setTotalSelectedmovie(totalSelectedmovie - 1);
      addedmovies.splice(index, 1);
    }
    console.log(addedmovies);
  };

  return (
    <Col sm={12} lg={4} md={6}>
      <Card
        hoverable
        onClick={selectMovie}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Col>
  );
}
