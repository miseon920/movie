import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { instance, category } from "../api/api";

const View = ({ handleImgError }) => {
  const { id } = useParams();
  const [mitem, setItem] = useState("");
  const navigate = useNavigate();

  const getMovie = async () => {
    const posts = await instance.get(`/movie/${id}`);
    const list = posts.data;
    setItem(list);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(mitem);
  return (
    <div className="detail sub" style={{ background: `url(https://image.tmdb.org/t/p/original${ mitem.backdrop_path}`}}>
      <div className="inner">
        <h2>
          {mitem.original_title} <Link to="/discover/movie">more</Link>
          {/* onClick={() => { navigate(-1) }로 사용할수있음 */}
        </h2>
        <div className="movie_box">
          <div className="movie_img">
            <img
              src={`https://image.tmdb.org/t/p/original${mitem.poster_path}`}
              alt={mitem.original_title}
              onError={handleImgError}
            />
          </div>
          <div className="movie_info">
            {mitem.genres ? (
              <>
                <h3>장르</h3>
                <ul>
                  {mitem.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <h3>정보</h3>
            <div>
              {mitem.title} <span>평점:{mitem.vote_average}</span>
            </div>
            <div>{mitem.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
