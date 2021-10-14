import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //event.stopPropagation();
        console.log(event.currentTarget)
        console.log(formState)

        //use try/catch instead of promises to handle errors
        try {
            //execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
                <div className='signupform-container fit'>
                    <h4 className='contitle'>Sign Up</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='loginname rounded'
                                placeholder='Your Username'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <input
                                className='loginname rounded'
                                placeholder='Your Email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='loginname rounded'
                                placeholder='Password'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            {error && <div className="conerror">Sign Up failed</div>}
                            <div className = "centered tenbelow" >
                            <button type='submit'>
                                Submit
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
    );
};

export default Signup;
