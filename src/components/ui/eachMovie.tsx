import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
const { Meta } = Card;
export type IMovie = {
  name: string;
  image: string;
};
type IMovieProps = {
  movie: IMovie;

  addedmovies: IMovie[];

  totalSelectedmovie: number;
  setTotalSelectedmovie: Dispatch<SetStateAction<number>>;
};
export default function EachMovie({
  movie,
  addedmovies,
  totalSelectedmovie,
  setTotalSelectedmovie,
}: IMovieProps) {
  const [select, setSelect] = useState<boolean>(true);
  const selectMovie = (event: any) => {
    console.log(event.target);

    setSelect(!select);
    // const movie = event.target.value;
    console.log("select:", select);
    console.log("movie:", movie);
    if (select) {
      event.target.style.border = "3px solid #FFA724";

      setTotalSelectedmovie(totalSelectedmovie + 1);
      console.log("totalSelectedMovies:", totalSelectedmovie);
      addedmovies.push(movie);
    } else {
      // delete the item from the list
      //   1.get the index of the item in the list
      // 2.delete the item
      const index = addedmovies.indexOf(movie);
      event.target.style.border = " transparent";
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
        cover={<img alt="example" src={movie.image} />}
        // style={{ border: "2px solid #FFA724" }}
      >
        <CheckCircleOutlined
          style={{ position: "relative", top: "5px", left: "50px" }}
        />
        <Meta title={movie.name} />
      </Card>
    </Col>
  );
}
