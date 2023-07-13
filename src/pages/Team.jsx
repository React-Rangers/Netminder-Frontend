const Team = () => {
    return (
        <>
            <br></br>
            <div className='team-section'>
                <h3>Meet the React Rangers</h3>
                <div className='team-row-container-one'>
                    <div className='team-member-ryan'>
                        <img className='team-member-ryan-photo' src={require('../images/ryan-pinkston.jpg')}></img>
                        <h4 className='team-member-ryan-text'>Ryan Pinkston</h4>
                        <h5>Full Stack Engineer</h5>
                        <a href='https://github.com/rjpinks' className='team-member-ryan-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-github fa-xl'></i></a> <a href='https://www.linkedin.com/in/ryan-pinkston-01b2b927b/' className='team-member-ryan-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-linkedin fa-xl'></i></a>
                    </div>
                    <div className='team-members'>
                        <img className='team-logo' src={require('../images/react-rangers-logo.jpg')}></img>
                        <h4 className='team-text'>React Rangers</h4>
                        <h5>Group Project</h5>
                        <a href='https://github.com/React-Rangers' className='team-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-github fa-xl'></i></a>
                    </div>
                    <div className='team-member-jessie'>
                        <img className='team-member-jessie-photo' src={require('../images/jessie-galindo.jpg')}></img>
                        <h4 className='team-member-jessie-text'>Jessie Galindo</h4>
                        <h5>Full Stack Engineer</h5>
                        <a href='https://github.com/MrMessyFace' className='team-member-jessie-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-github fa-xl'></i></a> <a href='https://www.linkedin.com/in/jessie-galindo-09418092/' className='team-member-jessie-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-linkedin fa-xl'></i></a>
                    </div>
                </div>
                <div className='team-row-container-two'>
                    <div className='team-member-halima'>
                        <img className='team-member-halima-photo' src={require('../images/halima-shuchi.png')}></img>
                        <h4 className='team-member-halima-text'>Halima Shuchi</h4>
                        <h5>Full Stack Engineer</h5>
                        <a href='https://github.com/Halimaxo' className='team-member-halima-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-github fa-xl'></i></a> <a href='https://www.linkedin.com/in/halimas/' className='team-member-halima-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-linkedin fa-xl'></i></a>
                    </div>
                    <div className='team-member-kar'>
                        <img className='team-member-kar-photo' src={require('../images/kar-sodhi.jpg')}></img>
                        <h4 className='team-member-kar-text'>Kar Sodhi</h4>
                        <h5>Full Stack Engineer</h5>
                        <a href='https://github.com/karsodhi' className='team-member-kar-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-github fa-xl'></i></a> <a href='https://www.linkedin.com/in/karanvir-s-b31945120/' className='team-member-kar-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-linkedin fa-xl'></i></a>
                    </div>
                    <div className='team-member-rachel'>
                        <img className='team-member-rachel-photo' src={require('../images/rachel-mcallister.png')}></img>
                        <h4 className='team-member-rachel-text'>Rachel McAllister</h4>
                        <h5>Full Stack Engineer</h5>
                        <a href='https://github.com/rachelmcallister1' className='team-member-rachel-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-github fa-xl'></i></a> <a href='https://www.linkedin.com/in/rachelmcallister0/' className='team-member-rachel-text' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-linkedin fa-xl'></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
