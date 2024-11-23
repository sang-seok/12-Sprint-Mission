import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer id="footer">
      <div class="container">
        <div class="footer">

          <span class="text">
            ©codeit - 2024
          </span>

          <ul class="footerLink">
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

          <ul class="snsLink">
            <li>
              <Link to={"https://www.facebook.com/"} class="faceBook">
                <span class="blind">페이스북</span>
              </Link>
            </li>
            <li>
              <Link to={"https://x.com/"} class="twitter">
                <span class="blind">트위터</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.youtube.com/"} class="youtube">
                <span class="blind">유튜브</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"} class="insta">
                <span class="blind">유튜브</span>
              </Link>
            </li>
          </ul>

        </div>

      </div>

    </footer>

  )

}