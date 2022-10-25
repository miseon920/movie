import Slider from "react-slick";

const Ani = [
  {
    id: 1,
    title: "실시간 인기 프로그램",
    link: "/discover/movie",
    movie: [
      { id: 1, title: "인어공주", link: "/discover/movie" },
      { id: 2, title: "겨울왕국", link: "/discover/movie" },
      { id: 3, title: "주토피아", link: "/discover/movie" },
      { id: 4, title: "인어공주", link: "/discover/movie" },
      { id: 5, title: "겨울왕국", link: "/discover/movie" },
      { id: 6, title: "주토피아", link: "/discover/movie" },
      { id: 7, title: "인어공주", link: "/discover/movie" },
      { id: 8, title: "겨울왕국", link: "/discover/movie" },
      { id: 9, title: "주토피아", link: "/discover/movie" },
    ],
  },
  {
    id: 2,
    title: "디즈니 추천 프로그램",
    link: "/discover/movie",
    movie: [
      { id: 1, title: "미녀와야수", link: "/discover/movie" },
      { id: 2, title: "라이온킹", link: "/discover/movie" },
      { id: 3, title: "톨스토이", link: "/discover/movie" },
      { id: 4, title: "미녀와야수", link: "/discover/movie" },
      { id: 5, title: "라이온킹", link: "/discover/movie" },
      { id: 6, title: "톨스토이", link: "/discover/movie" },
      { id: 7, title: "미녀와야수", link: "/discover/movie" },
      { id: 8, title: "라이온킹", link: "/discover/movie" },
      { id: 9, title: "톨스토이", link: "/discover/movie" },
    ],
  },
];
const Section1 = () => {
  const sett = {
    slidesToShow: 4,
    slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 767,
          settings: {
             slidesToShow: 2,
          }
        },
      ]
  };
  return (
    <section className="Section1">
      {Ani.map((ani, idx) => (
        <div className="ani inner" key={ani.id}>
          <div className="title">
            <h2>{ani.title}</h2>
            <a href={`${process.env.PUBLIC_URL}${ani.link}`}>
              더보기 <i className="xi-arrow-right"></i>
            </a>
          </div>
          <div className="content">
            <Slider {...sett}>
              {ani.movie.map((movie, idx) => (
                <div key={movie.id}>
                  <a href={`${process.env.PUBLIC_URL}${movie.link}`}>
                    <div className="img_box">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/img0${ani.id}0${movie.id}.jpg`}
                        alt=""
                      />
                    </div>
                    <strong>{movie.title}</strong>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Section1;
