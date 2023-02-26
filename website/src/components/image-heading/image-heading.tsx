import './image-heading.scss';
import React, {FC, Children} from 'react';
// import useThemeState from '../hooks/theme-state';

interface ImageHeadingProps {
  title: string;
  imgSrc: string;
}

// -----------------------------------------------------------------------------

const ImageHeading: FC<ImageHeadingProps> = props => {
  const {
    title,
    imgSrc
  } = props;

  // -----------------------------------------------------------------------------

  return (
    <h2 className='image-heading'>
      <img src={imgSrc} alt={title}/>
      {title}
    </h2>
  );
};

export default ImageHeading;