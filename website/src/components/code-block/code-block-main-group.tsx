import React, {FC} from 'react';

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
    <div
      className={'group-inner'}
      id={groupKeyName}
      data-label={groupKeyName}
      >
        {children}
    </div>
  );
};

export default CodeBlocMainGroup;