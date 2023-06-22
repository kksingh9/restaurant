import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import NewMovies from "./components/NewMovies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-4e109-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong retrying...");
      }
      const data = await response.json();
      // return res;
      // console.log(data);
      const loadeMovies = [];
      for (const key in data) {
        loadeMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadeMovies);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchMoviesHandler();
    }, 500);
  }, [fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-4e109-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const removeMovieHandler = async (mov) => {
     // console.log(mov.id);
    // setLoading(true);
    debugger;
    setError(null);
    try{
      const response = await fetch(
        `https://react-http-4e109-default-rtdb.firebaseio.com/movies.json/${mov.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong retrying...");
      }
      const data = await response.json();
      console.log(data);
      // const loadeMovies = [];
      // for (const key in data) {
      //   loadeMovies.push({
      //     id: key,
      //     title: data[key].title,
      //     openingText: data[key].openingText,
      //     releaseDate: data[key].releaseDate,
      //   });
      // }

      // setMovies(loadeMovies);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    // setLoading(false);
  }

  // useEffect(() => {
  //   removeMovieHandler();
  // },[removeMovieHandler])

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} onRemoveItem={removeMovieHandler} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (loading) {
    content = <p>Loding...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <NewMovies onSaveMovieData={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!loading && movies.length === 0 && !error && <p>found no Movies</p>}
      {!loading && error && <p>{error}</p>}
      {loading && <p>loading...</p>} */}
      </section>
    </React.Fragment>
  );
};

export default App;