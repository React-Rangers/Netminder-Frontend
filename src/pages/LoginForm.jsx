import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { error, data }] = useMutation(LOGIN)

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log('email -> ', email, '      pw -> ', password);

        try {
            const { data } = await login({
                variables: {
                    email,
                    password
                }
            })
            console.log('data -> ', data)
            Auth.login(data.login.token);
            console.log('Succesful login!')
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <br></br>
            <div className='login-section'>
                <form>
                    <h3>Login</h3>
                    <div className='mb-3'>
                        <label htmlFor='exampleInputEmail1' className='form-label'>Email Address</label>
                        <input
                            type='email'
                            className='form-control'
                            id='exampleInputEmail1'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            id='exampleInputPassword1'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-danger' onClick={loginHandler}>Submit</button>
                    {error && (
                        <div>
                            Something went wrong... 😭
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default LoginForm
