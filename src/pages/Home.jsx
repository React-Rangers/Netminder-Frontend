import React from 'react'
import LoginForm from '../pages/LoginForm'
import SignUpForm from '../pages/SignUpForm'

const Home = ({ setCurrentPage }) => {
    return (
        <section>
            <br></br>
            <div className='main-section'>
                <img className='main-logo' src={require('../images/netminder-logo.png')} alt="Netminder"></img>
                <br></br>
                <a onClick={() => setCurrentPage('LoginForm')} href='/Login'><button>Login</button></a> <a onClick={() => setCurrentPage('SignUpForm')} href='/Signup'><button>Sign Up</button></a>
            </div>
        </section>
    )
}

export default Home
