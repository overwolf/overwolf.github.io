import React, { useEffect, useState } from 'react';
import './sso-demo.scss';

function SSODemo(props) {

  const [loginWindow, setLoginWindow] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(() => {
      setToken(localStorage.ssoDemoAccessToken || null);
      window.addEventListener('storage', handleStorageEvent, false);

    }, []);

  const handleStorageEvent = (e) => {
  // console.log('handleStorageEvent()', e);

      if ( e.key === 'ssoDemoAccessToken' )
          setToken(e.newValue);
  }

  const openLoginWindow = () => {
      const loginWindow = window.open(
          "https://accounts.overwolf.com/oauth2/auth?response_type=code&client_id=GYp5FgzDpr8vctky&redirect_uri=http://sso-sample-server.overwolf.com/auth/overwolf/callback&scope=openid+profile+email",
          '_blank'
      );

      // console.log('openLoginWindow()', { loginWindow });

      loginWindow.onbeforeunload = () => setLoginWindow(null);
      setLoginWindow(loginWindow)
  }

  const logout = () => {
      delete localStorage.ssoDemoAccessToken;

      setLoginWindow(loginWindow);
      setToken(null);

  }



  // ---------------------------------------------------------------------------

    return (
        <>
        { token &&
        <div className="sso-demo">
          <p><strong>You logged in. The authorization token is:</strong></p>
          <code>{token}</code>
          {/* <button className="button-sso-login" onClick={() => logout()}>Log out</button> */}
        </div>
        }

        { token == null &&
          <div className="sso-demo">
            <button className="button-sso-login" onClick={() => openLoginWindow()}>Login with OW</button>
          </div>
        }
      </>
    );

}

export default SSODemo;

