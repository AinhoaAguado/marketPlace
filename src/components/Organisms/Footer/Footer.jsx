import Button from "../../Atoms/Button";
import Logo from "../../Atoms/Logo";

import LogoWhite from "../../../assets/logoWhite.png"


import Instagram from "../../../assets/instagram.png";
import Facebook from "../../../assets/facebook.png";
import Tweeter from "../../../assets/tweeter.png"
import TikTok from "../../../assets/tik-tok.png"

function Footer (){
    return (
        <footer>
            <Logo style="logoFooter" source={LogoWhite} description={"Company Logo"}/>
            <div>
                <img src={Instagram} alt="Logo de Instagram" />
                <img src={Facebook} alt="Logo de Facebook" />
                <img src={Tweeter}alt="Logo de Tweeter" />
                <img src={TikTok} alt="Logo de Tik-Tok" />
            </div>
            <div>
                <Button style= "btn btnOrange" text = "Language"/>
                <Button style= "btn btnOrange" text = "Log Out"/>
            </div>
        
        </footer>
        
    )
}
export default Footer;