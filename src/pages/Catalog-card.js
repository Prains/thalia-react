import arrow from "../images/arrow.svg";
import { Link } from "react-router-dom";
import { handleItemOnStorage } from "../utils/cartFunctions";
import { motion } from "framer-motion";
import { useState } from "react";
import ImagePopup from "../components/ImagePopup/ImagePopup";

const CatalogCard = (props) => {
  let productList = props.productList;
  let productGalleryImagesArray = productList.acf.productimages;
  const [currentImage, setCurrentImage] = useState(productList.acf.gallery);
  const [popupState, setPopupState] = useState(false);

  return (
    <motion.section
      className="novelties"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="novelties__title title">Каталог</h2>
      <div className="novelties__content">
        <div className="novelties__content__image-wrapper">
          <div className="novelties__content__image-wrapper__top-image">
            <img
              src={currentImage}
              alt=""
              className="novelties__image pointer"
              onClick={() => {
                setPopupState(true);
              }}
            />
          </div>
          <div className="novelties__content__image-wrapper__botom-images">
            {productGalleryImagesArray &&
              productGalleryImagesArray.map((image) => {
                return (
                  <img
                    src={image.url}
                    alt={image.filename}
                    key={image.id}
                    className="novelties__bottomimage"
                    onClick={() => {
                      setCurrentImage(image.url);
                    }}
                  />
                );
              })}
          </div>
        </div>
        <div className="novelties__content__text-wrapper">
          <h3 className="novelties__content__text-wrapper__title text">
            {productList.title.rendered}
          </h3>
          <p className="novelties__content__text-wrapper__text text">
            {productList.acf.desc}
          </p>
          <div className="novelties__content__text-wrapper__bottom">
            <p className="novelties__content__text-wrapper__bottom__text text">
              {productList.acf.price} Р
            </p>
          </div>
          <Link
            to="/order"
            className="mainbutton text pointer novelties__content__text-wrapper__button"
            onClick={() => {
              handleItemOnStorage(productList.acf.code, "", "ordered");
            }}
          >
            Купить сейчас
            <img src={arrow} alt="arrowimg" />
          </Link>
        </div>
      </div>
      {popupState && (
        <ImagePopup
          close={() => {
            setPopupState(false);
          }}
        >
          <img src={currentImage} alt="" className="novelties__image pointer" />
        </ImagePopup>
      )}
    </motion.section>
  );
};

export default CatalogCard;
