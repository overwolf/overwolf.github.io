import './ow-tabs.scss';
import React, {FC} from 'react';

interface TabProps {
  tabID: string;
  label: string;
  iconDarkSrc?: string;
  iconLightSrc?: string;
  className?: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const OWTabItem: FC<TabProps> = props => {
  const {
    tabID,
    label,
    iconDarkSrc,
    iconLightSrc,
    className,
    children
  } = props;

  return (
    <section
      className={className}
      id={tabID}
      data-label={label}
      data-icon={iconDarkSrc}
      data-light-icon={iconLightSrc}
      >
        {children}
    </section>
  );
};

export default OWTabItem;