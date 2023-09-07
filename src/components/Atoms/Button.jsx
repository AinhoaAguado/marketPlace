import React from "react";

function Button ({text, style, type}){
    return(
        <button className={style} type={type}>{text}</button>
    )
}

export default Button;

