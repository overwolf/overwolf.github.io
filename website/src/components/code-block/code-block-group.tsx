import React, {FC} from 'react';

interface CodeBlocGroupProps {
  groupKeyName: string;
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------

const CodeBlocGroup: FC<CodeBlocGroupProps> = props => {
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

export default CodeBlocGroup;