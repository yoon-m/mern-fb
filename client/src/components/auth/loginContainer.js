import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../actions/authActions';
import Login from './Login';

const msp = state => {
    return {
        
    };
};

const mdp = dispatch => {
    return {
        login: userData => dispatch(loginUser(userData)),
        register: (userData, history) => dispatch(registerUser(userData, history))
    };
};

export default connect(msp, mdp)(Login);