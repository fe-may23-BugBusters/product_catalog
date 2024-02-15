/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import './sass/About.scss';

type PropsAbout = {
  description: any;
};

export const About: React.FC<PropsAbout> = ({ description }) => {
  console.log(description);

  return (
    <div className="about">
      <h2 className="about_h2">About</h2>
      <h3 className="about_h3 line-separator">And then there was Pro</h3>
      <p className="about_p">
        {description[0].text[0]}
        <br />
        <br />
        {description[0].text[1]}
      </p>
      <h3 className="about_h3">Camera</h3>
      <p className="about_p">{description[1].text}</p>
      <h3 className="about_h3">
        Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
        <br />
        Love it.
      </h3>
      <p className="about_p">
        {
          description[2].text
        }
      </p>
    </div>
  );
};
