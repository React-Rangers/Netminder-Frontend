import React from 'react'

const Home = () => {
    return (
        <section>
            <br></br>
            <div className='main-section'>
                <img className='main-logo' src={require('../images/netminder-logo.png')} alt="Netminder"></img>
                <br></br>
                <button>Login</button><button>Sign Up</button>
            </div>
        </section>
    )
}

export default Home
