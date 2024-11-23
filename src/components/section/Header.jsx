import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();

  return (

    <header id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h1>
              <Link to="/">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="판다마켓" />
              </Link>
            </h1>
          </div>

          <nav>
            <ul className="depth01">
              <li>
                <h2>
                  <Link className={location.pathname === '/notive' ? 'active' : ''} to={'/notice'}>자유게시판</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link className={location.pathname === '/items' ? 'active' : ''} to={'/items'}>중고마켓</Link>
                </h2>
              </li>
            </ul>
          </nav>

          <div className="loginBox">
            <Link className="login" to="/signin">
              <span className="blind">사용자</span>
            </Link>
          </div>
        </div>
      </div>
    </header>

  )

}