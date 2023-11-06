/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import html2canvas from 'html2canvas';
import React, { useState } from 'react';
import './sass/Photos.scss';

type PropsPhoto = {
  images: string[];
};

export const Photos: React.FC<PropsPhoto> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const changeImage = (newImage: string) => {
    setCurrentImage(newImage);
  };

  return (
    <div className="phoneInfoPhotos">
      <div className="phoneInfoPhotos_gallery">
        <div className="phoneInfoPhotos_thumbnails">
          {images.map((image, index) => (
            <div className="phoneInfoPhotos_frame" key={index}>
              <img
                key={image}
                className="phoneInfoPhotos_thumbnail"
                src={require(`../../${image}`)}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => changeImage(image)}
              />
            </div>
          ))}
        </div>
        <div className="phoneInfoPhotos_main-image">
          <img src={require(`../../${currentImage}`)} alt="Main" />
        </div>
      </div>
    </div>
  );
};
