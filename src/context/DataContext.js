import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [serviceType, setServiceType] = useState('software-development');

    const [activeElements, setActiveElements] = useState([]);

    return <DataContext.Provider
        value={{
            serviceType,
            setServiceType,
            activeElements,
            setActiveElements,
        }}
    >
        {children}
    </DataContext.Provider>
}