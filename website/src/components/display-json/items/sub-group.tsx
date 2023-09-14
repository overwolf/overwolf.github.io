import React, {FC, useContext, useRef} from 'react';
import {
  CodeBlockContext,
  MainGroupContext,
  SubGroupContext,
  checkExpandAll
} from '../display-json-utils';

interface CodeBlockSubGroupProps {
  subKeyName: string;
  id: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const CodeBlockSubGroup: FC<CodeBlockSubGroupProps> = props => {
  const {
    subKeyName,
    id,
    children
  } = props;

  const cbID = useContext(CodeBlockContext);
  const mbID = useContext(MainGroupContext);
  const groupItem = useRef<HTMLInputElement>(null);

  // -----------------------------------------------------------------------------

  const handleExpandCollapse = () => {
    const thisSubGroup = groupItem.current;
    if(thisSubGroup?.classList.contains('is-open')) {
      thisSubGroup?.classList.remove('is-open');
    } else {
      thisSubGroup?.classList.add('is-open');
    }
    checkExpandAll(cbID);
  }

  return (
    <SubGroupContext.Provider value={subKeyName}>
      <div className={'sub-group-item property group'}
        ref={groupItem}
        id={`${id ? id : `${cbID}-${mbID}-sg-${subKeyName}`}`} //check if its prop id, if not build one from context
      >

        <div className='sub-grouped-btn'>
          <button
            className='expand-btn'
            onClick={handleExpandCollapse}
          >
            <svg><use href="/img/sprite.svg#caret"></use></svg>
            <span className='key'>
              {subKeyName}:
            </span>
            {`{...}`}
            <span className='comma'>{`,`}</span>
          </button>
        </div>

        <div className='expanded-sub-group'>
          <div className='expanded-group-btn'>
            <button
              className='collapse-btn'
              onClick={handleExpandCollapse}
            >
              <svg><use href="/img/sprite.svg#caret"></use></svg>
              <span className='key'>{subKeyName}:</span>
            </button>
            {`{`}
          </div>

          <div className='sub-group-inner'>
            {children}
          </div>

          <span className='sub-bracket'>{`}`}</span>
          <span className='comma'>{`,`}</span>
        </div>
      </div>
    </SubGroupContext.Provider>
  );
};

export default CodeBlockSubGroup;