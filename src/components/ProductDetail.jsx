
export default function ProductDetail({ productDetail }) {

  if (!productDetail) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detail">
      <div className="imgBox">
        <img src={productDetail.images} alt={productDetail.name} />
      </div>
      <div className="textBox">
        <div className="productTop">
          <p className="title">
            {productDetail.name}
          </p>
          <span className="price">
            {productDetail.price}원
          </span>
        </div>

        <div className="productIntroduction">
          <span className="text">
            상품소개
          </span>
          <p>
            {productDetail.description}
          </p>
        </div>

        <div className="productTag">
          <span className="text">
            상품태그
          </span>
          <div className="productTagList">
            <em>
              #{productDetail.tags}
            </em>
          </div>
        </div>

        <div className="userBox">
          <div className="imgBox">
            <img src={process.env.PUBLIC_URL + '/images/user_icon.svg'} alt="" />
          </div>
          <div className="textBox">
            <p className="userId">
              {productDetail.ownerId}
            </p>
            <p className="regDate">
              {new Date(productDetail.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="likeBox">
            <img src={process.env.PUBLIC_URL + '/images/detail_like_icon.svg'} alt="하트 아이콘" />
            <span>
              {productDetail.favoriteCount}
            </span>
          </div>
        </div>

      </div>
    </div>
  )

}