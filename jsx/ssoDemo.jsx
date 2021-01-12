function getQueryVariable(variable) {
    if ( location.search ) {

        let query = location.search.substring(1),
            vars = query.split('&amp;');

        for ( let i = 0; i < vars.length; i++ ) {
            let pair = vars[i].split('=');

            if ( decodeURIComponent(pair[0]) == variable )
                return decodeURIComponent(pair[1]);
        }
    }

    return null;
}

class SSODemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: getQueryVariable('access_token')
        };
    }

    render() {
        return this.state.token ?
        (
            <div className="sso-demo">
                <p><strong>You logged in. The authorization token is:</strong></p>
                <code>{this.state.token}</code>
            </div>
        ) : (
            <div className="sso-demo">
                <a
                    href="https://accounts.overwolf.com/oauth2/auth?response_type=code&amp;client_id=GYp5FgzDpr8vctky&amp;redirect_uri=http://sso-sample-server.overwolf.com/auth/overwolf/callback&amp;scope=openid+profile+email"
                    className="button-sso-login"
                >Login with OW</a>
            </div>
        );
    }
}

ReactDOM.render(<SSODemo />, document.getElementById('ssoDemo'));
