import React from "react";

import { Container, CardProd, Product, Colors, Button, Plots } from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Card = ({
  image,
  price,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  plots,
}) => {
  return (
    <Container>
      <CardProd>
        <Product>
          <img src={image} alt="" />
          <div>
            <p>{price}</p>

            <Colors>
              <Button colorOne={colorOne}></Button>
              <Button colorTwo={colorTwo}></Button>
              <Button colorThree={colorThree}></Button>
              <Button colorFour={colorFour}></Button>
            </Colors>
          </div>
          <Plots>{plots}</Plots>
        </Product>
      </CardProd>
    </Container>
  );
};

export default Card;
