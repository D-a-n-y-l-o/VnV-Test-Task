
export const Button = ({text, type='submit', className, onClick=null}) => {
    return(
        <button
            onClick={onClick}
            type={type}
            className={className}
        >
            {text}
        </button>
    )
}