import './code-block.scss';
import React, {FC} from 'react';

interface CodeBlockItemProps {
  keyName: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const CodeBlockItem: FC<CodeBlockItemProps> = props => {
  const {
    keyName,
    children
  } = props;

  return (
    <div
      className={'panel-inner'}
      id={keyName}
      data-label={keyName}
      >
        {children}
    </div>
  );
};

export default CodeBlockItem;