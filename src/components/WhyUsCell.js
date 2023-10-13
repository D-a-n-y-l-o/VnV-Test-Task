import { Icon } from './Icon';

export const WhyUsCell = ({title, text, svgName}) => {
    return(
        <div className='why-us-cell'>
            <div className='why-us-cell-header'>
                <h1 className='why-us-pretitle'>{title}</h1>
                <div className='why-us-icon'>
                    <Icon name={svgName}/>
                </div>
            </div>
            <p className='why-us-text'>{text}</p>
        </div>
    )
}