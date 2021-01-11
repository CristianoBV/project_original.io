import React from "react";

import remove_icon from "../../assets/icons/remove_icon.svg";
import add_icon from "../../assets/icons/add_icon.svg";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
// import "./style.css";

import {
  Items,
  Item,
  Info,
  Image,
  Detail,
  Increments,
  AddRemove,
  Delete,
  Footer,
  Promo,
  Resume,
  Total,
} from "./styles";

const Shopping = (props) => {
  return (
    <section
      className={props.openCart ? "cart-container isOpen" : "cart-container"}
    >
      <div className="cart-content">
        <button
          type="button"
          className="close-cart"
          onClick={() => props.setOpenCart(false)}
        >
          X
        </button>

        <header>
          <p>Sacola</p>
          <span>{props.products.length + 5} Itens</span>
        </header>

        <Items>
          {props.products &&
            props.products.map((item) => (
              <Item key={item.product.id + Math.random()}>
                <Info>
                  <Image>
                    <img src={item.product.images[0].url} alt="Product name" />
                  </Image>
                  <Detail>
                    <p>{item.product.title}</p>
                    <span>R$ {item.product.price}</span>
                  </Detail>
                </Info>

                <Increments>
                  <AddRemove>
                    <span>
                      <img src={remove_icon} alt="Remove icon" />
                    </span>
                    <p className="total-item">{item.quantity}</p>
                    <span>
                      <img src={add_icon} alt="Add icon" />
                    </span>
                  </AddRemove>
                  <Delete>
                    <button>X</button>
                  </Delete>
                </Increments>
              </Item>
            ))}

          <Item>
            <Info>
              <Image>
                <img src={product1} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Item>
            <Info>
              <Image>
                <img src={product1} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Item>
            <Info>
              <Image>
                <img src={product3} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Item>
            <Info>
              <Image>
                <img src={product1} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Item>
            <Info>
              <Image>
                <img src={product1} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Item>
            <Info>
              <Image>
                <img src={product1} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Item>
            <Info>
              <Image>
                <img src={product1} alt="Product name" />
              </Image>
              <Detail>
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </Detail>
            </Info>

            <Increments>
              <AddRemove>
                <span>
                  <img src={remove_icon} alt="Remove icon" />
                </span>
                <p className="total-item">01</p>
                <span>
                  <img src={add_icon} alt="Add icon" />
                </span>
              </AddRemove>
              <Delete>
                <button>X</button>
              </Delete>
            </Increments>
          </Item>

          <Footer>
            <Promo>
              <p>
                Faltam R$ xx,xx para você <br />
                <span>Ganhar Frete Grátis</span>
              </p>
            </Promo>
            <Total>
              <Resume>
                <span>Total: R$ 149,00</span>
                <p>até 3x de R$ 49,90 sem juros</p>
              </Resume>

              <button type="button">Finalizar Compra</button>
            </Total>
          </Footer>
        </Items>
      </div>
    </section>
  );
};

//   return (
//     <Section
//       className={props.openCart ? "cart-container isOpen" : "cart-container"}
//     >
//       <Content>
//         <button
//           type="button"
//           className="close-cart"
//           onClick={() => props.setOpenCart(false)}
//         >
//           X
//         </button>

//         <header>
//           <p>Sacola</p>
//           <span>{props.products.length + 5} Itens</span>
//         </header>

//       </Content>
//     </Section>
//   );
// };

export default Shopping;
