import './preloader.scss';
import React from 'react';

function Preloader(props) {
 const { small } = props;

// ---------------------------------------------------------------------------

  return (
    <div className={`preloader ${small ? 'small' : ''}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="https://www.w3.org/2000/svg">
        <path d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1" stroke="white" strokeWidth="2"/>
      </svg>
      <span>Loading...</span>
    </div>
  );

}

export default Preloader;