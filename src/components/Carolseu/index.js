import React from "react";
import Carousel from "react-elastic-carousel";

import Card from "../Card";
import prod01 from "../../assets/images/product1.png";
import prod02 from "../../assets/images/product2.png";
import prod03 from "../../assets/images/product3.png";
import prod04 from "../../assets/images/product4.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Container, Slide } from "./styles";

class CarouselProd extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3, itemsToScroll: 3, pagination: false },
      { width: 1150, itemsToShow: 4, itemsToScroll: 4, pagination: false },
      { width: 1450, itemsToShow: 5, itemsToScroll: 4, pagination: false },
      { width: 1750, itemsToShow: 5, itemsToScroll: 4, pagination: false },
    ];
  }

  render() {
    return (
      <Container>
        <h2>Quem viu, viu também</h2>

        <Carousel
          className="carrol"
          breakPoints={this.breakPoints}
          itemsToScroll={4}
          itemsToShow={4}
          afterChange={this.onChange}
          ref={(ref) => (this.carousel = ref)}
        >
          <Card
            image={prod03}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#A9095E"
            colorTwo="#6B85C1"
            colorThree="#A14830"
            colorFour="#000000"
          />
          <Card
            image={prod04}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#A9095E"
            colorTwo="#6B85C1"
            colorThree="#A14830"
            colorFour="#000000"
          />
          <Card
            image={prod02}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#fff"
            colorTwo="#fff"
            colorThree="#fff"
            colorFour="#fff"
          />
          <Card
            image={prod01}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#fff"
            colorTwo="#6B85C1"
            colorThree="#A14830"
            colorFour="#000000"
          />
          <Card
            image={prod03}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#A9095E"
            colorTwo="#6B85C1"
            colorThree="#A14830"
            colorFour="#000000"
          />
          <Card
            image={prod04}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#A9095E"
            colorTwo="#6B85C1"
            colorThree="#A14830"
            colorFour="#000000"
          />
          <Card image={prod02} price="R$ 204,90" />
          <Card
            image={prod01}
            price="R$ 204,90"
            plots="Ou 6x de R$ 34,15"
            colorOne="#fff"
            colorTwo="#6B85C1"
            colorThree="#A14830"
            colorFour="#000000"
          />
        </Carousel>

        <Slide>
          <div>
            <MdKeyboardArrowLeft
              size={24}
              color="#2a5a75"
              onClick={() => this.carousel.slidePrev()}
            />
          </div>
          <p>1 de 3</p>
          <div>
            <MdKeyboardArrowRight
              size={24}
              color="#2a5a75"
              onClick={() => this.carousel.slideNext()}
            />
          </div>
        </Slide>
      </Container>
    );
  }
}

export default CarouselProd;
