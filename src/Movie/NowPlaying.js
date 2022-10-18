import React, { useEffect } from "react";
import { instance, category } from "../api/api";
import { Link } from "react-router-dom";

const NowPlaying = ({ movie, setMovie, handleImgError }) => {
  const getMovie = async () => {
    const getmovie = await instance.get(category.NowPlaying);
    const movie = getmovie.data.results;
    setMovie(movie);
    //console.log(getmovie.data.total_pages, genres);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="inner sub list">
      <div className="ca_tit">현재 상영중인 영화</div>
      <div>
        <ul className="list_box">
          {movie.map((it) => (
            <li key={it.id}>
              <Link to={`/movie/` + it.id}>
                
                <div className="list_img">
                  <img
                    src={`https://image.tmdb.org/t/p/original${it.poster_path}`}
                    alt={it.original_title}
                    onError={handleImgError}
                  />
                </div>
                <h2>{it.original_title}</h2>
                <div>개봉일 : {it.release_date}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NowPlaying;
