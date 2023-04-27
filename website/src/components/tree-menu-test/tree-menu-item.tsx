import './ow-tabs.scss';
import React, {FC} from 'react';

interface TabProps {
  tabID: string;
  label: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const TreeMenuItem: FC<TabProps> = props => {
  const {
    tabID,
    children
  } = props;

  return (
    <section id={tabID}>
        {children}
    </section>
  );
};

export default TreeMenuItem;