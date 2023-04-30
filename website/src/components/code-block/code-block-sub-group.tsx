import React, {Children, FC, useRef, useState} from 'react';

interface CodeBlockSubGroupProps {
  subKeyName: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const CodeBlockSubGroup: FC<CodeBlockSubGroupProps> = props => {
  const {
    subKeyName,
    children
  } = props;

  const groupItem = useRef<HTMLInputElement>(null);

  // -----------------------------------------------------------------------------

  const handleExpandCollapse = () => {
    const thisSubGroup = groupItem.current;
    if(thisSubGroup?.classList.contains('is-open')) {
      thisSubGroup?.classList.remove('is-open');
    } else {
      thisSubGroup?.classList.add('is-open');
    }

  }

  return (

    <div className={'sub-group-item property'} ref={groupItem}>

      <div className='sub-grouped-btn'>
        <button
          className='expand-btn'
          onClick={handleExpandCollapse}
        >
          <span className='key'>
            <svg><use href="/img/sprite.svg#caret"></use></svg>
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
  );
};

export default CodeBlockSubGroup;