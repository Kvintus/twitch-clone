import React from 'react'


class GoogleAuth extends React.Component {
    private auth: any;
    state = {
        isSignedIn: null,
    }

    componentDidMount() {
        (window as any).gapi.load('client:auth2', () => {
            (window as any).gapi.client.init({
                clientId: '235388180378-m6lknal90926l66pv0boksjdl0hdp845.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = (window as any).gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }   

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"></i> Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui blue google button">
                    <i className="google icon"></i> Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth