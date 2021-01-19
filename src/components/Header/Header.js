import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const fixedText = "fixed";
  const whenNotFixed = "not fixed";
  const [headerText, setHeaderText] = useState(fixedText);
  useEffect(() => {
    const header = document.getElementById("Header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove("sticky");
        if (headerText !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  });

  return (
    <header id="Header">
      <Link to="/" className="home-link">
        <h1>
          <i class="fas fa-spa"></i>YOGA POSES
        </h1>
      </Link>
      <nav>
        <Link to="/">About</Link>
        <Link to="/poses">Poses</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
