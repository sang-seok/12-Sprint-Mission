import { useEffect, useState } from "react"
import axios from "axios";

export default function ProductComment({ productId }) {

  const [ProductComment, setProductComment] = useState([]);
  const limit = 10; // 페이지당 댓글 수 (기본값 예시)
  //const [cursor, setCursor] = useState(null);  다음 페이지를 위한 커서

  useEffect(() => {

    async function ProductInquiryInfo() {
      try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products/${productId}/comments`, {
          params: {
            limit: limit,   // 페이지당 댓글 수
          },
        });
        setProductComment(response.data.list);
      } catch (error) {
        console.error("error:", error);
      }
    }

    ProductInquiryInfo();

  }, [productId])

  return (

    <div className="inquiryInfoList">
      {
        ProductComment.length > 0 ? (
          ProductComment.map((data, i) => {
            return (
              <div className="box" key={i}>
                <p className="comment">
                  {data.content}
                </p>
                <div className="productInquiryInfo">
                  <div className="imgBox">
                    <img src={data.writer.image} alt={data.writer.nickname} />
                  </div>
                  <div className="textBox">
                    <p className="writer">
                      {data.writer.nickname}
                    </p>
                    <span className="time">
                      {new Date(data.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <p className="noInquiry">
            아직 문의가 없어요
          </p>
        )
      }
    </div>

  )

}