import React from 'react';
import "./fancy-link.scss";

// url with link icon
function FancyLink(props: { name: string; pathUrl: string; }) {
  const {name, pathUrl} = props;

  return (
    <a href={`${pathUrl}`} className='fancy-link'>
      <svg>
        <use href="/img/sprite.svg#urlIcon" />
      </svg>
      {name}
    </a>
  )
}

export default FancyLink;