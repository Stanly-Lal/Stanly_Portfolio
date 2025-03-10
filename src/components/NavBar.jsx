import { React, useState, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "../styles/NavBar.css";

const NavBar = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const navList = useRef(null);
  const hamIcon = useRef(null);
  const headerPosition = useRef(null);
  const navCloseContainer = useRef(null);

  const hamToggler = () => {
    setHamMenu(!hamMenu);

    if (hamMenu) {
      hamIcon.current.style.transform = "rotateY(360deg)";
      navList.current.style.right = "-5000px";
      headerPosition.current.style.position = "static";
      navCloseContainer.current.style.right = "-100%";
    } else {
      hamIcon.current.style.transform = "rotateY(-360deg)";
      navList.current.style.right = "0";
      headerPosition.current.style.position = "fixed";
      navCloseContainer.current.style.right = "0";
    }
  };

  return (
    <>
      <header ref={headerPosition} id="nav">
        <div className="nav-bar">
          <div className="nav-left">
            <h1 className="logo">Portfolio</h1>
          </div>
          <div
            onClick={() => hamToggler()}
            ref={navCloseContainer}
            className="navRight-container"
          >
            <div className="nav-right" ref={navList}>
              <a href="#nav" className="nav-contents">
                Home
              </a>
              <a href="#skill" className="nav-contents">
                Skills
              </a>
              <a href="#project" className="nav-contents">
                Projects
              </a>
              <a href="#contactMe" className="nav-contents">
                Contact Me
              </a>
            </div>
          </div>
          <button
            ref={hamIcon}
            className="ham-menuBtn"
            onClick={() => hamToggler()}
          >
            {hamMenu ? <IoCloseSharp /> : <RiMenu3Line />}
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
