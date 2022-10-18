import "./App.css";
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import { Router, Route, Routes, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/Header";
import Main from "./Pages/Main";
import List from "./Movie/List";
import View from "./Movie/View";
import NowPlaying from "./Movie/NowPlaying";
import Footer from "./component/Footer";
import { instance, category } from "./api/api";

function App() {
  //const [loading, setLoding] = useState(true);
  // const KEY = "2598d7e7c1f7c4678bfe7145c9ec42db";
  // const URL = "https://api.themoviedb.org/3/";
  //const IMG = "https://image.tmdb.org/t/p/original";

  const handleImgError = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/img/no_img.jpg`;
  };
  // const getMovie = async () => {
  //     const json = await (
  //         await fetch(
  //             `${URL}popular?api_key=${KEY}`)
  //     ).json();
  //   setMovie(json.results);
  //   console.log(json.results);
  //   setLoding(false);
  // }

  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(1);
  const [genrelist, setGenrelist] = useState([]);

  const [search, setSearch] = useState({}); //검색할 단어

  const [list, setlist] = useSearchParams();
  const with_genres = list.get("with_genres");
  const with_pages = list.get("page");
  //console.log(with_genres, with_pages);
  //page
  const [totalp, setTotalp] = useState(1);
  const getMovie = async () => {
    const getmovie = await instance.get(
      "/discover/movie?with_genres=" + with_genres + "&page=" + with_pages
    );
    const getcategory = await instance.get(category.MoviesGenre);
    const movie = getmovie.data.results;
    const list = getcategory.data.genres;
    setMovie(movie);
    setGenrelist(list);
    setTotalp(getmovie.data.total_pages);
    // console.log(getmovie.data);
    //  console.log(getmovie.data.total_pages);
  };
  return (
    <>
      {movie ? (
        <div className="Wrap">
          <Header
            genres={genres}
            setGenres={setGenres}
            movie={movie}
            setMovie={setMovie}
            genrelist={genrelist}
            setGenrelist={setGenrelist}
            page={page}
            setPage={setPage}
            with_genres={with_genres}
            with_pages={with_pages}
            list={list}
            setlist={setlist}
            getMovie={getMovie}
          />
          <Routes>
            <Route path="/" element={<Main movie={movie} />}></Route>
            <Route path="/home" element={<Main movie={movie} />}></Route>
            <Route
              path="/discover/movie"
              element={
                <List
                  genres={genres}
                  setGenres={setGenres}
                  movie={movie}
                  setMovie={setMovie}
                  genrelist={genrelist}
                  setGenrelist={setGenrelist}
                  page={page}
                  setPage={setPage}
                  with_genres={with_genres}
                  with_pages={with_pages}
                  list={list}
                  setlist={setlist}
                  getMovie={getMovie}
                  handleImgError={handleImgError}
                  totalp={totalp}
                  setTotalp={setTotalp}
                />
              }
            ></Route>
            <Route
              path="/movie/:id"
              element={<View handleImgError={handleImgError} />}
            ></Route>
            <Route
              path="/live"
              element={
                <NowPlaying
                  movie={movie}
                  setMovie={setMovie}
                  handleImgError={handleImgError}
                />
              }
            ></Route>
          </Routes>
          <Footer />
        </div>
      ) : (
        <div>로딩중?</div>
      )}
    </>
  );
}

export default App;

/*
https://developer-talk.tistory.com/250

리액트에서는 기존 innerHTML말고  dangerouslySetInnerHTML={{ __html: el.title }} 넣음!

//React에서 axios 사용
https://velog.io/@april_5/TIL43-Axios-%EC%82%AC%EC%9A%A9%EB%B2%95
await는 async 함수 안에서만 동작.
await가 던진 에러는 throw가 던진 에러를 잡을 때처럼 try..catch를 사용해 잡을 수 있습니다.

async function f() {

  try {
    let response = await fetch('http://유효하지-않은-주소');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}
f();

Query String(useSearchParams) - 웹페이지 전달방식
https://velog.io/@n-u-002/React.js-React-Router-Dom%EC%9D%98-%EC%9C%A0%EC%9A%A9%ED%95%9C-%EA%B8%B0%EB%8A%A5



*/
