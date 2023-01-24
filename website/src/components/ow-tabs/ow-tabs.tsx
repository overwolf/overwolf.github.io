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

  // -----------------------------------------------------------------------------

  const tabButtons = Children.map(children, (tabBtn, i) => {
    if(React.isValidElement(tabBtn)) {
      return (
        <button
          key={i}
          className={`tabs-nav-item ${i == 0 ? 'is-active' : ''}`}
          data-tab={tabBtn.props.tabID}
          >
          <img src={tabBtn.props.iconSrc} alt={tabBtn.props.label} />
          {tabBtn.props.label}
        </button>
      );
    }
    return null
  })

  // -----------------------------------------------------------------------------

  const panels = Children.map(children, (panel, i) => {
    if(React.isValidElement(panel)) {
      return React.cloneElement(panel as React.ReactElement<any>, {
        className: `panel ${i == 0 ? 'is-open' : ''}`
      });
    }
    return null
  })

  // -----------------------------------------------------------------------------

  return (
    <section className='tabs-section'>
      <nav className='tabs-nav'>{tabButtons}</nav>
      <div className='panels-container'>{panels}</div>
    </section>
  );
};

export default OWTabs;