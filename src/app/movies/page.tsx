"use client";

import ButtonForRellTalk from "@/components/ui/ButtonForRellTalk";
import EachMovie, { IMovie } from "@/components/ui/eachMovie";

import { Button, Col, Flex, Row } from "antd";

import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Search } = Input;

const onSearch = (e: any) => {
  console.log(e.target.value);
};
// function = select three movies
// step1:when click the button color of the button will change
// step2: the value of the button will be saved in a list
// step3: if three values are saved in the list then continue button will be enabled.

export default function MoviesPage() {
  // movie list will be fetched from backend .

  const movieList = [
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "action movie",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];
  const [addedmovies, setAddedmovies] = useState<IMovie[]>([]);
  const [totalSelectedmovie, setTotalSelectedmovie] = useState<number>(0);
  const router = useRouter();
  const handleContinue = () => {
    router.push("/movies");
  };
  return (
    <div style={{ backgroundColor: "#112a45", height: "100%vh" }}>
      <Flex gap="middle" justify="center" align="center" vertical>
        <h2 style={{ color: "white" }}>Select your top 5 movies</h2>

        <Search
          placeholder="search to add more"
          size="large"
          // styles={{borderRadius: }}
          onChange={onSearch}
          style={{ width: "50%", borderRadius: "50%" }}
        />

        <Row gutter={[24, 24]}>
          {movieList.map((movie) => (
            <EachMovie
              movie={movie}
              key={movieList.indexOf(movie)}
              addedmovies={addedmovies}
              setAddedmovies={setAddedmovies}
              totalSelectedmovie={totalSelectedmovie}
              setTotalSelectedmovie={setTotalSelectedmovie}
            ></EachMovie>
          ))}
        </Row>

        {totalSelectedmovie >= 5 ? (
          <ButtonForRellTalk
            name="Continue"
            onClickFunction={handleContinue}
          ></ButtonForRellTalk>
        ) : (
          <Button
            disabled
            name="Continue"
            style={{ color: "white", backgroundColor: "gray" }}
          >
            Continue
          </Button>
        )}
      </Flex>
    </div>
  );
}
