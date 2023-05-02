import React, {FC} from 'react';
import { MainGroupContext } from './code-block-utils';

interface CodeBlocMainGroupProps {
  groupKeyName: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const CodeBlocMainGroup: FC<CodeBlocMainGroupProps> = props => {
  const {
    groupKeyName,
    children
  } = props;

  return (
    <MainGroupContext.Provider value={groupKeyName}>
      <div
        className={'group-inner'}
        id={groupKeyName}
        data-label={groupKeyName}
        >
          {children}
      </div>
    </MainGroupContext.Provider>
  );
};

export default CodeBlocMainGroup;