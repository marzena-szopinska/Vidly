import React from 'react';
import Input from './input';

class Login extends React.Component {
    state = {
        account: { username: '', password: '' }
    };

    handleSubmit = (e) => {
        // prevent a full page reload
        e.preventDefault();
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
