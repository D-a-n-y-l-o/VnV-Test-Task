import { ContactForm } from './ContactForm'

export const ContactUs = () => {
    return (
        <div className='contact'>
            <div className='contact-container'>
                <h1 className='contact-title'>Contact Us</h1>
                <div className='contact-container-flex'>
                    <div className='contact-info'>
                        <h1 className='contact-info-title'>Our contacts</h1>
                        <ul className='contact-info-ul'>
                        <li className='contact-info-li'><a href='mailto:team@vnv.solutions' className='contact-info-link'>Email</a></li>
                            <li className='contact-info-li'><a href='https://t.me/vnv_solutions' className='contact-info-link'>Telegram</a></li>
                            <li className='contact-info-li'><a href='https://t.me/vnv_solutions' className='contact-info-link'>WhatsUp</a></li>
                            <li className='contact-info-li'><a href='https://t.me/vnv_solutions' className='contact-info-link'>Viber</a></li>
                        </ul>
                        <p className='contact-info-text'>Also if you want us to contact you instead, you may fill the Contact form</p>
                    </div>
                    <div className='contact-form-container'>
                        <ContactForm />
                    </div>
                </div> 
            </div> 
        </div>
    )
}