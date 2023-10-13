import { Services } from './Services';
import { ServiceDescriptions } from './ServiceDescriptions';

export const ServicesSection = () => {

    return(
        <div className='service-section'>
            <div className='service-section-container'>
                <h1 className='service-section-title'>Services</h1>
                <Services />
                <ServiceDescriptions />
            </div>
        </div>
    )
}