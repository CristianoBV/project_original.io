import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/modules/cart/actions";
// API
import ProductsServices from "../../services/product";

import Gallery from "../Gallery";
import InfoProd from "../InfoProd";

import { Container } from "./styles";

const ProductSingle = () => {
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await ProductsServices.index();

    if (response.data) {
      return setProduct(response.data);
    }
  };

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Container>
      <Gallery product={product} />
      <InfoProd product={product} addProductToCart={handleAddProductToCart} />
    </Container>
  );
};

export default ProductSingle;
