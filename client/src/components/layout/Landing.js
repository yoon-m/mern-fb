import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return(
            <div>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Log in</Link>
            </div>
        )
    }
}

export default Landing;