const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchMoviesHandler = useCallback(async() => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://swapi.py4e.com/api/films/");
        if (!response.ok) {
          throw new Error("Something went wrong retrying...");
        }
        const data = await response.json();
        // return res;
  
        // }
        // fetchMoviesHandler().then((data) => {
        //return data.results;
  
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
  
        setMovies(transformedMovies);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }, [] )
  
    
      useEffect(() => {
        setTimeout(() => {
        fetchMoviesHandler()
      },500)
      },[fetchMoviesHandler])
    
   
  
    let content = <p>Found no movies.</p>;
    if (movies.length > 0) {
      content = <MoviesList movies={movies} />;
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
  }
  
  export default App;
  