import React, {FC, useContext} from 'react';
import { CodeBlockContext, MainGroupContext, SubGroupContext } from '../display-json-utils';

interface CodeBlockSingleItemProps {
  keyName: string;
  value: string;
  id?: string;
}

// -----------------------------------------------------------------------------

const CodeBlockSingleItem: FC<CodeBlockSingleItemProps> = props => {
  const {
    keyName,
    value,
    id
  } = props;

  const cbID = useContext(CodeBlockContext);
  const mbID = useContext(MainGroupContext);
  const sbID = useContext(SubGroupContext);

  return (
    <div 
        className='single-property property' 
        id={`${id ? id : `${cbID}-${mbID}-${sbID}-sp-${keyName}-${value}`}`} //check if its prop id, if not build one from context
      >
      <div className='single-property-inner'>
        <span className='key'>{keyName}:</span>
        <span className='value'>{value}<span className='comma'>{`,`}</span></span>
      </div>
    </div>
  );
};

export default CodeBlockSingleItem;