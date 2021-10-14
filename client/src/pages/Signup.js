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
                <div className='signupform-container'>
                    <h4 className='contitle'>Sign Up</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='conaddress rounded'
                                placeholder='Your Username'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <input
                                className='conaddress rounded'
                                placeholder='Your Email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='conaddress rounded'
                                placeholder='Password'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <div className = "centered" >
                            <button type='submit'>
                                Submit
                            </button>
<<<<<<< HEAD
                            </div>
                            {error && <div>Sign Up failed</div>}
=======
                            {/* {error && <div>Sign Up failed</div>} */}
>>>>>>> 84f39d90506fbb940a3efd71151a53fc8ac0a74c
                        </form>
                    </div>
                </div>
    );
};

export default Signup;
