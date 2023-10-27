"use client";

import ButtonForRellTalk from "@/components/ui/ButtonForRellTalk";
import EachGenre from "@/components/ui/EachGenre";
import { Button, Col, Flex, Row } from "antd";

import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Search } = Input;

const onSearch = (e: any) => {
  console.log(e.target.value);
};
// function = select three genres
// step1:when click the button color of the button will change
// step2: the value of the button will be saved in a list
// step3: if three values are saved in the list then continue button will be enabled.

export default function GenrePage() {
  // genre list will be fetched from backend .

  const genreList = ["Action", "Adventure", "Adult", "romantic"];
  const addedGenres: string[] = [];
  const [totalSelectedGenre, setTotalSelectedGenre] = useState<number>(0);
  const router = useRouter();
  const handleContinue = () => {
    router.push("/movies");
  };
  return (
    <div style={{ backgroundColor: "#112a45", height: "100vh" }}>
      <Flex gap="middle" justify="center" align="center" vertical>
        <h2 style={{ color: "white" }}>
          Select your top three genres for movies and TV
        </h2>

        <Search
          placeholder="search"
          size="large"
          // styles={{borderRadius: }}
          onChange={onSearch}
          style={{ width: "50%", borderRadius: "50%" }}
        />

        <div>
          {genreList.map((genre) => (
            <EachGenre
              genre={genre}
              key={genreList.indexOf(genre)}
              addedGenres={addedGenres}
              totalSelectedGenre={totalSelectedGenre}
              setTotalSelectedGenre={setTotalSelectedGenre}
            ></EachGenre>
          ))}
        </div>

        {totalSelectedGenre >= 3 ? (
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
