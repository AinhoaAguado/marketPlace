import React from "react";

function Button ({text, style, type, method}){
    return(
        <button className={style} type={type}>{text}</button>
    )
}

export default Button;

{/* <button className={style} type={type} onClick={method}>{text}</button> */}