"use client";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";

import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import "yet-another-react-lightbox/styles.css";

import { gruppo, terreno } from "./images";

type Props = {
  type: "gruppo" | "terreno";
};

export const ImageGrid = ({ type }: Props) => {
  const [index, setIndex] = useState(-1);

  const images = type === "gruppo" ? gruppo : terreno;

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  const handleClick = (index: number) => setIndex(index);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        plugins={[Slideshow]}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};
