import './code-block.scss';
import React, {FC} from 'react';

interface CodeBlockSingleItemProps {
  key: string;
  value: string;
}

// -----------------------------------------------------------------------------

const CodeBlockSingleItem: FC<CodeBlockSingleItemProps> = props => {
  const {
    key,
    value
  } = props;

  return (
    <div className='single-property'>
      <div className='single-property-inner'>
        <span className='key'>{key}</span>
        <span className='value'>{value}</span>
      </div>
    </div>
  );
};

export default CodeBlockSingleItem;