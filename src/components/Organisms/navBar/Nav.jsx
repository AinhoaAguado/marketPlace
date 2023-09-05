import ImgLogo from "../../../assets/logoColor.png"
import UserImg from "../../../assets/profilePicture.png"
import './nav.css'

import Button from "../../Atoms/Button"
import Logo from "../../Atoms/Logo"

function Nav() {
  return (
   
    <header>
         <nav>
            <div className="logo-container">
              <Logo style="logoWhite" source={ImgLogo} description={"Company Logo"}/>            
            </div>
            <div>
                <img src={UserImg} alt="Imagen de usuario" className="imgUser" />
                <Button text = "Log Out" style = "btn btnBlue" type="" method=""/> 
              </div>  
        </nav>
    </header>
  )
}

export default Nav