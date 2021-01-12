import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";

function Popup(props) {
  return (
    <section className={`${props.openPopup ? "ligthbox active" : "ligthbox"}`}>
      <div className="content">
        <button
          type="button"
          className="btn-close"
          onClick={() => props.setOpenPopup(false)}
        >
          X
        </button>

        <h1>
          Produto adicionado <br /> com sucesso!
        </h1>

        <div className="image-preview">
          <img src={props.product?.images?.[0].url} alt="Product name" />
        </div>

        <button type="button" className="btn-buy">
          Finalizar Compra
        </button>
        <Link to="/">Continuar Comprando</Link>
      </div>
    </section>
  );
}

export default Popup;
