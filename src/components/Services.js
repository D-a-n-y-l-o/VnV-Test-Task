import { useContext, useState } from 'react';
import { Service } from './Service';

import classnames from 'classnames';
import { DataContext } from "../context/DataContext";

const servicesList = [
    {
        id: 1,
        title: 'Software Development',
        type: 'software-development',
    },
    {
        id: 2,
        title: 'Development of a unique ERP system',
        type: 'development-of-a-unique-erp-system',
    },
    {
        id: 3,
        title: 'Online-store development',
        type: 'online-store-development',
    },
    {
        id: 4,
        title: 'Support and updates',
        type: 'support-and-updates',
    },
    {
        id: 5,
        title: 'Bot development',
        type: 'bot-development',
    },
    {
        id: 6,
        title: 'Website transferring',
        type: 'website-transferring',
    },
];

export const Services = () => {
    
    const { serviceType, setServiceType } = useContext(DataContext);

    const [activeItem, setActiveItem] = useState(servicesList[0]);

    const changeActiveItem = (item) => {
        setActiveItem(item);
        setServiceType(item.type);
        console.log(serviceType)
    }

    return (
        <div className='service-filters-container'>
            {servicesList.map((item) => {
                return <Service 
                    className={classnames('service-filter', {'service-filter-active': activeItem.id === item.id})}
                    title={item.title}
                    onClick={() => {changeActiveItem(item)}}
                    key={item.id}
                />
            })}
        </div>
    )
}