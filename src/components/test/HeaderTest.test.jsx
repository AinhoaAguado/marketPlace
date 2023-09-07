import {render} from '@testing-library/react';
import { expect } from 'vitest';

import ImgLogo from "../../assets/logoColor.png"
import UserImg from "../../assets/profilePicture.png"

import Button from "../Atoms/Button"
import Logo from "../Atoms/Logo"
import { Link, BrowserRouter  } from "react-router-dom"


describe("Header test", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
           <header>
                <nav>
                  <div className="logo-container">
                  <Link to="/"><Logo style="logoWhite" source={ImgLogo} description={"Company Logo"}></Logo></Link>            
                  </div>
                  <div>
                      <img src={UserImg} alt="Imagen de usuario" className="imgUser" />
                      <Button text = "Log Out" style = "btn btnBlue" type="" method=""/> 
                  </div>  
                </nav>
            </header>        
        </BrowserRouter>
        
    );
    });

    test("Testing that the div of logo container has renderder the logo-container class",() =>{
        const logoContainer = document.querySelector('logo-container');
        expect(logoContainer).toBeDefined();
    });
    test("Testing that the Logo has rendered",() =>{
        const logo = document.querySelector('logoWhite');
        expect(logo).toBeDefined()
    });
    test("Testing that the Nav has rendered",() =>{
        const logo = document.querySelector('nav');
        expect(logo).toBeDefined()
    });
})

    