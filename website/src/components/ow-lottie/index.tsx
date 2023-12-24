import React from 'react';
import Lottie from 'react-lottie';

function OWLottie(props: { width?: string; height?: string; data: any }) {
  const { width, height, data } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };

  // ---------------------------------------------------------------------------

  return (
    <Lottie
      options={defaultOptions}
      height={height ?? '100%'}
      width={width ?? '100%'}
    ></Lottie>
  );
}

export default OWLottie;
