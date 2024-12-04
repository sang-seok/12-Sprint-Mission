import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">

          <span className="text">
            ©codeit - 2024
          </span>

          <ul className="footerLink">
            <li>
              <Link to={"/privacy"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/faq"}>
                FAQ
              </Link>
            </li>
          </ul>

          <ul className="snsLink">
            <li>
              <Link to={"https://www.facebook.com/"} className="faceBook">
                <span className="blind">페이스북</span>
              </Link>
            </li>
            <li>
              <Link to={"https://x.com/"} className="twitter">
                <span className="blind">트위터</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.youtube.com/"} className="youtube">
                <span className="blind">유튜브</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"} className="insta">
                <span className="blind">유튜브</span>
              </Link>
            </li>
          </ul>

        </div>

      </div>

    </footer>

  )

}