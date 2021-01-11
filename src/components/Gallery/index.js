import React, { useState } from "react";

import product from "../../assets/images/product-photo.png";
import player from "../../assets/icons/player.svg";

import arrowUpIcon from "../../assets/icons/arrow-up.svg";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";

import {
  Container,
  Thumbs,
  Preview,
  Video,
  Controll,
  Play,
  Slide,
  Player,
} from "./styles";

const Gallery = (props) => {
  const [selectImage, setSelectImage] = useState({
    selectedImage: null,
  });

  const [previewImage, setPreviewImage] = useState({});

  const toggleActive = (index) => {
    setSelectImage({
      ...selectImage,
      selectedImage: props.product.images[index],
    });
  };

  const toggleSelectImage = (index) => {
    const status = "active";
    if (props.product.images[index] === selectImage.selectedImage) {
      return status;
    }
  };

  const handleSetImagePreview = (index) => {
    setPreviewImage(props.product.images[index]);
  };

  return (
    <Container>
      <Thumbs>
        <Video>
          <p>Video</p>

          <Player>
            <img src={product} alt="Video Product" />
            <span>
              <img src={player} alt="Icon Player" />
            </span>
          </Player>
        </Video>

        <ul>
          <span>
            <img src={arrowUpIcon} alt="Arrow Up Gallery" />
          </span>

          {props.product?.images?.map((image, index) => (
            <li
              key={image.url}
              className={toggleSelectImage(index)}
              onClick={() => {
                toggleActive(index);
                handleSetImagePreview(index);
              }}
            >
              <img src={image.url} alt={image.name} />
            </li>
          ))}

          <span>
            <img src={arrowDownIcon} alt="Arrow Down Gallery" />
          </span>
        </ul>
      </Thumbs>

      <Preview>
        <img
          src={previewImage.url || props.product?.images?.[0].url}
          alt={previewImage.name}
        />
        <Controll>
          <Play>
            <span>
              <img src={player} alt="" />
            </span>
          </Play>

          <Slide>
            <div className="selected"></div>
            <div />
            <div />
            <div />
          </Slide>
        </Controll>
      </Preview>
    </Container>
  );
};

export default Gallery;
