import React, { useEffect,useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";
import Pagination from "../component/Paging";

const List = ({
  movie,
  setMovie,
  genres,
  setGenres,
  page,
  setPage,
  genrelist,
  setGenrelist,
  getMovie,
  list,
  setlist,
  with_genres,
  with_pages,
  img,
  handleImgError,
  totalp,
  setTotalp
}) => {
  // console.log(moveList);
  // console.log(genre);
  // console.log(moveList);

  // const m = moveList.map((it) => {
  //   // console.log(g);
  //   // console.log(it.genre_ids);
  //   const fff = it.genre_ids.filter(
  //     (mv) => mv.id === genre[g.indexOf(mv)].name
  //   );
  //   return fff;
  // });

  // const m = moveList.filter((mv) => {
  //   mv.genre_ids.map((it, idx) => {
  //     const num = g.indexOf(it);
  //     const txt = genre[num].name;
  //     console.log(txt);
  //     return [txt];
  //   });
  // });
  // console.log(m);
  useEffect(() => {
    getMovie();
  }, [with_genres, with_pages]);

  const [onsearch, setOnsearch] = useState(false);
  const [sresults, setResults] = useSearchParams({}); //링크 담을곳
  const sresult = sresults.get("query");
  const [srmovie, setSrmovie] = useState([]); //검색된 리스트 담을곳
  //console.log(srmovie)
  return (
    <div className="inner sub list">
      <div className="ca_tit">
        {with_genres ? null : "All"}
        {genrelist.map((smenu, idx) => (
          <span key={smenu.id}>
            {smenu.id === parseInt(with_genres) ? smenu.name : null}
          </span>
        ))}
      </div>
      <Search
        img={img}
        sresult={sresult}
        setResults={setResults}
        sresults={sresults}
        onsearch={onsearch}
        setOnsearch={setOnsearch}
        srmovie={srmovie}
        setSrmovie={setSrmovie }
        handleImgError={handleImgError}
      />
      {!onsearch || sresult==''?
        <>
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
           <div className="page_nav">
              <ul>
                {/* { console.log(totalp) } */}
                {
                    genrelist.slice(0, 10).map((it, idx) => {
                      return (
                          <li key={idx} className={with_pages == (idx+1)?"on":"" }><button onClick={() => setlist({ with_genres: with_genres, page: idx + 1 })}>{idx + 1}</button></li>
                      )
          
                    })
          
                }
              </ul>
              {/* <Pagination totalp={totalp} setlist={setlist} with_genres={with_genres} page={page} /> */}
          
           </div>
        </>
        : <div>정확한 검색어를 입력하여 주세요</div>
      }
    </div>
  );
};

export default List;
