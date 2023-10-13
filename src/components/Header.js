import logo from '../images/header/vnv logo-05.png';

import {Button} from './Button';

export const Header = () => {
    return(
        <div className='header'>
            <img className='header-logo' src={logo} alt='logo'/>
            <Button text={'Order'} className={'order-button'}/>
        </div>
    )
}