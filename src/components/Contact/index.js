import './style.css';

function Contact() {

    return (
        <section >
            <div>
                <h1 className='contact-title'>Contact Information</h1>
                <div className='contact-info-grid'>
                    <p className='sub-contact-title'>Phone Number</p>
                    <p className='phone-contact'>239-565-3816</p>
                    <p className='sub-contact-title'>Linkedin</p>
                    <a href='https://www.linkedin.com/in/logan-schoerner-19179223a/' target='_blank' className='linkedin-contact'><i className="fab fa-linkedin"></i></a>
                    <p className='sub-contact-title'>Email</p>
                    <p className='email-contact'>logan.schoerner@gmail.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;