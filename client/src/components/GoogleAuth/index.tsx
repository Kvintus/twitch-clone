import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../../store/actions'

interface Props {
    isSignedIn: boolean
    signIn: Function
    signOut: Function
}

class GoogleAuth extends React.Component<Props, {}> {
    private auth: any;

    componentDidMount() {
        (window as any).gapi.load('client:auth2', () => {
            (window as any).gapi.client.init({
                clientId: '235388180378-m6lknal90926l66pv0boksjdl0hdp845.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = (window as any).gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }   

    onAuthChange = (isSignedIn: boolean) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i> Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui blue google button">
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

const mapStateToProps = (state: any) => {
    return {isSignedIn: state.auth.isSignedIn}
}


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)