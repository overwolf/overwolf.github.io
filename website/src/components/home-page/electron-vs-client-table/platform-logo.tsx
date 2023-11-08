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
        <img
          src="/img/home-2023/native-vs-electron/native-logo-desktop.svg"
          alt="Overwolf Native"
          className="native-logo desktop"
          width={193}
          height={40}
        />
      }

      { electron &&
        <img
          src="/img/home-2023/native-vs-electron/electron-logo-desktop.svg"
          alt="Overwolf Electron"
          className="electron-logo desktop"
          width={215}
          height={40}
        />
      }
    </>
  );
};

export default PlatformLogo;
