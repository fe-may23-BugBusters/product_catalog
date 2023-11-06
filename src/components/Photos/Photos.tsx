/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import html2canvas from 'html2canvas';
import React, { useEffect, useState } from 'react';
import './sass/Photos.scss';

type PropsPhoto = {
  images: string[];
};

export const Photos: React.FC<PropsPhoto> = ({
  images,
}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  // const [convertedImages, setConvertedImages] = useState<string[]>([]);

  // const convertJpgToPng = async (jpgUrl: string) => {
  //   const img = new Image();

  //   img.crossOrigin = 'Anonymous';
  //   img.src = jpgUrl;

  //   return new Promise<string>((resolve) => {
  //     img.onload = () => {
  //       const canvas = document.createElement('canvas');

  //       canvas.width = img.width;
  //       canvas.height = img.height;

  //       const ctx = canvas.getContext('2d');

  //       if (ctx) {
  //         ctx.drawImage(img, 0, 0);
  //         const pngUrl = canvas.toDataURL('image/png');

  //         resolve(pngUrl);
  //       }
  //     };
  //   });
  // };

  // useEffect(() => {
  //   const convertImages = async () => {
  //     const converted = await Promise.all(images.map(async (image) => {
  //       const pngUrl = await convertJpgToPng(`../../${image}`);

  //       return pngUrl;
  //     }));

  //   setConvertedImages(converted);
  // };

  //   convertImages();
  // }, [images]);

  // Funkcja do zmiany obrazka na podstawie klikniętej miniaturki
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
