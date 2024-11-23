import { Link } from "react-router-dom";

export default function Main() {

  return (

    <main id="main">
      <section id="mainSection">
        <div class="container">
          <div class="box">
            <div class="mainContent">
              <div class="text">
                <p class="title">
                  일상의 모든 물건을 <br />
                  거래해 보세요
                </p>
                <Link to="/items" class="view">
                  구경하러 가기
                </Link>
              </div>
              <div class="img">
                <img src={process.env.PUBLIC_URL + '/images/img01.png'} alt="판다가 손을 흔들며 인사하는 이미지" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productSection01">
        <div class="container">
          <div class="box">
            <div class="infoBox">
              <div class="imgBox">
                <img src={process.env.PUBLIC_URL + '/images/img02-1.jpg'} alt="판다가 인기상품을 보고 있는 이미지" />
              </div>

              <div class="textBox">
                <span class="infoText">
                  Hot item
                </span>
                <p class="title">
                  인기 상품을 <br />
                  확인해보세요
                </p>
                <p class="text">
                  가장 HOT한 중고거래 물품을 <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productSection02">
        <div class="container">
          <div class="box">
            <div class="infoBox">
              <div class="imgBox">
                <img src={process.env.PUBLIC_URL + '/images/img02-2.jpg'} alt="물품 검색을 의미하는 돋보기 이미지" />
              </div>
              <div class="textBox">
                <span class="infoText">
                  Search
                </span>
                <p class="title">
                  구매를 원하는 <br />
                  상품을 검색하세요
                </p>
                <p class="text">
                  구매하고 싶은 물품은 검색해서 <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productSection03">
        <div class="container">
          <div class="box">
            <div class="infoBox">
              <div class="imgBox">
                <img src={process.env.PUBLIC_URL + '/images/img02-3.jpg'} alt="상품과 상품을 담을 수 있는 걸 의미하는 폴더 이미지" />
              </div>
              <div class="textBox">
                <span class="infoText">
                  Register
                </span>
                <p class="title">
                  판매를 원하는 <br />
                  상품을 등록하세요
                </p>
                <p class="text">
                  어떤 물건이든 판매하고 싶은 상품을 <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="infoSection">
        <div class="container">
          <div class="box">
            <div class="layoutBox">
              <div class="text">
                <p class="title">
                  믿을 수 있는 <br />
                  판다마켓 중고 거래
                </p>
              </div>
              <div class="img">
                <img src={process.env.PUBLIC_URL + '/images/img03.png'} alt="판다가 손을 흔들며 인사하는 이미지" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )

}