"use client";

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    moviename: "",
    image: "",
    tier: "C",
  });
  console.log(selectedMovie);

  const handleMovieChange = (event) => {
    const { name, value } = event.target;
    if (name === "moviename") {
      setSelectedMovie({ ...selectedMovie, moviename: value });
    }
    if (name === "image") {
      setSelectedMovie({ ...selectedMovie, image: value });
    }
    if (name === "tier") {
      setSelectedMovie({ ...selectedMovie, tier: value });
    }
  };
  const AddMovieCard = () => {
    const movie = {
      name: selectedMovie.moviename,
      img: selectedMovie.image,
      id: Date.now(),
      tier: selectedMovie.tier,
    };
    setMovies([...movies, movie]);
    setSelectedMovie({ moviename: "", image: "", tier: "C" });
  };
  const DELETED = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };
  return (
    <div className="w-screen h-screen">
      <div className="flex  flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Movie Tier List
        </h1>
        <p className="text-lg">
          Create and share your favorite movie rankings!
        </p>
      </div>
      <div className="flex justify-center gap-2 pt-10">
        <Input
          placeholder="Movie Name"
          className="w-[200px]"
          name="moviename"
          value={selectedMovie.moviename}
          onChange={(e) => handleMovieChange(e)}
        />
        <Input
          placeholder="Image URL"
          className="w-[200px]"
          value={selectedMovie.image}
          name="image"
          onChange={(e) => handleMovieChange(e)}
        />
        <select
          name="tier"
          value={selectedMovie.tier}
          onChange={(e) => handleMovieChange(e)}
        >
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <Button onClick={() => AddMovieCard()}>ADD</Button>
      </div>
      <div>
        {["S", "A", "B", "C"].map((tier, index) => {
          const FilteredMovies = movies.filter((movie) => movie.tier === tier);
          return (
            <div key={index}>
              <div className="font-bold text-xl">{tier} TIER</div>
              <div className="flex gap-4">
                {FilteredMovies.map((mov) => {
                  return (
                    <div
                      key={mov.id}
                      className="flex flex-col items-center gap-4 border-2 solid border-black w-75 rounded-2xl"
                    >
                      <img src={mov.img} className="w-70 h-80 pt-" />
                      <div className=" text-2xl "> {mov.name} </div>
                      <Button
                        className="w-[60px]"
                        onClick={() => DELETED(mov.id)}
                      >
                        DELETE
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
