

function Logo ({source, description, style}){
    return(
        <img class ={style} src={source} alt={description}/>
    )
}

export default Logo;