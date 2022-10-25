import { useRef } from "react";
import Slider from "react-slick";
import { Router, Route, Link } from "react-router-dom";

const visual = [
  { id: 1, title: "주토피아", des: "재미지겠ZOO?", link: "/discover/movie" },
  {
    id: 2,
    title: "인어공주",
    des: "The Little Mermaid",
    link: "/discover/movie",
  },
  {
    id: 3,
    title: "라푼젤",
    des: "다덤벼,그녀가 오늘 머리 풀었다!",
    link: "/discover/movie",
  },
  {
    id: 4,
    title: "라따뚜이",
    des: "누구나 요리 할 수 있다.",
    link: "/discover/movie",
  },
  {
    id: 5,
    title: "인사이드아웃",
    des: "진짜 나를 만날 시간",
    link: "/discover/movie",
  },
];

const Mainvisual = () => {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "17%",
    slidesToShow: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            centerPadding: "0",
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
          }
        },
      ]
  };
  const SLIDE = useRef();

  return (
    <section className="Mainvisual">
      <Slider {...settings} ref={SLIDE}>
        {visual.map((visual, idx) => (
          <figure key={visual.id}>
            <Link to={visual.link} className="img_box">
              <img
                src={`${process.env.PUBLIC_URL}/img/main0${visual.id}.png`}
                alt=""
              />
              <div className="txt_box">
                <h2>{visual.title}</h2>
                <strong>{visual.des}</strong>
              </div>
            </Link>
          </figure>
        ))}
      </Slider>
      <div className="arrows">
        <ul className="inner">
          <li onClick={() => SLIDE.current.slickPrev()}>
            <i className="xi-angle-left-thin"></i>
          </li>
          <li onClick={() => SLIDE.current.slickNext()}>
            <i className="xi-angle-right-thin"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Mainvisual;
