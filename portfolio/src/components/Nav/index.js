import './style.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Nav() {

    return (
        <nav className='nav-grid nav-style'>
            <AnimationOnScroll offset='25' animateIn="animate__fadeIn">
                <div className='nav-brand chronosfer'>Logan Schoerner</div>
            </AnimationOnScroll>
            <ul className='nav-menu-grid quantum'>
                <li className='nav-item' href='#projects'>Projects</li>
                <li className='nav-item' href='#'>Resume</li>
                <li className='nav-item' href='#'>About</li>
                <li className='nav-item' href='#'>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;