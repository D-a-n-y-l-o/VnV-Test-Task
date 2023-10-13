import { Button } from './Button';
import { WhyUsCell } from './WhyUsCell';
import { ContentList } from './WhyUsContent';

export const WhyUsGrid = () => {

    return(
        <div className='why-us'>
            <div className='why-us-section'>
                <h1 className='why-us-title'>Why Us?</h1>
                <div className='why-us-container'>
                    {ContentList.map((item) => {
                        return <WhyUsCell 
                            title={item.title}
                            text={item.text}
                            svgName={item.svgName}
                            key={item.id}
                        />
                    })}
                </div>
                <div className='why-us-button'>
                    <Button text={'Order'} className={'order-button order-button-wide'}/>
                </div>
            </div>
        </div>
    )
}