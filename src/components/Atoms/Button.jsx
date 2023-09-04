


function Button ({text, style, type, method}){
    return(
        <button className={style} type={type} onClick={method}>{text}</button>
    )
}

export default Button;