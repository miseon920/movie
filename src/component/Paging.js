import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = ({totalp,setlist,with_genres,page}) => {
    const [mpage, setMpage] = useState(1);

  const handlePageChange = (page) => {
      setMpage(page);
      setlist({ with_genres: with_genres, page:page })
    };
    console.log(totalp);

  return (
    <Pagination
        activePage={mpage}
        itemsCountPerPage={10}
        totalItemsCount={totalp}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
    />
  );
};

export default Paging;