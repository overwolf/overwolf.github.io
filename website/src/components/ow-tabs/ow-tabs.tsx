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
      <nav className='tabs'>
        <button className='is-active' data-tab='tab-name'>
          Overview
        </button>
        <button className='is-active' data-tab='tab-name'>
          test
        </button>
      </nav>

      <div className='tabs-container'>
        <section className='tab-name'>{children}</section>
        <section className='tab-name'></section>
      </div>

    </section>
  );
};

export default OWTabs;
