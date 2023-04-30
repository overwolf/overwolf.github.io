import React, {FC, useRef, useState} from 'react';

interface CodeBlockExpandAllButtonProps {
  // keyName: string;
  // value: string;
}

// -----------------------------------------------------------------------------

const CodeBlockExpandAllButton: FC<CodeBlockExpandAllButtonProps> = props => {
  const { } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const expandContainer = useRef<HTMLDivElement>(null);

  // -----------------------------------------------------------------------------

  const handleExpandAll = () => {
    const allExpandableItems = expandContainer.current?.parentElement?.querySelectorAll('.group-item, .sub-group-item, .grouped-item');
    
    if(isExpanded) {
      allExpandableItems?.forEach((item) => {
        item.classList.remove('is-open');
      })
      setIsExpanded(false);
    } else {
      allExpandableItems?.forEach((item) => {
        item.classList.add('is-open');
      })
      setIsExpanded(true);
    }


  }

  // -----------------------------------------------------------------------------

  return (
    <div className='code-block-actions' ref={expandContainer}>
      <button 
        className='expand-all-btn'
        onClick={handleExpandAll}
      >
        {`${isExpanded ? 'Close all' : 'Expand all'}`}
      </button>
    </div>
  );
};

export default CodeBlockExpandAllButton;