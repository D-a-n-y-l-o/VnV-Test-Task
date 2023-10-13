import iren from '../images/ourProjects/Iren.jpg';
import volstiny from '../images/ourProjects/volstiny.jpg';
import learnIt from '../images/ourProjects/learnItLive.jpg';

import { Carousel, CarouselItem } from './OurProjectsCarousel';

export const OurProjects = () => {
    return(
        <div className='projects'>
            <h1 className='projects-title'>Our Projects</h1>
            <div className='portfolio'>
                <Carousel>
                    <CarouselItem>
                        <img src={iren} alt={'Iren'} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src={volstiny} alt={'Volstiny'} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src={learnIt} alt={'LearnItLive'} />
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    )
}