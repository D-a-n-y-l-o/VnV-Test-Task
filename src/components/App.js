import { Header } from './Header';
import { WhyUsGrid } from './WhyUsGrid';
import { ServicesSection } from './ServicesSection';
import { OurProjects } from './OurProjects';
import { ContactUs } from './ContactUs';
import { Brief } from './Brief';
import { FAQ } from './FAQ';
import { SocialMedia } from './SocialMedia';
import { LeadMagnet } from './LeadMagnet';

export const App = () => {
    
    return(
        <div className='app-container'>
            <Header/>
            <WhyUsGrid />
            <ServicesSection />
            <OurProjects />
            <ContactUs />
            <Brief />
            <FAQ />
            <LeadMagnet />
            <SocialMedia />
        </div>
    )
}