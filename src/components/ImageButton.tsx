"use client";

import { TextImage } from "@/types";
import React, { useState, useEffect } from 'react';

export const ImageButton: React.FC<TextImage> = ({ imageURL, dimensions, text, fontSize }) => {
  // Extract image dimensions, still trying to get it to work in typescript
  const [imageDimensions, setImageDimensions] = useState(dimensions);

  useEffect(() => {
    if (!dimensions) {
      const image = new Image();
      image.onload = () => {
        setImageDimensions({ width: image.width, height: image.height });
      };
      image.src = imageURL;
    }
  }, [imageURL, dimensions]);

  const { width=dimensions?.width, height=dimensions?.height } = imageDimensions || {};


  return (
      <button 
      className="bg-cover bg-center bg-no-repeat text-white text-center p-4 flex items-center justify-center"
      style={{ backgroundImage: `url(${imageURL})`, width: `${width}px`, height: `${height}px`, fontSize: `${fontSize}px` }}
    >
      {text}
    </button>
  );
};