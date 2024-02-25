
const Button = ({ onClick, text, disabled, className, 'data-hover-message': hoverMessage }) => {
    return (
        <button
            className={`custom-button ${className}`}
            onClick={onClick}
            disabled={disabled}
            data-hover-message={hoverMessage}
        >
            {text}
        </button>
    );
};

export default Button;