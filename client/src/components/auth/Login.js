import React from 'react';
// import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date();

        this.state = {
            loginEmail: '',
            loginPassword: '',
            signupEmail: '',
            signupPassword: '',
            signupFName: '',
            signupLName: '',
            signupBDay: {
                month: this.date.getMonth(),
                day: this.date.getDay(),
                year: this.date.getFullYear() - 25
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <>
                <header>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email
                        </label>
                        <input
                            type='email'
                            value={this.state.loginEmail}
                            onChange={this.handleChange('loginEmail')}
                        />

                        <label>
                            Password
                        </label>
                        <input
                            type='password'
                            value={this.state.loginPassword}
                            onChange={this.handleChange('loginPassword')}
                        />

                        <input type='submit' value='Log In' />
                    </form>
                </header>

                <section className='login-left'>
                    <h3>Connect with friends and the world around you on Playbook.</h3>
                    <div>
                        <h3 className='left-bold'>See photos and updates <span>from friends in News Feed.</span></h3>
                        <h3 className='left-bold'>Share what's new <span>in your life on your Timeline.</span></h3>
                        <h3 className='left-bold'>Find more <span>of what you're looking for with Playbook Search.</span></h3>
                    </div>
                </section>

                <section className='login-right'>
                    <h3>Sign Up</h3>
                    <h5>It's free and always will be.</h5>

                    <form>
                        <input type='text' placeholder='First name' value={this.state.signupFName} onChange={this.handleChange('signupFName')} />
                        <input type='text' placeholder='Last name' value={this.state.signupLName} onChange={this.handleChange('signupLName')} />
                        <input type='email' placeholder='Email' value={this.state.signupEmail} onChange={this.handleChange('signupEmail')} />
                        <input type='password' placeholder='New password' value={this.state.signupPassword} onChange={this.handleChange('signupPassword')} />
                        <select>
                            <option value='1905'>1905</option>
                        </select>
                        <input type='submit' value='Sign Up'/>
                    </form>
                </section>
            </>
        )
    }
}

export default Login;