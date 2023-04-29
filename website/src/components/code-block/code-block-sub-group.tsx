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

  const [isExpanded, setIsExpanded] = useState(false);
  const groupItem = useRef<HTMLInputElement>(null);

  // -----------------------------------------------------------------------------

  const handleExpandCollapse = () => {
    
    if(groupItem.current?.classList.contains('is-open')) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }

  }

  return (

    <div className={`sub-group-item property ${isExpanded ? 'is-open' : ''}`} ref={groupItem}>

      <div className='sub-grouped-btn'>
        <span className='key'>{subKeyName}:</span>
        <button
          className='expand-btn'
          onClick={handleExpandCollapse}
        >
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