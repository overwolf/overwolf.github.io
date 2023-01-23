import './ow-tabs.scss';
import React, {FC, Children} from 'react';

interface TabsProps {
  show: boolean;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const OWTabs: FC<TabsProps> = props => {
  const {
    children
  } = props;

  const tabButtons = Children.map(children, (tabBtn, i) => {
    if(React.isValidElement(tabBtn)) {
      return (
        <button
          key={i}
          className='tabs-nav-item'
          data-tab={tabBtn.props.tabID}
          >
          <img src={tabBtn.props.iconSrc} alt={tabBtn.props.label} />
          {tabBtn.props.label}
        </button>
      );
    }
    return null
  })

  return (
    <section className='tabs-section'>
      <nav className='tabs-nav'>{tabButtons}</nav>
      <div className='panels-container'>{children}</div>
    </section>
  );
};

export default OWTabs;