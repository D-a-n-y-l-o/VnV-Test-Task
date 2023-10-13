export const Service = ({ className, title, onClick }) => {
    return(
        <div className={className} onClick={onClick}>
            <p className='service-filter-title'>{title}</p>
        </div>
    )
}