import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [profileLogin, { error, data }] = useMutation(LOGIN)

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await profileLogin({
                variables: {
                    email,
                    password
                }
            })
            console.log('Succesful login!')
            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h3>Login</h3>
            <form>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
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

                <button type='submit' className='btn btn-primary' onClick={loginHandler}>Submit</button>

                {error && (
                    <div>
                        Something went wrong... 😭
                    </div>
                )}
            </form>

        </>
    )
}

export default LoginForm
