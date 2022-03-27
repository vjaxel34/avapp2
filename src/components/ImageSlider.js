import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import classes from "./Slider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className={classes.slider}>
      <AiFillCaretLeft className={classes.left_arrow} onClick={prevSlide} />
      <AiFillCaretRight className={classes.right_arrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Travel image"
                className={classes.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
