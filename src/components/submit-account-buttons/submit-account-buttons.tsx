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
          className='btn-primary has-icon'
          target={"_blank"}>
          Create account to submit
          <svg><use href="../../img/sprite.svg#external-url" /></svg>
        </a>

        <p>
          Already have an account? <a
            className='external-icon'
            href={loginUrl}
            target={"_blank"}>
            Log in
            <svg><use href="../../img/sprite.svg#external-url" /></svg>
          </a>
          {" "}and submit your proposal now!
        </p>

    </section>
  );
};

export default SubmitAccountButtons;