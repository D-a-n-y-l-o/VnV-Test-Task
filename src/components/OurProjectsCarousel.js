import React, {useState} from 'react';
import { Button } from './Button';

export const CarouselItem = ({ children, width }) => {
    return(
        <div className='carousel-item' style={{ width:width }}>
            {children}
        </div>
    )
}

export const Carousel = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            setActiveIndex(React.Children.count(children) - 1);
        } else if (newIndex >= React.Children.count(children)){
            setActiveIndex(0);
        } else {
            setActiveIndex(newIndex);
        }
    };

    return(
        <div className='carousel'>
            <div 
                className='carousel-inner'
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width:'100%'})
                })}
            </div>
            <div className='carousel-button-container'>
                <Button 
                    text={'<'}
                    className={'carousel-button-prev carousel-button'}
                    onClick={() => {updateIndex(activeIndex-1)}}
                />
                <Button 
                    text={'>'}
                    className={'carousel-button-next carousel-button'}
                    onClick={() => {updateIndex(activeIndex+1)}}
                />
            </div>
        </div>
    )
}