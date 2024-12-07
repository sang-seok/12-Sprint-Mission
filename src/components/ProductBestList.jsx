import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductBestList() {

  const [bestItem, setBestItem] = useState([]);
  const noImage = 'https://via.placeholder.com/222?text=No+Image';

  useEffect(() => {

    async function BestItem() {
      try {
        let allItems = [];
        const totalPages = Math.ceil(175 / 10);

        for (let page = 1; page <= totalPages; page++) {
          const response = await axios.get(`https://panda-market-api.vercel.app/products?page=${page}&limit=10`);
          allItems = allItems.concat(response.data.list);
        }

        const sortedItem = allItems.sort((a, b) => b.favoriteCount - a.favoriteCount);
        const likeItem = sortedItem.slice(0, 4);

        setBestItem(likeItem);

      } catch (error) {
        console.log(error);
      }
    };

    BestItem()

  }, [])


  return (
      <div className="productList">
        <ul className="cardList bestCardBox">
          {
            bestItem.map((data, i) => {
              return (
                <li key={i}>
                  <Link to={`${data.id}`}>
                    <div className="imgBox">
                      <img src={data.images.length > 0 ? data.images : noImage} alt={data.name} />
                    </div>

                    <div className="textBox">
                      <h4>
                        {data.name}
                      </h4>
                      <p className="price">
                        {data.price}
                      </p>
                    </div>

                    <div className="likeBox">
                      <span>
                        {data.favoriteCount}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
    </div>
  )

}