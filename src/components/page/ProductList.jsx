import { useEffect, useState } from "react";
import Footer from "../section/Footer";
import Header from "../section/Header";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList() {

  const [item, setItem] = useState([]);
  const [bestItem, setBestItem] = useState([]);
  const [productSearch, setProductSearch] = useState('');
  const [filterItem, setFilterItem] = useState([]);
  // const [selectView, setSelectView] = useState(false);
  const noImage = 'https://via.placeholder.com/222?text=No+Image';

  useEffect(() => {

    const allItem = async function () {

      await axios.get('https://panda-market-api.vercel.app/products')
        .then((response) => {
          setItem(response.data.list)
        })
        .catch((error) => {
          console.log(error);
        })

    };

    const BestItem = async function () {
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

    allItem();
    BestItem();

  }, [])

  useEffect(() => {
    const filter = item.filter((data) =>
      data.name.toLowerCase().includes(productSearch.toLowerCase())
    );
    setFilterItem(filter);
  }, [productSearch, item]);

  const getProductData = function (e) {
    setProductSearch(e.target.value);
  };

  /*
  const toggleSelect = function (e) {
    e.preventDefault();
    setSelectView(!selectView);

  };
  */

  return (
    <>
      <Header />
      <main id="sub">
        <div className="contentBox">
          <div className="itemsBox">

            <div className="productBox">
              <div className="container">
                <div className="product">
                  <h3>
                    베스트 상품
                  </h3>
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
              </div>
            </div>

            <div className="productBox">
              <div className="container">
                <div className="product">
                  <h3>
                    전체 상품
                  </h3>

                  <ul className="cardList allCardBox">
                    {
                      filterItem.length === 0 ? (
                        <p>
                          검색된 상품이 없습니다.
                        </p>
                      ) : (
                        filterItem.map((data, i) => {
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
                      )
                    }
                  </ul>
                  <div className="searchWrap">
                    <div className="searchBox">
                      <div className="searchBtnBox">
                        <button className="searchBtn">
                          <span className="blind">검색</span>
                        </button>
                      </div>
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

                    <div className="btnBox">
                      <Link to={'/additem'} className="addBtn">
                        상품 등록하기
                      </Link>
                    </div>

                    {/* <div className="selectBox">
                      <a href="#" className={`select ${selectView ? "active" : ""}`} onClick={toggleSelect}>
                        최신순
                      </a>
                      <ul className="viewList">
                        <li>
                          <a href="#">
                            최신순
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            좋아요순
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </>
  )

}