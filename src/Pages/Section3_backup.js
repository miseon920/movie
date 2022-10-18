import { useState,useEffect } from "react";
import CategoryFilter from "./CategoryFilter";

const categories = [
    {
    name: "전체",
    value: "all",
  },
  {
    name: "영화",
    value: "category1",
  },
  {
    name: "회원",
    value: "category2",
  },
  {
    name: "결제",
    value: "category3",
  },
];
const qnaList = [
  {
    category: "category1",
    question: "디즈니+는 무엇인가요?",
    answer: "디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의 콘텐츠를 모두 즐길 수 있는 곳입니다. 최신 공개작부터 시대를 초월한 명작과 독점 오리지널에 이르기까지 다양하고 풍성한 콘텐츠를 광고 없이 스트리밍할 수 있습니다.",
  },
  {
    category: "category2",
    question: "디즈니+에서 어떤 콘텐츠를 시청할 수 있나요?",
    answer: "디즈니+는 새로운 콘텐츠를 계속해서 추가하고 있습니다.최신 공개작과 시대를 초월한 명작/독점 공개하는 새로운 오리지널 영화와 시리즈/흥미진진한 스페셜과 기간 한정 스트리밍되는 특별 콘텐츠/그때 그 시절 추억의 작품과 인기 시리즈의 지난 시즌 에피소드/스카이워커 사가 전체와 대부분의 마블 시네마틱 유니버스 작품/인기 단편과 실험적인 단편/다큐멘터리, 리얼리티 시리즈 등",
  },
  {
    category: "category3",
    question: "디즈니+를 어디에서 시청할 수 있나요?",
    answer: "디즈니+ 앱은 모바일 기기, 웹 브라우저, 게임 콘솔, 셋톱박스, 스마트 TV에서 이용할 수 있습니다. 지원되는 기기의 전체 목록을 보려면 여기를 클릭하세요.",
    },
  {
    category: "category1",
    question: "영화는 무엇인가요?",
    answer: "영화 추천해 주세요",
  },
  {
    category: "category2",
    question: "회원이라구욧",
    answer: "회원이 되고싶어요회원이 되고싶어요",
  },
    {
    category: "category3",
    question: "디즈니+에서 결제해주세요?",
    answer: "빨리 결제해주세요",
  },

  {
    category: "category1",
    question: "디즈니+는 무엇인가요?",
    answer: "디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의 콘텐츠를 모두 즐길 수 있는 곳입니다. 최신 공개작부터 시대를 초월한 명작과 독점 오리지널에 이르기까지 다양하고 풍성한 콘텐츠를 광고 없이 스트리밍할 수 있습니다.",
  },
  {
    category: "category2",
    question: "회원",
    answer: "회원이 되고싶어요",
  },
    {
    category: "category3",
    question: "디즈니+에서 어떤 콘텐츠를 결제할 수 있나요?",
    answer: "결제요청해주세요",
  },

];

const FAQ = () => {
  const [category, setCatecory] = useState("all");
  const [cardOnOff, setCardOnOff] = useState(qnaList);
  const [showList, setShowList] = useState(qnaList);

  const getQnACard = (item, index) => {
    return (
      <div className="faq-card" key={index}>
        <div
          className="faq-card-title"
          onClick={() => {
            let tempCard = cardOnOff;
            tempCard[index].show = !tempCard[index].show;
            setCardOnOff([...tempCard]);
          }}
        >
          <span className="question-mark">Q.</span>
          <span>{item.question}</span>
        </div>
        <div
          className={
            qnaList[index].show
              ? "faq-card-answer"
              : "faq-card-answer faq-card-none"
          }
        >
          <span className="answer-mark">A.</span>
          <span className="FAQ-card-answer">{item.answer}</span>
        </div>
      </div>
    );
  };

  useEffect(()=> {
    setShowList(
      qnaList.filter((item) => {
        if (category === "all") return true;
        if (category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  return (
    <section className="Section3 inner">
        <div className="title">
            <h2>자주 묻는 질문</h2>
            <a href="">더보기 <i className="xi-arrow-right"></i></a>
        </div>
        <CategoryFilter
            categories={categories}
            category={category}
            setCatecory={setCatecory}
        />
        <div className="fqa-parent">
            <div className="faq-list">
            {showList.map((item, index) => getQnACard(item, index))}     
            </div>
        </div>
    </section>
  );
};

export default FAQ;