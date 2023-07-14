import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'

const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [addProfile, { error }] = useMutation(ADD_PROFILE)

    const signUpSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            await addProfile({
                variables: {
                    username,
                    email,
                    password
                }
            })
            console.log('new profile made')

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <br></br>
            <div className='signup-section'>
                <form>
                    <h3>Sign Up</h3>
                    <div className='mb-3'>
                        <label htmlFor='inputUsernameSignUp' className='form-label'>Username</label>
                        <input
                            type='username'
                            className='form-control'
                            id='inputUsernameSignUp'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputEmailSignup' className='form-label'>Email Address</label>
                        <input
                            type='email'
                            className='form-control'
                            id='inputEmailSignUp'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputPasswordSignUp' className='form-label'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            id='inputPasswordSignUp'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-danger' onClick={signUpSubmitHandler}>Submit</button>
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

export default SignUpForm
