import { Button } from './Button'

export const ServiceDescription = ({advantages, description, image, alt}) => {

    return(
        <div className={`service-description-container`}>
            <div className='service-text-container'>
                <ul className='service-description-ul'>
                    {advantages.map((item) => {
                        return <li className='service-description-li' key={item}>{item}</li>
                    })}
                </ul>
                <p className='service-description-text'>
                    {description}
                </p>
                <Button text={'I want it!'} className={'want-button'}/>
            </div>
            <div className='service-image-container'>
                <img className='service-description-image' src={image} alt={alt}/>
            </div>
        </div>
    )
}