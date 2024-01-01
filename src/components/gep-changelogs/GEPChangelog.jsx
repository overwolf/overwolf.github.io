import React from 'react';

function GEPChangelog(props) {
  const {version} = props;

  useEffect(() => {

    async function getGameStatus(page) {
      await fetch(`https://console-api.overwolf.com/v1/apps/ggfmakpbllghoepnmfelddbminamnbmfelbahfdp/versions/${version}/release-notes/${page}`)
      .then(response => response.json())
      // .then(data => setChangelogs(data));
    }

    // getChangelogs();

  }, []);

  return (
    <a href={`${pathUrl}`}>
      <svg>
        <use href="/img/sprite.svg#urlIcon" />
      </svg>
      {name}
    </a>
  )
}

export default GEPChangelog;