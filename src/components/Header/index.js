import React, { useState } from "react";
import { router } from "../../services/router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Shopping from "../Shopping";
import Dropdown from "../Dropdown";

// IMAGES
import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";
import bag from "../../assets/icons/bag.svg";

import {
  Container,
  Logo,
  Content,
  Auth,
  Nav,
  Search,
  Form,
  Bag,
  MenuBars,
} from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <Container>
        <MenuBars onClick={toggle} />
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
          <Nav>
            <ul>
              {router.map((item, index) => (
                <li to={item.link} key={index}>
                  <Link to="/">{item.title}</Link>
                </li>
              ))}
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
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Shopping openCart={openCart} setOpenCart={setOpenCart} products={cart} />
    </>
  );
};

export default Header;
