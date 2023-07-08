import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [profileLogin, { error }] = useMutation(LOGIN)

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            await profileLogin({
                variables: {
                    email,
                    password
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h3>Login</h3>
            <form>
                <div className='mb-3'>
                    <label for='exampleInputEmail1' className='form-label'>Email address</label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label for='exampleInputPassword1' className='form-label'>Password</label>
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
