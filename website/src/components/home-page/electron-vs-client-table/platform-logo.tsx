import React, { FC, useState } from 'react';
import './electron-vs-client-table.scss';

interface PlatformLogoProps {
  electron?: boolean;
  native?: boolean;
}

const PlatformLogo: FC<PlatformLogoProps> = props => {
  const {
    electron = false,
    native = false
  } = props;


  return (
    <>
      { native &&
        <picture>
          <source media="(min-width: 600px)" srcSet="/img/home-2023/native-vs-electron/native-logo-desktop.svg" />
          <img src="/img/home-2023/native-vs-electron/native-logo-small.svg" alt="Overwolf Native" />
        </picture>
      }

      { electron &&
        <picture>
          <source media="(min-width: 600px)" srcSet="/img/home-2023/native-vs-electron/electron-logo-desktop.svg" />
          <img src="/img/home-2023/native-vs-electron/electron-logo-small.svg" alt="Overwolf Electron" />
        </picture>
      }
    </>
  );
};

export default PlatformLogo;
