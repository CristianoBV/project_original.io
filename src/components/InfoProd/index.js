import React, { useState } from "react";
import { Link } from "react-router-dom";

import Popup from "../Popup";

import {
  Info,
  InfoPrice,
  Price,
  Options,
  Colors,
  ColorOptions,
  Size,
  SizeInfo,
  Button,
} from "./styles";

function InfoProd(props) {
  const [colorName, setColorName] = useState("");
  const [selectColor, setSelectColor] = useState({
    selectedColor: null,
  });

  const [size, setSize] = useState("");
  const [selectSize, setSelectSize] = useState({
    selectedSize: null,
  });

  const toggleActive = (index) => {
    setSelectColor({
      ...selectColor,
      selectedColor: props.product.colors[index],
    });
  };

  const toggleSizeActive = (index) => {
    setSelectSize({
      ...selectSize,
      selectedSize: props.product.sizes[index],
    });
  };

  const toggleSelectColor = (index) => {
    const status = "selected";
    if (props.product.colors[index] === selectColor.selectedColor)
      return status;
  };

  const toggleSelectSize = (index) => {
    const status = "selected";
    if (props.product.sizes[index] === selectSize.selectedSize) return status;
  };

  const selectColorName = (name) => {
    return setColorName(name);
  };

  const selectProducSize = (size) => {
    return setSize(size);
  };

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Info>
        <header>
          <h1>{props.product.title}</h1>
          <span>{props.product.cod}</span>
        </header>

        <InfoPrice>
          <Price>
            <span className="old-price">R$ {props.product.oldPrice} |</span>
            <span>R$ {props.product.price}0</span>
          </Price>
          <span>Ou 6x de R$ {(props.product.price / 6).toFixed(2)}</span>
        </InfoPrice>

        <Options>
          <Colors>
            <p>
              Cor: <span>({colorName || "Nenhuma cor selecionada"})</span>
            </p>

            <ColorOptions>
              {props.product?.colors?.map((color, index) => (
                <div
                  key={color.hex}
                  style={{ backgroundColor: color.hex }}
                  className={toggleSelectColor(index)}
                  onClick={() => {
                    toggleActive(index);
                    selectColorName(color.name);
                  }}
                />
              ))}
            </ColorOptions>
          </Colors>

          <Size>
            <SizeInfo>
              <p>
                Tamanho: <span>({size})</span>
              </p>
              <Link to="/guide-size">Guia de medidas</Link>
            </SizeInfo>

            <ul>
              {props.product?.sizes?.map((size, index) => (
                <li
                  key={size}
                  className={toggleSelectSize(index)}
                  onClick={() => {
                    selectProducSize(size);
                    toggleSizeActive(index);
                  }}
                >
                  {size}
                </li>
              ))}
            </ul>
          </Size>
        </Options>

        <Button
          type="button"
          onClick={() => {
            setOpenPopup(true);
            props.addProductToCart();
          }}
        >
          Adicionar à sacola
        </Button>

        <div className="product-desc">
          <h3>Descrição</h3>
          <p>{props.product.desc}</p>
        </div>
      </Info>

      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        product={props.product}
      />
    </>
  );
}

export default InfoProd;
