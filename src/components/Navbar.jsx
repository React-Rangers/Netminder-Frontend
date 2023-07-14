import React from 'react'

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'><img src={require('../images/netminder-icon.png')} height={65} alt='Netminder'></img></a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <a onClick={() => setCurrentPage('Home')} className='nav-link active' aria-current='page' href='#'>Home</a>
            <a onClick={() => setCurrentPage('SignUpForm')} className='nav-link' href='#'>Sign Up</a>
            <a onClick={() => setCurrentPage('LoginForm')} className='nav-link' href='#'>Login</a>
            <a onClick={() => setCurrentPage('Dashboard')} className='nav-link' href='#'>Dashboard</a>
            <a onClick={() => setCurrentPage('Team')} className='nav-link' href='#'>Team</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
