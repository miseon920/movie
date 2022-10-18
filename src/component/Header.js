import { Router, Route, Link, NavLink } from "react-router-dom";
import React, { useEffect } from "react";

const NAVMENU = [
  { id: 1, menu: "홈", link: "/home" },
  {
    id: 2,
    menu: "카테고리",
    link: "/discover/movie",
  },
  { id: 3, menu: "LIVE", link: "/live" },
];

const Header = ({
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
}) => {
  //console.log(genre);
  //console.log(movie);
  useEffect(() => {
    getMovie();
  }, [with_genres, with_pages]);
  return (
    <header>
      {/* <div className="Lnb">
        <ul className="inner">
          <li>
            <Link to="">로그인</Link>
          </li>
          <li>
            <Link to="">이용권</Link>
          </li>
          <li>
            <Link to="">쿠폰</Link>
          </li>
          <li>
            <Link to="">이벤트</Link>
          </li>
        </ul>
      </div> */}
      <div className="Head_bot">
        <div className="inner">
          <h1>
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
            </Link>
          </h1>
          <nav>
            <ul>
              {NAVMENU.map((menu, idx) => (
                <li key={menu.id}>
                  <NavLink to={`${menu.link}`}>{menu.menu}</NavLink>
                  {menu.menu == "카테고리" ? (
                    <ul className="smenu">
                      {genrelist.map((smenu, idx) => (
                        <li
                          key={smenu.id}
                          className={`${
                            smenu.id === parseInt(with_genres) ? "on" : ""
                          }`}
                        >
                          <Link
                            to={`/discover/movie?with_genres=${smenu.id}&page=${page}`}
                          >
                            {smenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
