import { useContext } from 'react';

import software from '../images/services/software-development.jpg';
import erp from '../images/services/ERP.png';
import onlineStore from '../images/services/online-store.jpg';
import updates from '../images/services/update.png';
import bot from '../images/services/bot-development.png';
import website from '../images/services/website-transferring.png';

import { ServiceDescription } from './ServiceDescription';
import { DataContext } from '../context/DataContext';

const descriptionsList = [
    {
        id: 1,
        advantages: ['Qualitatively', 'Fast', 'Promising'],
        description: 'Our software is aiming to solve your business problems and meet specific business needs. Our experienced team can develop software for a wide range of industries and applications, especially agriculture, finance, healthcare, and logistics, among others. Our goal is to deliver high-quality software that will solve your business tasks and problems, and optimize your working processes to help your business grow.',
        type: 'software-development',
        image: software,
        alt: 'software-development-img'
    },
    {
        id: 2,
        advantages: ['Everyone Matters', 'Leadership is Here To Serve', 'Resilient'],
        description: 'Developing customized ERP (Enterprise Resource Planning) systems that streamline your business operations, improve communication between departments and automate processes. Our ERP solutions are tailored to the unique needs of your business and can be integrated with other software solutions to provide a comprehensive business management system.',
        type: 'development-of-a-unique-erp-system',
        image: erp,
        alt: 'erp-system-img'
    },
    {
        id: 3,
        advantages: ['Continuous improvements', 'Quality', 'Efficiency'],
        description: 'We offer online-store development services for clients who want to create an online presence for their business. Our team can build and design a customized e-commerce website that is easy to use and provides a seamless user experience. Our goal is to help you increase your online sales, expand customer base, and improve overall business performance. Deep understanding and large experience allows us to build the most conversional online-stores for you.',
        type: 'online-store-development',
        image: onlineStore,
        alt: 'online-store-img'
    },
    {
        id: 4,
        advantages: ['Communication', 'Improvement', 'Expertise'],
        description: 'We offer ongoing support and updates to ensure that your software solutions remain up-to-date and fully functional. Our support team is always ready to fix any issues or concerns that arise, so we provide regular updates to improve performance and add new features if needed. Our goal is to provide our clients with peace of mind and ensure that their software solutions continue to meet their needs over time.',
        type: 'support-and-updates',
        image: updates,
        alt: 'updates-img'
    },
    {
        id: 5,
        advantages: ['Automation', 'Innovation', 'Quality'],
        description: 'We specialize in developing customized bots that can automate tasks and improve efficiency. We can create bots for a wide range of applications, including customer service, social media, and sales, among others. Our goal is to provide you with cutting-edge technology that improves their productivity and enhances their customer experience.',
        type: 'bot-development',
        image: bot,
        alt: 'bot-development-img'
    },
    {
        id: 6,
        advantages: ['Skills', 'Experience', 'Result'],
        description: 'We offer website transferring services for clients who want to move their website from one platform to another. Our team of developers can ensure that the transition is smooth and seamless, and that the website remains fully functional throughout the process. Our goal is to minimize any disruptions to our clients` online presence and ensure that their website continues to meet their business needs.',
        type: 'website-transferring',
        image: website,
        alt: 'website-transferring-img'
    },
];

export const ServiceDescriptions = () => {

    const {serviceType} = useContext(DataContext)

    const [properService] = descriptionsList.filter((item) => item.type === serviceType)

    return(
        <div>
            <ServiceDescription 
                advantages={properService.advantages}
                description={properService.description}
                image={properService.image}
                alt={properService.alt}
            />
        </div>
    )

}

