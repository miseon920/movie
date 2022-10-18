import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { instance, category } from "../api/api";

function Search({
  search,
  setSearch,
  img,
  sresult,
  setResults,
  sresults,
  handleImgError,
}) {
  const snav = useNavigate();
  const [srmovie, setSrmovie] = useState([]); //검색된 리스트 담을곳

  const searchHandler = (e) => {
    snav(`/search/movie?query=${sresult}`);
    // if (e.key === "Enter") {
    //   snav(`/search/keyword?query=${sresult}`);
    // }
  };

  const getMovie = async () => {
    const getmovie = await instance.get(`/search/movie?query=${sresult}`);
    const searchMovie = getmovie.data.results;
    setSrmovie(searchMovie);
  };
  useEffect(() => {
    getMovie();
  }, [sresult]);
  return (
    <div>
      <div className="search_box">
        <label htmlFor="search">검색</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => setResults({ query: e.target.value })}
        />
        <button onClick={searchHandler}>검색</button>
      </div>
      {sresult ? (
        <ul className="list_box">
          {srmovie &&
            srmovie.map((it) => (
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
      ) : null}
    </div>
  );
}

export default Search;

//https://api.themoviedb.org/3/search/keyword?query=2002&api_key=1047e35b5c7314dc215529665aefaf2c&page=1
