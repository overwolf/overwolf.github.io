import React from 'react';
import Lottie from 'react-lottie';
import './index.scss';

function OWLottie(props: { width?: string; height?: string; data: any }) {
  const { width, height, data } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };

  // ---------------------------------------------------------------------------

  return (
    <div className="ow-lottie">
      <Lottie
        options={defaultOptions}
        height={height ?? '100%'}
        width={width ?? '100%'}
      ></Lottie>
    </div>
  );
}

export default OWLottie;
