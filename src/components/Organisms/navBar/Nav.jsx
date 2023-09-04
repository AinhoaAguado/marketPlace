import ImgLogo from "../../../assets/logoColor.png"
import UserImg from "../../../assets/profilePicture.png"

import Button from "../../Atoms/Button"
import Logo from "../../Atoms/Logo"

function Nav() {
  return (
   
    <header>
         <nav>
            <div>
              <Logo style="logoWhite" source={ImgLogo} description={"Company Logo"}/>
              <div>
                <img src={UserImg} alt="Imagen de usuario" className="imgUser" />
                <Button text = "Log Out" style = "btn btn-blue" type="" method=""/> 
              </div>              
            </div>

        </nav>
    </header>
  )
}

export default Nav