import React from 'react';
import Input from './input';

class Login extends React.Component {
    state = {
        account: { username: '', password: '' },
        errors: {} // all errors will be stored here
    };

    validate = () => {
        const errors = {};
        if (this.state.account.username.trim() === '')
            // add a key
            errors.username = 'Username required!';

        if (this.state.account.password.trim() === '')
            // add a key
            errors.password = 'Password required!';
        // if there are any errors return errors otherwise return nothing (null)
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e) => {
        // prevent a full page reload
        e.preventDefault();
        // check for errors
        const errors = this.validate();
        this.setState({ errors });
        console.log(errors);
        if (errors) return;

        // Call the server
        console.log('Submitted');
    }

    handleChange = e => {
        const account = { ...this.state.account };
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
        // test
        console.log(this.state.account.username);
        console.log(this.state.account.password);
    }

    render() {

        const { account } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <Input name='username' value={account.username} label='Username:' onChange={this.handleChange} />
                    <Input name='password' value={account.password} label='Password:' onChange={this.handleChange} />
                    <button className='btn btn-primary'>Login</button>

                </form>

            </div>

        );
    }

}

export default Login;
