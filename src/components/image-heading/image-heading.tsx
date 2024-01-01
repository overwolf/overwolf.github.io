import './image-heading.scss';
import React, { FC } from 'react';
import useThemeState from '../hooks/theme-state';

interface ImageHeadingProps {
  title: string;
  imgLightSrc: string;
  imgDarkSrc: string;
  children: React.ReactNode;
  id: string;
}

// -----------------------------------------------------------------------------

const ImageHeading: FC<ImageHeadingProps> = (props) => {
  const { title, imgLightSrc, imgDarkSrc, children, id } = props;

  const themeState = useThemeState();
  const imgSrc = themeState === 'light' ? imgLightSrc : imgDarkSrc;
  return (
    <div className="image-heading">
      <img src={imgSrc} alt={`${title} Icon`} />
      <div className="content">
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ImageHeading;
