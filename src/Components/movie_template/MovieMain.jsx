import React, { useState } from "react";
import "./MovieMain.css";
// import MovieCards from './MovieCards';
import MovieCards from "./MovieCards";
import MovieHeader from "./MovieHeader";
const moviesData = [
  {
    src: "https://i.ytimg.com/vi/HWuWoY3Y-WA/sddefault.jpg",
    genre: "horror",
    title: "Resident Evil: Death Island",
    year: 2023,
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOTZmYzQ2YTEtMzFlMy00MTZkLWJjODUtNDNiMGYwODY1YTA1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
    genre: "horror",
    title: "Dabbe",
    year: 2013,
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOTBmMTk5MGMtMDZhMi00YTA3LTk2ZmYtYzdmZTEwNDgzMDFiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genre: "horror",
    title: "Evil dead rise",
    year: 2023,
  },
  {
    src: "https://resizing.flixster.com/ZYZc40L_DC17eq-aanGdUtpaY6I=/fit-in/180x240/v2/https://resizing.flixster.com/eI1qQwBOksBn-wCTWljJiBQfZFs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEzNjRjZjA5LTQ5OGQtNDE1OC05NTI5LWIzZjZlODUyNzBkMS5qcGc=",
    genre: "horror",
    title: "The Owners",
    year: 2020,
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOTNkMGZjNTUtMjQ5Mi00YjY1LTk3N2QtYmE0ZWFhZjExYzQxXkEyXkFqcGdeQXVyOTI3MTA5OTE@._V1_.jpg",
    genre: "documentry",
    title: "Doolpet Ganesh",
    year: 2019,
  },
  {
    src: "https://di5qs4dv32t01.cloudfront.net/wp-content/uploads/2021/11/Drushyam-2-Poster-360x450.jpg",
    genre: "crime",
    title: "Dhrusyam2",
    year: 2021,
  },
  {
    src: "https://static.toiimg.com/photo/msid-96678946/96678946.jpg?17854",
    genre: "crime",
    title: "Prathyardhi",
    year: 2023,
  },
  {
    src: "https://www.scrolldroll.com/wp-content/uploads/2022/07/Hit-Best-Telugu-crime-thriller-movies.jpg",
    genre: "crime",
    title: "HIT",
    year: 2020,
  },
  {
    src: "https://www.scrolldroll.com/wp-content/uploads/2022/07/Goodachari-Best-Telugu-crime-thriller-movies.jpg",
    genre: "crime",
    title: "Gudachari",
    year: 2018,
  },
  {
    src: "https://cdn.feedingtrends.com/article-images/91_L_Kxny5kd_L_RI_b5af2f27da.jpg",
    genre: "crime",
    title: "Yavaru",
    year: 2021,
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00343267-druapgmprf-portrait.jpg",
    genre: "comedy",
    title: "TILLU2",
    year: 2023,
  },
  {
    src: "https://www.spectralhues.com/wp-content/uploads/2020/05/bheeshma-telugu-et00123751-13-01-2020-04-08-18.jpg",
    genre: "comedy",
    title: "Bhisma",
    year: 2018,
  },
];

const MovieMain = () => {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");

  const handlesearch = (searchvalue) => {
    const filterData = moviesData.filter((movie) => {
      return movie.title.toLowerCase().includes(searchvalue.toLowerCase());
    });
    setMovies(filterData);
  };

  return (
    <>
      <div className="movie-main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <MovieHeader handlesearch={handlesearch} search={search} setSearch={setSearch}/>
            </div>
            <div className="col-12">
              <MovieCards movies={movies} setMovies={setMovies}  handlesearch={handlesearch} />
            </div>
          </div>
        </div>
        {/* <CssBaseline /> */}
        {/* <div className="container">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid xs={12}> */}
        {/* <div className="img">
              <img
                src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
                alt="movies banner"
                width="100%"
              />
              <div className="overlay"></div>
            </div>
            <div className="movieheader"> */}
        {/* <Container maxWidth="xl"> */}
        {/* </Container> */}
        {/* </div> */}
        {/* </Grid> */}
        {/* <Grid xs={12}> */}

        {/* </Grid>
        </Grid>
      </Container> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default MovieMain;
