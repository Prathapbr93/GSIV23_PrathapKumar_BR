import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";
import UpcomingMovies from "../components/UpcomingMovies";

const HomeContainer = () => {
  const movies = useSelector((state) => state.movies.data);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const error = useSelector((state) => state.movies.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <UpcomingMovies movies={movies} />
      )}
    </div>
  );
};

export default HomeContainer;
