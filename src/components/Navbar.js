import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { navData } from "../navData";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <Nav>
      <Link to="/">
        <h2>React</h2>
      </Link>
      <div className="sideBar--btns">
        {toggleSidebar ? (
          <FaTimes className="icon close" onClick={handleSidebar} />
        ) : (
          <FaBars className="icon bar" onClick={handleSidebar} />
        )}
      </div>

      <div className={toggleSidebar ? "nav--links showSidebar" : "nav--links"}>
        {navData.map(({ id, url, name }) => (
          <NavLink to={url} key={id} onClick={handleSidebar}>
            {name}
          </NavLink>
        ))}
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 10;
  height: 70px;
  background-color: #2192ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  h2 {
    color: white;
    letter-spacing: 2px;
  }
  .icon {
    font-size: 27px;
  }
  .nav--links a {
    margin: 0px 10px;
    color: #524a4e;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .nav--links a.active {
    color: white;
  }

  .sideBar--btns {
    display: none;
    .bar {
      color: white;
    }
    .close {
      color: #da1212;
    }
  }

  @media screen and (max-width: 960px) {
    .nav--links {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: -100%;
      height: calc(100vh - 70px);
      width: 100%;
      background-color: #2192ff;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease-in-out;
    }
    .nav--links a {
      margin: 20px 0px;
      font-size: 20px;
    }
    .sideBar--btns {
      display: block;
    }
    .showSidebar {
      left: 0;
    }
  }
`;

export default Navbar;
