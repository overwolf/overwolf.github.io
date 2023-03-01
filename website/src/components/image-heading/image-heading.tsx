import './image-heading.scss';
import React, {FC, Children} from 'react';
import useThemeState from '../hooks/theme-state';

interface ImageHeadingProps {
  title: string;
  imgLightSrc: string;
  imgDarkSrc: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const ImageHeading: FC<ImageHeadingProps> = props => {
  const { title, imgLightSrc, imgDarkSrc, children } = props;

  const themeState = useThemeState();
  const imgSrc = themeState == 'light' ? imgLightSrc : imgDarkSrc;
  return (
    <div className='image-heading'>
      <img src={imgSrc} alt={title} />
      <div className='content'>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ImageHeading;