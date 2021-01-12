import React from "react";
import { router } from "../../services/router";
import { Link } from "react-router-dom";

import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
  AuthMobile,
} from "./styles";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {router.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <AuthMobile>
            <Link to="/signin">Entrar</Link>
            <span>|</span>
            <Link to="/signup">Cadastrar-se</Link>
          </AuthMobile>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
