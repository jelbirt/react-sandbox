import PropTypes from 'prop-types';

function GreetScreen(props) {

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue</h2>

    return (props.isLoggedIn ?   welcomeMessage    :  loginPrompt);

    if(props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>
    } else {
        return <h2>Please log in to continue</h2>
    }



}

GreetScreen.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

GreetScreen.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default GreetScreen