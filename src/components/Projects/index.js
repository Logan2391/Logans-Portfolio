import './style.css';
import Watch from '../../images/Watch.png';
import Curr from '../../images/currencyConvertorProject.png';
import Weather from '../../images/screenshot.weather.png'
import LogansList from '../../images/LogansList.png'
import MockSite from '../../images/mocksite.png'

function Projects() {

    return (
        <section >
            <div>
                <h1 id='projects' className='projects-main-title'>Projects</h1>
                <div  className='main-project'>
                    <img className='main-image' src={Watch} alt='Watches Co watch technical specifications screen' />
                    <p className='main-description'>Ecomerce site for watches. This
                        site is a full stack application that uses a Mongo database with a
                        Mongoose schema and handles routes with Express. It also uses
                        React components, and has a GraphQL API. It is deployed using
                        Heroku with a MongoDB Atlas database. Modular design for the
                        front end allows for easy expansion of the site. The site is
                        responsive and works on mobile devices. The site is also accessible
                        to screen readers. The site is also optimized for search engines.
                        Modulization allows for easy redeployment for use in other ecomerce
                        sites.</p>
                    <div className='project-btns'>
                        <a className='main-btns' href='https://github.com/nvmax/Joblesswannabies-project3' target='_blank'>Visit the Repository</a>
                        <a className='main-btns' href='https://watchesco.herokuapp.com/' target='_blank'>Visit the Live Page</a>
                    </div>
                </div>
                <div className='lesser-projects'>
                    <div >
                        <img className='main-image' src={LogansList} alt='Watches Co watch technical specifications screen' />
                        <p className='main-description'>Logan's List is a website that allows users to sell all their "L" categoried
                            items and contact others to purchase them. Its easy to use design and simplified categories
                            aren't as overwelming as other classifed resale sites. This project was intended to display
                            our knowledge of SSR. Although it lacks more complex functionality it shows our base
                            understanding of SSR concepts.</p>
                        <div className='project-btns'>
                            <a className='main-btns' href='https://github.com/treavorwills/logans-list/tree/main' target='_blank'>Visit the Repository</a>
                            <a className='main-btns' href='' target='_blank'>Visit the Live Page</a>
                        </div>
                    </div>
                    <div>
                        <img className='main-image' src={Curr} alt='Watches Co watch technical specifications screen' />
                        <p className='main-description'>This application allows you to choose from almost any currency in the
                            world and convert it to another along with presenting you with locations near you that may
                            facilitate your desired exchange. The exchange rates are updated every sixty seconds to
                            provide the
                            most accurate rate availible.(not optimized for mobile)</p>
                        <div className='project-btns'>
                            <a className='main-btns' href='https://github.com/Logan2391/updatedExchange' target='_blank'>Visit the Repository</a>
                            <a className='main-btns' href='https://logan2391.github.io/updatedExchange/' target='_blank'>Visit the Live Page</a>
                        </div>
                    </div>
                    <div>
                        <img className='main-image' src={Weather} alt='Watches Co watch technical specifications screen' />
                        <p className='main-description'>With this webpage you're be able to search any city or country in the world
                            and get corresponding current and future weather data.(not optimized for mobile)</p>
                        <div className='project-btns'>
                            <a className='main-btns' href='https://github.com/Logan2391/WeatherDashboard' target='_blank'>Visit the Repository</a>
                            <a className='main-btns' href='https://logan2391.github.io/WeatherDashboard/' target='_blank'>Visit the Live Page</a>
                        </div>
                    </div>
                    <div>
                        <img className='main-image' src={MockSite} alt='Watches Co watch technical specifications screen' />
                        <p className='main-description'>This is a mock website intended to demonstrate my ability to build a responsive website from the ground up.</p>
                        <div className='project-btns'>
                            <a className='main-btns' href='https://github.com/Logan2391/Mock-Web-Design-LAM' target='_blank'>Visit the Repository</a>
                            <a className='main-btns' href='https://logan2391.github.io/Mock-Web-Design-LAM/' target='_blank'>Visit the Live Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;