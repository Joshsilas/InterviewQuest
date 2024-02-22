

const Button = ({className, text, onClick, disabled}) => {
    return (
        <>
            <button className={className} type='submit' onClick={onClick} disabled={disabled}>
                {text}
            </button>
        </>
    )
}
export default Button