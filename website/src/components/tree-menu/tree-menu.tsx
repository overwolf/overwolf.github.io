import './tree-menu.scss';
import React, {FC, Children} from 'react';

interface TreeMenuProps {
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const TreeMenu: FC<TreeMenuProps> = props => {
  const {
    children
  } = props;

  // -----------------------------------------------------------------------------

  return (
    <ul className='tree-menu'>

    </ul>
  );
};

export default TreeMenu;