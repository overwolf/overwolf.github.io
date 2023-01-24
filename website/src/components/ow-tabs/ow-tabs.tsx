import './ow-tabs.scss';
import React, {FC, Children} from 'react';
import useThemeState from '../hooks/theme-state';
interface TabsProps {
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const OWTabs: FC<TabsProps> = props => {
  const {
    children
  } = props;
  const themeState = useThemeState();

  // -----------------------------------------------------------------------------

  const handleShowHideTab = (tabID: string, event: any) => {
    const tabBtn = event.target;
    const panel = document.querySelector(`#${tabID}`);
    const activePanel = panel?.parentElement?.querySelector('.is-open');
    const activeTabBtn = tabBtn?.parentElement?.querySelector('.is-active');

    activePanel?.classList.remove('is-open');
    activeTabBtn?.classList.remove('is-active');
    tabBtn?.classList.add('is-active');
    panel?.classList.add('is-open');
  }

  // -----------------------------------------------------------------------------

  const tabButtons = Children.map(children, (tabBtn, i) => {
    if(React.isValidElement(tabBtn)) {
      const imgSrc =  themeState == 'light' ? tabBtn.props.iconLightSrc : tabBtn.props.iconDarkSrc;

      return (
        <button
          key={i}
          className={`tabs-nav-item ${i == 0 ? 'is-active' : ''}`}
          data-tab={tabBtn.props.tabID}
          onClick={(event) => handleShowHideTab(tabBtn.props.tabID, event)}
          >

            {tabBtn.props.iconDarkSrc &&
              <img
                src={imgSrc}
                alt={tabBtn.props.label} />
            }

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
      <div className='tabs-header'>
        <nav className='tabs-nav'>{tabButtons}</nav>
      </div>
      <div className='panels-container'>{panels}</div>
    </section>
  );
};

export default OWTabs;