import React, {FC} from 'react';
import { MainGroupContext } from '../display-json-utils';

interface CodeBlocMainGroupProps {
  groupKeyName: string;
  id?: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const CodeBlocMainGroup: FC<CodeBlocMainGroupProps> = props => {
  const {
    groupKeyName,
    id,
    children
  } = props;

  return (
    <MainGroupContext.Provider value={`${id ? id : groupKeyName}`}>
      <div
        className={'group-inner'}
        data-label={groupKeyName}
        >
          {children}
      </div>
    </MainGroupContext.Provider>
  );
};

export default CodeBlocMainGroup;