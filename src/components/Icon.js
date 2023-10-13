import Icons from '../images/whyUs/sprite.svg';

export const Icon = ({ name, color='rgba(255, 255, 255, 1)', size='20px' }) => {
    return <svg className={`icon icon-${name}`} fill={color} width={size} height={size} >
        <use xlinkHref={`${Icons}#${name}`}></use>
    </svg>
}