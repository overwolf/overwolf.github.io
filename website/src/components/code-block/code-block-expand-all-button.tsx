import React, {FC, useRef} from 'react';

interface CodeBlockExpandAllButtonProps {
  // keyName: string;
  // value: string;
}

// -----------------------------------------------------------------------------

const CodeBlockExpandAllButton: FC<CodeBlockExpandAllButtonProps> = props => {
  const { } = props;
  const expandContainer = useRef<HTMLDivElement>(null);
  const allClassNames = '.group-item, .sub-group-item, .grouped-item';
  // -----------------------------------------------------------------------------

  const handleExpandAll = () => {
    const allExpandableItems = expandContainer.current?.parentElement?.querySelectorAll(allClassNames);

    allExpandableItems?.forEach((item) => {
      item.classList.add('is-open');
    })

    expandContainer.current?.parentElement?.querySelector('.close-all-btn')?.classList.remove('hidden');
  }

  const handleCloseAll = () => {
    const allExpandableItems = expandContainer.current?.parentElement?.querySelectorAll(allClassNames);

    allExpandableItems?.forEach((item) => {
      item.classList.remove('is-open');
    });

    expandContainer.current?.parentElement?.querySelector('.close-all-btn')?.classList.add('hidden');

  }

  // -----------------------------------------------------------------------------

  return (
    <div className='code-block-actions' ref={expandContainer}>
      <button
        className='expand-all-btn'
        onClick={handleExpandAll}
      >
       Expand all
      </button>

      <button
        className='close-all-btn hidden'
        onClick={handleCloseAll}
      >
        Close all
      </button>
    </div>
  );
};

export default CodeBlockExpandAllButton;