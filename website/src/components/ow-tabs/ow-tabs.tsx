import './ow-tabs.scss';
import React, {FC} from 'react';

interface TabsProps {
  show: boolean;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const OWTabs: FC<TabsProps> = props => {
  const {
    children
  } = props;

  return (

    <section className='tabs-section'>
      <nav className='tabs-nav'>
        <button className='tabs-nav-item is-active' data-tab='tab-name'>
          <img src='/img/getting-started/electron-app-icon.svg' alt='Overview' />
          Overview
        </button>
        <button className='tabs-nav-item' data-tab='tab-name'>
          <img src='/img/getting-started/electron-app-icon.svg' alt='Overview' />
          test
        </button>
      </nav>

      <div className='panels-container'>
        <section className='panel tab-name'>{children}</section>
        <section className='panel tab-name'></section>
      </div>

    </section>
  );
};

export default OWTabs;