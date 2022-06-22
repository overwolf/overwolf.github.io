import './video-box.scss';
import React from 'react';


function VideoBox(props) {
 const { videoID, fullWidth } = props;

// ---------------------------------------------------------------------------

  return (
    <div className={`video-box ${ fullWidth ? 'full-width': '' }`}>
      <iframe className="video-frame" src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );

}

export default VideoBox;