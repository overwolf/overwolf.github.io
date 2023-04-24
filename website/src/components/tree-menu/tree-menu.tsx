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
    <section className='tree-menu-block'>
      <span className='type'>Start{`(`}</span>
      <ul className='tree-menu'>
        <li className='is-open'>
          {/* <svg><use href="/img/sprite.svg#arrowDown"></use></svg> */}
          <div className='property'>
            <span className='key'>Settings:</span>
            <button className='expand-btn'>{`{...}`}</button>
          </div>
          <ul className='tree-menu-sub-level-1'>
            <li>
              <div className='property'>
                <span className='key'>buffer_length</span>
                <span className='value'>20000</span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          {/* <svg><use href="/img/sprite.svg#arrowDown"></use></svg> */}
          <div className='property'>
            <span className='key'>Sound:</span>
            <button className='expand-btn'>{`{...}`}</button>
          </div>
          <ul className='tree-menu-sub-level-1'>
            <li>
              <div className='property'>
                <span className='key'>buffer_length</span>
                <span className='value'>20000</span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          {/* <svg><use href="/img/sprite.svg#arrowDown"></use></svg> */}
          <div className='property'>
            <span className='key'>Sound:</span>
            <button className='expand-btn'>{`{...}`}</button>
          </div>
          <ul className='tree-menu-sub-level-1'>
            <li>
              <div className='property'>
                <span className='key'>buffer_length</span>
                <span className='value'>20000</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <span className='type'>{`)`}</span>
    </section>
  );
};

export default TreeMenu;