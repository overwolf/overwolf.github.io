import './submit-account-buttons.scss';
import React, {FC} from 'react';

interface TabsProps {
  loginUrl: string;
  createAccountUrl: string;
  // children?: React.ReactNode;
}

// -----------------------------------------------------------------------------

const SubmitAccountButtons: FC<TabsProps> = props => {
  const {
    loginUrl,
    createAccountUrl,
    // children
  } = props;

  return (

    <section className='submit-account-buttons'>

        <a 
          href={createAccountUrl}
          className='btn-primary' 
          target={"_blank"}>
          Create an account
        </a>

        <p>
          Already have an account? <a href={loginUrl} target={"_blank"}>Log in</a>
        </p>

    </section>
  );
};

export default SubmitAccountButtons;