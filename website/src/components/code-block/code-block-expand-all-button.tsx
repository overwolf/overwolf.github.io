import React, {FC, useRef} from 'react';

interface CodeBlockExpandAllButtonProps {
  // keyName: string;
  // value: string;
}

// -----------------------------------------------------------------------------

const CodeBlockExpandAllButton: FC<CodeBlockExpandAllButtonProps> = props => {
  const { } = props;
  const expandContainer = useRef<HTMLDivElement>(null);
  const expandBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const allClassNames = '.group-item, .sub-group-item, .grouped-item';
  const allExpandableItems = expandContainer.current?.parentElement?.querySelectorAll(allClassNames);
  // -----------------------------------------------------------------------------

  const handleExpandAll = () => {
    allExpandableItems?.forEach((item) => {
      item.classList.add('is-open');
    })

    closeBtn.current?.classList.remove('hidden');
    expandBtn.current?.classList.add('hidden');
  }

  // -----------------------------------------------------------------------------

  const handleCloseAll = () => {
    allExpandableItems?.forEach((item) => {
      item.classList.remove('is-open');
    });

    closeBtn.current?.classList.add('hidden');
    expandBtn.current?.classList.remove('hidden');
  }

  // -----------------------------------------------------------------------------
  return (
    <div className='code-block-actions' ref={expandContainer}>
      <button
        className='expand-all-btn'
        onClick={handleExpandAll}
        ref={expandBtn}
      >
       Expand all
      </button>

      <button
        className='close-all-btn hidden'
        onClick={handleCloseAll}
        ref={closeBtn}
      >
        Close all
      </button>
    </div>
  );
};

export default CodeBlockExpandAllButton;