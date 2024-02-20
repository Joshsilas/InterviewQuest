

const Button = ({className, text, onClick}) => {
    return (
        <>
            <button className={className} type='submit' onClick={onClick}>
                {text}
            </button>
        </>
    )
}
export default Button