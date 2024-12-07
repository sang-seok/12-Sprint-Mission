export default function ProductSearch({ productSearch, getProductData }) {

  return (
    <div className="searchBox">
      <label htmlFor="search" className="blind">
        검색상품 입력
      </label>
      <input
        value={productSearch}
        onChange={getProductData}
        id="search"
        type="text"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  )

}