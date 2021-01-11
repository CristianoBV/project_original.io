import React, { useState } from "react";
import { router } from "../../services/router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Shopping from "../Shopping";

// IMAGES
import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";
import bag from "../../assets/icons/bag.svg";

import {
  Container,
  Menu,
  Logo,
  Content,
  Auth,
  AuthMobile,
  Nav,
  Search,
  Form,
  Bag,
} from "./styles";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleCloseMenu = (evt) => {
    if (evt.target.tagName === "A") setOpenMenu(false);
  };

  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <Container>
        <Menu onClick={() => setOpenMenu(!openMenu)}>
          <div className={`hamburger ${openMenu ? "close-btn" : ""}`}></div>
        </Menu>
        <Logo>
          <Link>
            <img src={logo} alt="Original.io" />
          </Link>
        </Logo>

        <Content>
          <Auth>
            <Link to="/signin">Entrar</Link>
            <Link to="/signup">Cadastrar-se</Link>
          </Auth>
          <Nav
            className={`navigation ${openMenu ? "menu-opened" : ""}`}
            onClick={handleCloseMenu}
          >
            <ul>
              {router.map((item, index) => (
                <li to={item.link} key={index}>
                  <Link to="/">{item.title}</Link>
                </li>
              ))}

              <AuthMobile>
                <Link to="/signin">Entrar</Link>
                <span>|</span>
                <Link to="/signup">Cadastrar-se</Link>
              </AuthMobile>
            </ul>
          </Nav>

          <Search>
            <Form
              action="/search"
              method="get"
              className={openSearch ? "open" : ""}
            >
              <button type="button" onClick={() => setOpenSearch(!openSearch)}>
                X
              </button>
              <span onClick={() => setOpenSearch(!openSearch)}>
                <img src={search} alt="Search icon" />
              </span>
              <input type="text" placeholder="Buscar" />
            </Form>

            <Bag className="cart" onClick={() => setOpenCart(true)}>
              <img src={bag} alt="Cart icon" />
              <span>{cart.length + 5}</span>
            </Bag>
          </Search>
        </Content>
      </Container>
      <Shopping openCart={openCart} setOpenCart={setOpenCart} products={cart} />
    </>
  );
};

export default Header;
