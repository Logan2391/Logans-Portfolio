import Self from '../../images/self.png';
import PDF from '../../images/Resume.pdf'
import './style.css';

function Home() {
    return (
        <div className='container home'>
            <header>
                <p className='header-text'>
                    Logan Schoerner
                </p><br />
                <p className='header-text'>Full-Stack Web Developer</p>
            </header>
            <div className='grid-home-self '>
                <div className='left-grid'>
                    <div id='resume'>
                        <h1 className='prof-title'>Services</h1>
                        <ul className='prof-list '>
                            <li>Custom Web-Designs</li>
                            <li>Website Maintenance</li>
                            <li>Website Re-Designs</li>
                            <li>Database Setup</li>
                            <li>Database Maintenance</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='prof-title'>Front-End Proficiencies</h1>
                        <ul className='prof-list '>
                            <li>HTML5</li>
                            <li>React</li>
                            <li>CSS3</li>
                            <li>JavaScript ES6+</li>
                            <li>Responsive Design</li>
                            <li>BootStrap</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='prof-title'>Back-End Proficiencies</h1>
                        <ul className='prof-list '>
                            <li>Node</li>
                            <li>Express</li>
                            <li>SQL</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div>
                        <p className='resume-download-title'>View extended resume...</p>
                        <p className='download'><a href={PDF} download>HERE</a></p>
                    </div>
                </div>
                <div className='self-img'>
                    <img src={Self} alt='man in winter gear in forest' />
                </div>
                <div className='right-grid'>
                    <div>
                        <h1 className='right-title'>YEARS OF EXPERIENCE</h1>
                        <p className='right-description'>1+</p>
                    </div>
                    <div>
                        <h1 className='right-title'>Projects Completed</h1>
                        <p className='right-description'>5</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;