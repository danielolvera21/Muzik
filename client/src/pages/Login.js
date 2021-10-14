import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
                <div className='loginform-container'>
                    <h4 className='contitle'>Login</h4>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <input className = "conname rounded"
                                placeholder='Your Email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input className = "conaddress rounded"
                                placeholder='Password'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <div className = "centered">
                            <button type='submit'>
                                Submit
                            </button>
                            </div>
                        </form>
                        {error && <div>Login failed</div>}
                    </div>
                </div>
    );
};

export default Login;