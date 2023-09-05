import React from "react";

function Logo ({source, description, style}){
    return(
        <img className ={style} src={source} alt={description}/>
    )
}

export default Logo;