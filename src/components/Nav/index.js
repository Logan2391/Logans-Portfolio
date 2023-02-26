import './style.css';
import "animate.css/animate.min.css";
import Brand from '../../images/brand.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Nav() {

    return (
        <div className='nav-container'>
            <nav className='grid-nav'>
                <div>
                    <ul className='menu-list font-nav'>
                        <li><a href='#resume'>Resume</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='middle-brand'>
                    <img src={Brand} />
                </div>
                <div>
                    <ul className='social-list social-font'>
                        <li>
                            <a href='https://github.com/Logan2391' target='_blank' className='nav-icon'><i className="fab fa-github"></i></a>
                        </li>
                        <li >
                            <a href='https://www.linkedin.com/in/logan-schoerner-19179223a/' target='_blank' className='nav-icon'><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li >
                            <a href='mailto:loganschoerner.dev@gmail.com' target='_blank' className='nav-icon'><i className="fas fa-envelope"></i></a>
                        </li>
                        <li>
                            <a href='https://calendly.com/loganschoerner-dev/initial-consultation' target='_blank' className='nav-icon'><i className="fas fa-calendar"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Nav;