import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const store = useSelector((store) => store.movies);

  return (
    <div className="py-4 px-4 sm:px-8 bg-black text-white text-center">
      <div className="relative z-10">
        {store?.nowPlayingMovies && (
          <CategoryList data={store.nowPlayingMovies} />
        )}
        {store?.allMovies?.length > 0 && store.allMovies.map((data, index) => (
          <CategoryList key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
