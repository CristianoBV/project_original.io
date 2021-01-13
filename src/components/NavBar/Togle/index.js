import React from "react";
import { router } from "../../../services/router";
import { Link } from "react-router-dom";
import { Ul, BtnWrap, AuthMobile } from "./styles";

const Togle = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        {router.map((item, index) => (
          <li to={item.link} key={index}>
            <Link to="/">{item.title}</Link>
          </li>
        ))}
        <BtnWrap>
          <AuthMobile>
            <Link to="/signin">Entrar</Link>
            <span>|</span>
            <Link to="/signup">Cadastrar-se</Link>
          </AuthMobile>
        </BtnWrap>
      </Ul>
    </>
  );
};

export default Togle;
