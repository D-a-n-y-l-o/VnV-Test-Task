export const Input = ({ name, className, placeholder='', type='text', value, onChange, onBlur, label }) => {  
    
    if(type === 'textarea'){
        return(
            <>
                <label htmlFor={name} className={`${className}-label`}>{label}</label>
                <textarea
                    id={name}
                    name={name}
                    className={`${className}-input`}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    rows='4'
                />
            </>
        )
    }

    return(
        <>
            <label htmlFor={name} className={`${className}-label`}>{label}</label>
            <input
                id={name}
                name={name}
                className={`${className}-input`}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </>
    )
}