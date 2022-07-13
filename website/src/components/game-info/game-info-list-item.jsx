import React from 'react';

function GameInfoListItem(props) {
  const {name, pathUrl} = props;

  return (
    <a href={`${pathUrl}`}>
      <svg>
        <use href="/img/sprite.svg#urlIcon" />
      </svg>
      {name}
    </a>
  )
}

export default GameInfoListItem;