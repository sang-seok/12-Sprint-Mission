import { Link } from "react-router-dom";

export default function Pagination({ currentPage, totalPage, setPage }) {

  const pageNumber = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

  const btnRange = 5 //보여질 버튼의 개수
  const currentSet = Math.ceil(currentPage / btnRange); //현재 버튼이 몇 번째 세트인 지 나타내는 수
  const startPage = (currentSet - 1) * btnRange + 1; //현재 페이지에 보여지는 버튼의 첫번째 수
  const endPage = Math.min(startPage + btnRange - 1, totalPage); // 현재 세트의 마지막 페이지 번호

  // 이전 페이지로 이동
  const handlePrev = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    if (currentPage < totalPage) {
      setPage(currentPage + 1);
    }
  };

  // 페이지 번호 클릭 시
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (

    <div class="paginationBox">
      <Link to="#" class="pageLink pageLinkPrev" onClick={handlePrev}>
        <span class="blind">1페이지 뒤로 이동</span>
      </Link>

      <div class="pagination">
        {
          // startPage부터 endPage까지 페이지 버튼 생성
          Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
            <Link
              key={page}
              to="#"
              className={`pageLink ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Link>
          ))
        }
      </div>

      <Link to="#" class="pageLink pageLinkNext" onClick={handleNext}>
        <span class="blind">1페이지 앞으로 이동</span>
      </Link>
    </div>

  )

}