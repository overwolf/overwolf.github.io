import React, {FC} from 'react';

interface CodeBlockSingleItemProps {
  keyName: string;
  value: string;
}

// -----------------------------------------------------------------------------

const CodeBlockSingleItem: FC<CodeBlockSingleItemProps> = props => {
  const {
    keyName,
    value
  } = props;

  return (
    <div className='single-property'>
      <div className='single-property-inner'>
        <span className='key'>{keyName}:</span>
        <span className='value'>{value}<span className='single-bracket'>{`,`}</span></span>
      </div>
    </div>
  );
};

export default CodeBlockSingleItem;