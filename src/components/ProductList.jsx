import { Link } from "react-router-dom";

export default function ProductList({ filterItems, sortedItems }) {

  const noImage = 'https://via.placeholder.com/222?text=No+Image';

  return (

    <div className="productList">
      <ul className="cardList allCardBox">
        {
          sortedItems(filterItems).map((data, i) => {
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