import './style.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Watch from '../../images/Watch.png';

function Projects() {

    return (
        <section id='projects' className='project-grid'>
            <div className='main-project-grid'>
                <div>
                    <h1 className='project-title-style'>Watchs Co.</h1>
                </div>
                <img className='project-img' src={Watch} alt='project' />
                <div>
                    <p className='project-description NuKei'>Ecomerce site for watches. This site is a full stack application that uses a Mongo database with a Mongoose schema and handles routes with Express. It also uses React components, and has a GraphQL API. It is deployed using Heroku with a MongoDB Atlas database. Modular design for the front end allows for easy expansion of the site. The site is responsive and works on mobile devices. The site is also accessible to screen readers and is optimized for search engines. The modulization allows for easy redeployment for use in other ecomerce sites.</p>
                    <div className='project-btns'>
                        <button className='project-btn1 NuKei'><a href='https://watchesco.herokuapp.com/' target='_blank' >Deployed App</a></button>
                        <button target='_blank' className='project-btn2 NuKei'><a href='https://github.com/nvmax/Joblesswannabies-project3' target='_blank' >Github Repo</a></button>
                    </div>
                </div>
            </div>
            <div className='lesser-projects-grid'>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export default Projects;