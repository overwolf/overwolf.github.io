class SSODemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginWindow: null,
            token: localStorage.ssoDemoAccessToken || null
        };

        this._handleStorageEvent = this.handleStorageEvent.bind(this);
    }

    componentDidMount() {
        window.addEventListener('storage', this._handleStorageEvent, false);
    }

    componentWillUnmount() {
        window.removeEventListener('storage', this._handleStorageEvent, false);
    }

    handleStorageEvent(e) {
        // console.log('handleStorageEvent()', e);

        if ( e.key === 'ssoDemoAccessToken' )
            this.setState({ token: e.newValue });
    }

    openLoginWindow() {
        const loginWindow = window.open(
            "https://accounts.overwolf.com/oauth2/auth?response_type=code&client_id=GYp5FgzDpr8vctky&redirect_uri=http://localhost:5000/auth/overwolf/callback&scope=openid+profile+email",
            '_blank'
        );

        // console.log('openLoginWindow()', { loginWindow });

        loginWindow.onbeforeunload = () => this.setState({ loginWindow: null });

        this.setState({ loginWindow });
    }

    logout() {
        delete localStorage.ssoDemoAccessToken;

        this.setState({
            loginWindow: null,
            token: null
        });
    }

    render() {
        return this.state.token ? (
            <div className="sso-demo">
                <p><strong>You logged in. The authorization token is:</strong></p>
                <code>{this.state.token}</code>
                {/* <button className="button-sso-login" onClick={() => this.logout()}>Log out</button> */}
            </div>
        ) : (
            <div className="sso-demo">
                <button className="button-sso-login" onClick={() => this.openLoginWindow()}>Login with OW</button>
            </div>
        );
    }
}

ReactDOM.render(<SSODemo />, document.getElementById('ssoDemo'));
